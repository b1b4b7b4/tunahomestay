import "dotenv/config";
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

const sql = neon(process.env.DATABASE_URL ?? "postgres://postgres:postgres@localhost:5432/tuna");
const db = drizzle(sql, { schema });

async function seed() {
	console.log('Seeding database...');

	// Seed page config (includes former translations)
	await db.insert(schema.contentConfig).values([
		// Hero section
		{ page: 'home', section: 'hero', key: 'backgroundImage', value: 'https://optim.tildacdn.ink/tild6335-3966-4163-a330-363534383636/-/format/webp/z5448003676674_f83b3.jpg.webp' },
		{ page: 'home', section: 'hero', key: 'title', value: 'Experience your ways!' },
		{ page: 'home', section: 'hero', key: 'homestayName', value: 'Tuna Homestay' },
		{ page: 'home', section: 'hero', key: 'tours', value: '& tours' },
		{ page: 'home', section: 'hero', key: 'typingText1', value: 'experience local life with family comfort' },
		{ page: 'home', section: 'hero', key: 'typingText2', value: 'friendly service cozy family atmosphere' },
		{ page: 'home', section: 'hero', key: 'typingText3', value: 'stay with us feel at home' },
		{ page: 'home', section: 'hero', key: 'typingText4', value: 'perfect location great value' },

		// Welcome section
		{ page: 'home', section: 'welcome', key: 'title', value: 'Welcome to TUNA Homestay!' },
		{ page: 'home', section: 'welcome', key: 'description', value: 'We are thrilled to have you stay with us! Our guest house features <strong>4 cozy rooms</strong>, which can accommodate <strong>6 to 8 guests</strong> at the same time. You\'ll find us just <strong>two minutes away from the charming West Lake in Tay Ho</strong>, surrounded by beautiful nature and a vibrant atmosphere.' },
		{ page: 'home', section: 'welcome', key: 'locationButton', value: 'Location' },

		// Why choose us
		{ page: 'home', section: 'whyChooseUs', key: 'title', value: 'Why choose Us' },
		{ page: 'home', section: 'whyChooseUs', key: 'description', value: 'We work hard every day to make life of our guests better and happier' },

		// Services
		{ page: 'home', section: 'services', key: 'title', value: 'Our services and advantages' },
		{ page: 'home', section: 'services', key: 'description', value: 'We try to give you a good mood and maximum comfort during your vacation.' },

		// Reviews
		{ page: 'home', section: 'reviews', key: 'backgroundImage', value: 'https://optim.tildacdn.ink/tild6637-3136-4835-a131-613665613961/-/format/webp/z5447907754081_d1825.jpg.webp' },
		{ page: 'home', section: 'reviews', key: 'title', value: 'Reviews from our guests' },
		{ page: 'home', section: 'reviews', key: 'description', value: 'Read what our guests have to say about their stay at TUNA Homestay. Discover real experiences and testimonials from travelers just like you.' },

		// Booking
		{ page: 'home', section: 'booking', key: 'title', value: 'Book a room' },
		{ page: 'home', section: 'booking', key: 'description', value: 'Fill the forms with your information and we will sent you a confirmation e-mail shortly!' },
		{ page: 'home', section: 'booking', key: 'button', value: 'start booking' },

		// Running line
		{ page: 'home', section: 'runningLine', key: 'text1', value: 'Give a wheel a spin available only on a website' },
		{ page: 'home', section: 'runningLine', key: 'text2', value: 'Dont miss out! Spin now for amazing rewards at tuna homestay' },
		{ page: 'home', section: 'runningLine', key: 'text3', value: 'Exclusive online offer at tuna homestay' },

		// Tours page
		{ page: 'tours', section: 'hero', key: 'title', value: 'Experience tours with' },
		{ page: 'tours', section: 'hero', key: 'homestayName', value: 'TUNA HOMESTAY' },
		{ page: 'tours', section: 'hero', key: 'bookButton', value: 'book a tour' },
		{ page: 'tours', section: 'hero', key: 'typingText1', value: 'We offer fantastic motorbike adventures,' },
		{ page: 'tours', section: 'hero', key: 'typingText2', value: 'Captivating sightseeing tours,' },
		{ page: 'tours', section: 'hero', key: 'typingText3', value: 'and trips to unique locations.' },
		{ page: 'tours', section: 'cta', key: 'backgroundImage', value: 'https://optim.tildacdn.ink/tild6137-6463-4162-a534-333035323435/-/format/webp/pexels-quang-huy-249.jpg.webp' },
		{ page: 'tours', section: 'cta', key: 'title', value: 'Like it ? Reserve a tour!' },
		{ page: 'tours', section: 'cta', key: 'description', value: 'Tell us about your choice and we\'ll get back to you' },
		{ page: 'tours', section: 'cta', key: 'submitButton', value: 'Book a tour' },
		{ page: 'tours', section: 'cta', key: 'emailPlaceholder', value: 'Your email' },
		{ page: 'tours', section: 'cta', key: 'namePlaceholder', value: 'Name' },
		{ page: 'tours', section: 'cta', key: 'messagePlaceholder', value: 'What tour would you like to join' },
		{ page: 'tours', section: 'cta', key: 'termsText', value: 'You agree with our' },
		{ page: 'tours', section: 'cta', key: 'termsLink', value: 'Terms and Conditions' },

		// Rooms page
		{ page: 'rooms', section: 'hero', key: 'subtitle', value: 'Tuna Homestay & Experience' },
		{ page: 'rooms', section: 'hero', key: 'title', value: 'Book a room' },
		{ page: 'rooms', section: 'page', key: 'bookButton', value: 'book a room' },

		// Near page
		{ page: 'near', section: 'hero', key: 'videoUrl', value: 'https://videos.pexels.com/video-files/20458617/20458617-uhd_3840_2160_24fps.mp4' },
		{ page: 'near', section: 'hero', key: 'title', value: 'I love hanoi' },
		{ page: 'near', section: 'hero', key: 'subtitle', value: 'DISCOVER OUR CITY WITH TUNA HOMESTAY' },
		{ page: 'near', section: 'page', key: 'viewMoreButton', value: 'view more' },
		{ page: 'near', section: 'page', key: 'exploreMoreTitle', value: 'Explore More Local Spots Near TUNA Homestay' },
		{ page: 'near', section: 'page', key: 'nearPlaceTitle', value: 'Around TUNA Homestay: What to See Within {distance}' },

		// Contact page
		{ page: 'contact', section: 'page', key: 'title', value: 'Contacts' },
		{ page: 'contact', section: 'page', key: 'description', value: 'To book a room and for any questions, please call us at: <br/>+84 83 293 88 88' },
	]).onConflictDoNothing();

	// Seed contacts
	await db.insert(schema.contentBlocks).values([
		{ page: 'contact', section: 'contact', title: 'Contact', description: 'Our Second Number: Our Second Number:<br />+84 85 586 71 86<br /><br />Email:<br />tunahomestay01@gmail.com', image: 'https://static.tildacdn.ink/tild3862-3561-4136-a361-343730666531/vector.svg', order: 0 },
		{ page: 'contact', section: 'contact', title: 'Address', description: '12 Alley Ng. 445 Đ. Lạc Long Quân, Xuân La, Tây Hồ, Hà Nội, 100000, Vietnam', image: 'https://static.tildacdn.ink/tild6236-6131-4138-b733-303137633433/vector.svg', order: 1 },
		{ page: 'contact', section: 'contact', title: 'How to find us', description: 'We are located in the Western part of the city. If you are coming from the airport, take the 90th bus (until the Qua Nga 3 Xuan La 70m - Lac Long Quan (Ho Tay)).', image: 'https://static.tildacdn.ink/tild3765-3763-4361-b034-323666383639/vector.svg', order: 2 },
	]).onConflictDoNothing();

	// Seed pricing
	await db.insert(schema.pricing).values({
		pricePerNight: 200000,
		currency: 'VND',
	}).onConflictDoNothing();

	// Seed map config
	await db.insert(schema.mapConfig).values({
		centerLat: '21.0634',
		centerLng: '105.8195',
		zoom: 15,
		markerLat: '21.059257153168925',
		markerLng: '105.80826036441773',
		markerPopup: 'Tuna Homestay & Experience',
		tileUrl: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		googleMapsUrl: 'https://www.google.com/maps/place/21.059257153168925,105.80826036441773',
	}).onConflictDoNothing();

	// Seed main images
	await db.insert(schema.contentImages).values([
		{ page: 'home', section: 'mainImages', title: 'Female dormatory', src: 'https://optim.tildacdn.ink/tild6161-3662-4632-b931-323665393861/-/format/webp/hostel_room_padded_s.jpg.webp', order: 0 },
		{ page: 'home', section: 'mainImages', title: 'Male dormatory', src: 'https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp', order: 1 },
		{ page: 'home', section: 'mainImages', title: 'Mixed dormatory with private bathroom', src: 'https://optim.tildacdn.ink/tild6632-3461-4466-b761-393638623366/-/format/webp/z5418036234227_ec3c6.jpg.webp', order: 2 },
		{ page: 'home', section: 'mainImages', title: 'Common lounge area', src: 'https://optim.tildacdn.ink/tild6664-6434-4865-b635-386134316361/-/format/webp/z5418307609766_d6233.jpg.webp', order: 3 },
		{ page: 'home', section: 'mainImages', title: 'Mixed dormitory', src: 'https://optim.tildacdn.ink/tild6237-6231-4164-b461-323431646434/-/format/webp/z5447907755449_6e444.jpg.webp', order: 4 },
	]).onConflictDoNothing();

	// Seed grid blocks
	await db.insert(schema.contentBlocks).values([
		{ page: 'home', section: 'gridBlocks', title: 'French elegance', description: 'Stay in a French-style home that adds a touch of romance and elegance to your accommodation.', image: 'https://optim.tildacdn.ink/tild6265-3434-4633-b430-626461343839/-/format/webp/fff.jpg.webp', order: 0 },
		{ page: 'home', section: 'gridBlocks', title: 'Lakeside Access', description: 'Conveniently situated just a minute\'s walk from a beautiful lake, perfect for peaceful walks and enjoying nature.', image: 'https://optim.tildacdn.ink/tild3135-3363-4939-a635-613563636135/-/format/webp/z5456097167424_6056c.jpg.webp', order: 1 },
		{ page: 'home', section: 'gridBlocks', title: 'Heritage Tours', description: 'We organize tours to nearby historical sites, museums and attractions.', image: 'https://optim.tildacdn.ink/tild3964-6562-4330-b536-633132666266/-/format/webp/z5456276848129_625da.jpg.webp', order: 2 },
		{ page: 'home', section: 'gridBlocks', title: 'Sustainable Comfort', description: 'Sleep well on eco-friendly, modern beds that ensure comfort while respecting the environment.', image: 'https://optim.tildacdn.ink/tild6631-6262-4232-b735-393663343262/-/format/webp/z5447907754081_d1825.jpg.webp', order: 3 },
		{ page: 'home', section: 'gridBlocks', title: 'Full Service', description: 'Benefit from a wide range of services including delicious local foods, efficient housekeeping, and free Wi-Fi.', image: 'https://optim.tildacdn.ink/tild6366-6662-4234-b935-326233323461/-/format/webp/pho-bo-ha-noi-142932.jpeg.webp', order: 4 },
		{ page: 'home', section: 'gridBlocks', title: 'Exceptional Hospitality', description: 'Experience our commitment to warm and attentive service, making your stay as enjoyable as possible.', image: 'https://optim.tildacdn.ink/tild3135-6434-4435-b733-316466373233/-/format/webp/z5456275730801_ccc66.jpg.webp', order: 5 },
	]).onConflictDoNothing();

	// Seed advantages list
	await db.insert(schema.contentListItems).values([
		{ page: 'home', listName: 'advantages', title: 'Bus Tickets and Motorbike Rentals', description: 'You can conveniently book bus tickets and rent motorbikes directly at our homestay for easy and flexible travel.', image: 'https://static.tildacdn.ink/tild6135-6631-4539-a365-303031313432/bus_transfer.svg', order: 0 },
		{ page: 'home', listName: 'advantages', title: 'TV+PC', description: 'Television and computer in common area', image: 'https://static.tildacdn.ink/tild3733-6364-4134-b662-633834313832/computer_workplace_s.svg', order: 1 },
		{ page: 'home', listName: 'advantages', title: 'Food and Bar', description: 'You are free to make some tea and coffee or can order delicious breakfasts, lunches, and dinners directly at our homestay', image: 'https://static.tildacdn.ink/tild3831-6661-4237-b565-386236616435/waiter_food_service.svg', order: 2 },
		{ page: 'home', listName: 'advantages', title: 'Wi-fi', description: 'There is a free wi-fi connection in all the house', image: 'https://static.tildacdn.ink/tild3139-3463-4637-a431-306334386366/wi-fi_wifi_network_i.svg', order: 3 },
		{ page: 'home', listName: 'advantages', title: 'Private garden', description: 'Quiet garden in the courtyard of the house with a barbecue area', image: 'https://static.tildacdn.ink/tild3037-6461-4538-b466-633665313537/tree_trees.svg', order: 4 },
		{ page: 'home', listName: 'advantages', title: 'Laundry', description: 'Enjoy our convenient laundry service for a fresh and hassle-free stay.', image: 'https://static.tildacdn.ink/tild3563-3535-4530-b961-303064636535/washer_washing_machi.svg', order: 5 },
		{ page: 'home', listName: 'advantages', title: 'Quiet stay', description: 'There is a very good additional insulation', image: 'https://static.tildacdn.ink/tild6435-3861-4138-a630-626364313931/ear_audition_hear.svg', order: 6 },
		{ page: 'home', listName: 'advantages', title: 'Experience tours & travel desk', description: 'You can take advantage of our tours and travel desk for organizing exciting excursions and trips.', image: 'https://static.tildacdn.ink/tild3534-6162-4237-b862-303163643963/backpack.svg', order: 7 },
	]).onConflictDoNothing();

	// Seed rooms
	await db.insert(schema.contentListItems).values([
		{ page: 'rooms', listName: 'rooms', title: 'FEMALE DORMITORY', description: 'The women\'s room in the hostel is designed in light, cozy tones, creating a sense of homely comfort and tranquility. The room features four bunk beds, each equipped with a comfortable mattress, clean linens, and a personal curtain for privacy.', image: 'https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp', order: 0 },
		{ page: 'rooms', listName: 'rooms', title: 'MIXED DORMITORY WITH PRIVATE BATHROOM', description: 'Our cozy mixed dormitory accommodates eight guests and is equipped with four bunk beds featuring high-quality mattresses and fresh linens.', image: 'https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp', order: 1 },
		{ page: 'rooms', listName: 'rooms', title: 'MALE DORMITORY', description: 'The men\'s room in the hostel accommodates six people and includes three bunk beds.', image: 'https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp', order: 2 },
		{ page: 'rooms', listName: 'rooms', title: 'MIXED DORMITORY', description: 'The mixed room in the hostel accommodates eight people and includes four bunk beds, each equipped with comfortable mattresses and fresh linens.', image: 'https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp', order: 3 },
	]).onConflictDoNothing();

	// Seed tours
	await db.insert(schema.contentListItems).values([
		{ page: 'tours', listName: 'tours', title: 'City Motorbike Tour', description: 'Explore Hanoi like a local on our exciting motorbike tour. Visit hidden gems, local markets, and iconic landmarks.', image: 'https://optim.tildacdn.ink/tild6137-6463-4162-a534-333035323435/-/format/webp/pexels-quang-huy-249.jpg.webp', order: 0 },
		{ page: 'tours', listName: 'tours', title: 'Ho Chi Minh City Trip', description: 'Discover the highlights of Ho Chi Minh City in this comprehensive day trip.', image: 'https://optim.tildacdn.ink/tild6137-6463-4162-a534-333035323435/-/format/webp/pexels-quang-huy-249.jpg.webp', order: 1 },
		{ page: 'tours', listName: 'tours', title: 'Ha Long Bay Adventure', description: 'Experience the breathtaking beauty of Ha Long Bay, a UNESCO World Heritage Site.', image: 'https://optim.tildacdn.ink/tild6137-6463-4162-a534-333035323435/-/format/webp/pexels-quang-huy-249.jpg.webp', order: 2 },
	]).onConflictDoNothing();

	// Seed near places
	await db.insert(schema.nearPlaces).values([
		{ distance: 'all', title: 'West Lake (Hồ Tây)', image: 'https://optim.tildacdn.ink/tild3764-6134-4366-b235-613132663432/-/resize/800x600/-/format/webp/west_lake.jpg.webp', order: 0 },
		{ distance: 'all', title: 'Tran Quoc Pagoda (Chùa Trấn Quốc)', image: 'https://optim.tildacdn.ink/tild3433-3764-4331-b535-373030336535/-/resize/800x600/-/format/webp/pagoda.jpg.webp', order: 1 },
		{ distance: 'all', title: 'Quang Ba Flower Market', image: 'https://optim.tildacdn.ink/tild6537-3931-4062-b261-373335663562/-/resize/800x600/-/format/webp/flower.jpg.webp', order: 2 },
		{ distance: '5m', title: 'West Lake (Hồ Tây)', image: 'https://optim.tildacdn.ink/tild3366-6636-4132-b766-356339353434/-/format/webp/west_lake.jpg.webp', order: 0 },
		{ distance: '5m', title: 'West Lake Water Park', image: 'https://optim.tildacdn.ink/tild3338-3661-4334-b131-306561383861/-/format/webp/water_park.jpg.webp', order: 1 },
		{ distance: '10m', title: 'Two Dragons of Tây Hồ', image: 'https://optim.tildacdn.ink/tild3330-3761-4636-b132-653533653634/-/format/webp/2dr.jpg.webp', order: 0 },
		{ distance: '10m', title: 'Ho Chi Minh Mausoleum', image: 'https://optim.tildacdn.ink/tild3338-3865-4439-a632-303131336537/-/format/webp/Mausoleum.jpg.webp', order: 1 },
		{ distance: '10m', title: 'Hanoi Zoological Garden', image: 'https://optim.tildacdn.ink/tild6263-3030-4064-b163-396130343665/-/format/webp/zoo.jpg.webp', order: 2 },
		{ distance: '15m', title: 'One Pillar Pagoda', image: 'https://optim.tildacdn.ink/tild3433-3764-4331-b535-373030336535/-/resize/800x600/-/format/webp/pagoda.jpg.webp', order: 0 },
		{ distance: '15m', title: 'Vietnam Fine Arts Museum', image: 'https://optim.tildacdn.ink/tild6263-3030-4064-b163-396130343665/-/resize/800x600/-/format/webp/zoo.jpg.webp', order: 1 },
		{ distance: '20m', title: 'Temple of Literature', image: 'https://optim.tildacdn.ink/tild3433-3764-4331-b535-373030336535/-/resize/800x600/-/format/webp/pagoda.jpg.webp', order: 0 },
		{ distance: '20m', title: 'Hoan Kiem Lake', image: 'https://optim.tildacdn.ink/tild3764-6134-4366-b235-613132663432/-/resize/800x600/-/format/webp/west_lake.jpg.webp', order: 1 },
		{ distance: '30m', title: 'Old Quarter', image: 'https://optim.tildacdn.ink/tild6537-3931-4062-b261-373335663562/-/resize/800x600/-/format/webp/flower.jpg.webp', order: 0 },
		{ distance: '30m', title: 'Dong Xuan Market', image: 'https://optim.tildacdn.ink/tild6537-3931-4062-b261-373335663562/-/resize/800x600/-/format/webp/flower.jpg.webp', order: 1 },
	]).onConflictDoNothing();

	// Seed near types
	await db.insert(schema.nearTypes).values([
		{ title: 'All', href: '/near', order: 0 },
		{ title: '05 min', href: '/near/5m', order: 1 },
		{ title: '10 min', href: '/near/10m', order: 2 },
		{ title: '15 min', href: '/near/15m', order: 3 },
		{ title: '20 min', href: '/near/20m', order: 4 },
		{ title: '30 min', href: '/near/30m', order: 5 },
	]).onConflictDoNothing();

	console.log('Database seeded successfully!');
}

seed().catch(console.error);
