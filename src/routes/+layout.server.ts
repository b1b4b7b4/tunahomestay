import { db } from "$lib/server/db";
import { contentImages, contentBlocks, contentListItems, pricing, mapConfig, nearPlaces, contentConfig, nearTypes } from "$lib/server/db/schema";
import { eq, and } from "drizzle-orm";
import type { LayoutServerLoad } from "./$types";

const CACHE_TTL = 5 * 60 * 1000;
let cachedData: { data: Awaited<ReturnType<LayoutServerLoad>>; timestamp: number } | null = null;

export const load: LayoutServerLoad = async ({ setHeaders }) => {
	if (cachedData && Date.now() - cachedData.timestamp < CACHE_TTL) {
		setHeaders({
			"cache-control": `public, max-age=${CACHE_TTL / 1000}`,
		});
		return cachedData.data;
	}
	const getPageConfig = async (page: string, section?: string) => {
		const rows = section 
			? await db.select().from(contentConfig).where(and(eq(contentConfig.page, page), eq(contentConfig.section, section)))
			: await db.select().from(contentConfig).where(eq(contentConfig.page, page));
		
		const result: Record<string, string> = {};
		for (const row of rows) {
			result[row.key] = row.value;
		}
		return result;
	};

	const mainImages = await db.select()
		.from(contentImages)
		.where(and(
			eq(contentImages.page, "home"),
			eq(contentImages.section, "mainImages")
		))
		.orderBy(contentImages.order);

	const gridBlocks = await db.select()
		.from(contentBlocks)
		.where(and(
			eq(contentBlocks.page, "home"),
			eq(contentBlocks.section, "gridBlocks")
		))
		.orderBy(contentBlocks.order);

	const advantagesList = await db.select()
		.from(contentListItems)
		.where(and(
			eq(contentListItems.page, "home"),
			eq(contentListItems.listName, "advantages")
		))
		.orderBy(contentListItems.order);

	const pricingData = await db.select().from(pricing).limit(1);
	const mapConfigData = await db.select().from(mapConfig).limit(1);

	const roomsList = await db.select()
		.from(contentListItems)
		.where(and(
			eq(contentListItems.page, "rooms"),
			eq(contentListItems.listName, "rooms")
		))
		.orderBy(contentListItems.order);

	const toursList = await db.select()
		.from(contentListItems)
		.where(and(
			eq(contentListItems.page, "tours"),
			eq(contentListItems.listName, "tours")
		))
		.orderBy(contentListItems.order);

	const nearList = await db.select()
		.from(nearPlaces)
		.where(eq(nearPlaces.distance, "all"))
		.orderBy(nearPlaces.order);

	const nearPlacesData = await db.select().from(nearPlaces);

	const homeHero = await getPageConfig("home", "hero");
	const homeWelcome = await getPageConfig("home", "welcome");
	const homeWhyChooseUs = await getPageConfig("home", "whyChooseUs");
	const homeServices = await getPageConfig("home", "services");
	const homeReviews = await getPageConfig("home", "reviews");
	const homeBooking = await getPageConfig("home", "booking");
	const homeRunningLine = await getPageConfig("home", "runningLine");

	const toursHero = await getPageConfig("tours", "hero");
	const toursCta = await getPageConfig("tours", "cta");
	const roomsHero = await getPageConfig("rooms", "hero");
	const roomsPageConfig = await getPageConfig("rooms", "page");
	const nearHero = await getPageConfig("near", "hero");
	const nearPageConfig = await getPageConfig("near", "page");
	const contactPageConfig = await getPageConfig("contact", "page");

	const differetTypesQuery = await db.select().from(nearTypes).orderBy(nearTypes.order);
	const differetTypes = differetTypesQuery.map((t) => ({ title: t.title, href: t.href }));

	const contactsQuery = await db.select()
		.from(contentBlocks)
		.where(and(
			eq(contentBlocks.page, "contact"),
			eq(contentBlocks.section, "contact")
		))
		.orderBy(contentBlocks.order);
	const contacts = contactsQuery.map((c) => ({ title: c.title, description: c.description, image: c.image }));

	const result = {
		translations: {
			hero: {
				backgroundImage: homeHero.backgroundImage || "",
				title: homeHero.title || "",
				homestayName: homeHero.homestayName || "",
				tours: homeHero.tours || "",
				typingTexts: [
					homeHero.typingText1 || "",
					homeHero.typingText2 || "",
					homeHero.typingText3 || "",
					homeHero.typingText4 || "",
				].filter(Boolean),
			},
			runningLine: { 
				texts: [
					homeRunningLine.text1 || "",
					homeRunningLine.text2 || "",
					homeRunningLine.text3 || "",
				].filter(Boolean) 
			},
			welcome: homeWelcome,
			whyChooseUs: homeWhyChooseUs,
			services: homeServices,
			reviews: {
				backgroundImage: homeReviews.backgroundImage || "",
				title: homeReviews.title || "",
				description: homeReviews.description || "",
			},
			booking: homeBooking,
		},
		mainImages: mainImages.map((m) => ({ src: m.src, title: m.title })),
		gridBlocks: gridBlocks.map((g) => ({ title: g.title, description: g.description, image: g.image })),
		advantagesList: advantagesList.map((a) => ({ title: a.title, description: a.description, image: a.image })),
		differetTypes,
		pricing: pricingData[0] ? { pricePerNight: pricingData[0].pricePerNight, currency: pricingData[0].currency } : { pricePerNight: 200000, currency: "VND" },
		mapConfig: mapConfigData[0] ? {
			center: [parseFloat(mapConfigData[0].centerLat), parseFloat(mapConfigData[0].centerLng)] as [number, number],
			zoom: mapConfigData[0].zoom,
			marker: {
				position: [parseFloat(mapConfigData[0].markerLat), parseFloat(mapConfigData[0].markerLng)] as [number, number],
				popup: mapConfigData[0].markerPopup,
			},
			tileUrl: mapConfigData[0].tileUrl,
			attribution: mapConfigData[0].attribution,
			googleMapsUrl: mapConfigData[0].googleMapsUrl,
		} : (() => { throw new Error("Missing mapConfig in database. Run: npm run db:reseed"); })(),
		toursList: toursList.map((t) => ({ title: t.title, description: t.description ?? "", image: t.image ?? "", small: t.small ?? false })),
		toursPage: {
			hero: {
				title: toursHero.title || "",
				homestayName: toursHero.homestayName || "",
				typingTexts: [
					toursHero.typingText1 || "",
					toursHero.typingText2 || "",
					toursHero.typingText3 || "",
				].filter(Boolean),
				bookButton: toursHero.bookButton || "",
			},
			cta: {
				backgroundImage: toursCta.backgroundImage || "",
				title: toursCta.title || "",
				description: toursCta.description || "",
				submitButton: toursCta.submitButton || "",
				form: {
					emailPlaceholder: toursCta.emailPlaceholder || "",
					namePlaceholder: toursCta.namePlaceholder || "",
					messagePlaceholder: toursCta.messagePlaceholder || "",
				},
				termsText: toursCta.termsText || "",
				termsLink: toursCta.termsLink || "",
			},
		},
		roomsList: roomsList.map((r) => ({ 
			title: r.title, 
			description: r.description ?? "", 
			image: r.image ? [r.image] : [] 
		})),
		roomsPage: {
			hero: {
				subtitle: roomsHero.subtitle || "",
				title: roomsHero.title || "",
			},
			bookButton: roomsPageConfig.bookButton || "",
		},
		nearList: nearList.map((n) => ({ title: n.title, image: n.image })),
		nearPage: {
			hero: {
				videoUrl: nearHero.videoUrl || "",
				title: nearHero.title || "",
				subtitle: nearHero.subtitle || "",
			},
			viewMoreButton: nearPageConfig.viewMoreButton || "",
			exploreMoreTitle: nearPageConfig.exploreMoreTitle || "",
		},
		nearPlaces: nearPlacesData.reduce((acc: Record<string, { title: string; list: { image: string; title: string }[] }>, place) => {
			if (!acc[place.distance]) {
				const titleTemplate = (nearPageConfig.nearPlaceTitle || "Around TUNA Homestay: What to See Within {distance}").replace("{distance}", place.distance.replace("m", " Minutes"));
				acc[place.distance] = { title: titleTemplate, list: [] };
			}
			acc[place.distance].list.push({ image: place.image, title: place.title });
			return acc;
		}, {}),
		contacts: {
			title: contactPageConfig.title || "",
			description: contactPageConfig.description || "",
			items: contacts,
		},
	};

	cachedData = { data: result, timestamp: Date.now() };
	return result;
};
