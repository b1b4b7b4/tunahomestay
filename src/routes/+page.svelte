<script>
	import { calculatePrice } from "$lib";
	import BookForm from "$lib/components/BookForm.svelte";
	import SearchHeader from "$lib/components/SearchHeader.svelte";
	import Field from "$lib/ui/Field.svelte";
	import ImageCarousel from "$lib/ui/ImageCarousel.svelte";
	import NameBlock from "$lib/ui/NameBlock.svelte";
	import RunningLine from "$lib/ui/RunningLine.svelte";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import TypingAnimation from "$lib/ui/TypingAnimation.svelte";
	import ViewAnimation from "$lib/ui/ViewAnimation.svelte";
	import { Menu, Search, X } from "@lucide/svelte";
	import clsx from "clsx";
	import { fade, fly } from "svelte/transition";

	const texts = [
		"experience local life with family comfort",
		"friendly service cozy family atmosphere",
		"stay with us feel at home",
		"perfect location great value",
	];

	const mainImages = [
		{
			src: "https://optim.tildacdn.ink/tild6161-3662-4632-b931-323665393861/-/format/webp/hostel_room_padded_s.jpg.webp",
			title: "Female dormatory",
		},
		{
			src: "https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
			title: "Male dormatory",
		},
		{
			src: "https://optim.tildacdn.ink/tild6632-3461-4466-b761-393638623366/-/format/webp/z5418036234227_ec3c6.jpg.webp",
			title: "Mixed dormatory with private bathroom",
		},
		{
			src: "https://optim.tildacdn.ink/tild6664-6434-4865-b635-386134316361/-/format/webp/z5418307609766_d6233.jpg.webp",
			title: "Common lounge area",
		},
		{
			src: "https://optim.tildacdn.ink/tild6237-6231-4164-b461-323431646434/-/format/webp/z5447907755449_6e444.jpg.webp",
			title: "Mixed dormitory",
		},
	];

	const gridBlocks = [
		{
			title: "French elegance",
			description:
				"Stay in a French-style home that adds a touch of romance and elegance to your accommodation.",
			image:
				"https://optim.tildacdn.ink/tild6265-3434-4633-b430-626461343839/-/format/webp/fff.jpg.webp",
		},
		{
			title: "Lakeside Access",
			description:
				"Conveniently situated just a minute’s walk from a beautiful lake, perfect for peaceful walks and enjoying nature.",
			image:
				"https://optim.tildacdn.ink/tild3135-3363-4939-a635-613563636135/-/format/webp/z5456097167424_6056c.jpg.webp",
		},
		{
			title: "Heritage Tours",
			description:
				"We organize tours to nearby historical sites, museums and attractions.",
			image:
				"https://optim.tildacdn.ink/tild3964-6562-4330-b536-633132666266/-/format/webp/z5456276848129_625da.jpg.webp",
		},
		{
			title: "Sustainable Comfort",
			description:
				"Sleep well on eco-friendly, modern beds that ensure comfort while respecting the environment. Each room is also equipped with secure lockers and reading lamps for your convenience.",
			image:
				"https://optim.tildacdn.ink/tild6631-6262-4232-b735-393663343262/-/format/webp/z5447907754081_d1825.jpg.webp",
		},
		{
			title: "Full Service",
			description:
				"Benefit from a wide range of services including delicious local foods, efficient housekeeping, and free Wi-Fi.",
			image:
				"https://optim.tildacdn.ink/tild6366-6662-4234-b935-326233323461/-/format/webp/pho-bo-ha-noi-142932.jpeg.webp",
		},
		{
			title: "Exceptional Hospitality",
			description:
				"Experience our commitment to warm and attentive service, making your stay as enjoyable as possible.",
			image:
				"https://optim.tildacdn.ink/tild3135-6434-4435-b733-316466373233/-/format/webp/z5456275730801_ccc66.jpg.webp",
		},
	];

	const advantagesList = [
		{
			title: "Bus Tickets and Motorbike Rentals",
			description:
				"You can conveniently book bus tickets and rent motorbikes directly at our homestay for easy and flexible travel.",
			image:
				"https://static.tildacdn.ink/tild6135-6631-4539-a365-303031313432/bus_transfer.svg",
		},
		{
			title: "TV+PC",
			description: "Television and computer in common area",
			image:
				"https://static.tildacdn.ink/tild3733-6364-4134-b662-633834313832/computer_workplace_s.svg",
		},
		{
			title: "Food and Bar ",
			description:
				"You are free to make some tea and coffee or can order delicious breakfasts, lunches, and dinners directly at our homestay",
			image:
				"https://static.tildacdn.ink/tild3831-6661-4237-b565-386236616435/waiter_food_service.svg",
		},
		{
			title: "Wi-fi",
			description: "There is a free wi-fi connection in all the house",
			image:
				"https://static.tildacdn.ink/tild3139-3463-4637-a431-306334386366/wi-fi_wifi_network_i.svg",
		},
		{
			title: "Private garden",
			description:
				"Quiet garden in the courtyard of the house with a barbecue area",
			image:
				"https://static.tildacdn.ink/tild3037-6461-4538-b466-633665313537/tree_trees.svg",
		},
		{
			title: "Laundry",
			description:
				"Enjoy our convenient laundry service for a fresh and hassle-free stay. Quick turnaround and quality care ensure you always look your best while traveling",
			image:
				"https://static.tildacdn.ink/tild3563-3535-4530-b961-303064636535/washer_washing_machi.svg",
		},
		{
			title: "Quiet stay",
			description: "There is avery good additional insulation ",
			image:
				"https://static.tildacdn.ink/tild6435-3861-4138-a630-626364313931/ear_audition_hear.svg",
		},
		{
			title: "Experience tours & travel desk",
			description:
				"You can take advantage of our tours and travel desk for organizing exciting excursions and trips. We assist with planning and booking tours to help you make the most of your stay.",
			image:
				"https://static.tildacdn.ink/tild3534-6162-4237-b862-303163643963/backpack.svg",
		},
	];
</script>

<section
	class="min-h-screen flex justify-center items-center text-white pt-52 md:pt-[250px] relative pb-[100px] px-5 flex-wrap gap-[50px]"
	style={"background-image: url(https://optim.tildacdn.ink/tild6335-3966-4163-a330-363534383636/-/format/webp/z5448003676674_f83b3.jpg.webp); no-repeat right right fixed; background-size: cover;"}
>
	<div
		style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));"
		class="absolute inset-0 z-0 h-full w-full"
	></div>

	<ViewAnimation yFrom={30} duration={800}>
		<div
			class="z-1 text-[46px] px-5 md:px-[20px] min-h-[500px] font-semibold text-shadow-lg mb-16 md:mb-[100px]"
		>
			<h1 class="uppercase">Experience your ways!</h1>

			<h2 style="color: rgb(235, 94, 40)" class="uppercase text-[72px] grid">
				<strong> Tuna Homestay </strong>
				<span class="text-white text-[46px]">& tours</span>
			</h2>

			<div class="uppercase text-[40px] mt-16 md:mt-[100px] max-w-[600px]">
				<TypingAnimation {texts} />
			</div>
		</div>
	</ViewAnimation>

	<ViewAnimation xFrom={30} duration={600}>
		<BookForm />
	</ViewAnimation>
</section>

<RunningLine
	texts={[
		"Give a wheel a spin available only on a website",
		"Dont miss out! Spin now for amazing rewards at tuna homestay",
		"Exclusive online offer at tuna homestay",
	]}
/>

<section
	class="pt-16 md:pt-[90px] pb-12 md:pb-[60px] bg-[#252422] text-white text-center"
>
	<ViewAnimation yFrom={30} duration={800}>
		<div class="text-[14px] mb-5">Welcome to TUNA Homestay!</div>
		<div
			class="text-[26px] max-w-[600px] lg:max-w-[900px] m-auto text-center font-light mb-8 md:mb-10"
		>
			We are thrilled to have you stay with us! Our guest house features <strong
				class="font-bold">4 cozy rooms</strong
			>, which can accommodate <strong class="font-bold">6 to 8 guests</strong>
			at the same time. You’ll find us just
			<strong class="font-bold"
				>two minutes away from the charming West Lake in Tay Ho</strong
			>, surrounded by beautiful nature and a vibrant atmosphere.<br /><br />
		</div>

		<SimpleButton variant="primary" c="uppercase text-[16px]"
			>Location</SimpleButton
		>
	</ViewAnimation>
</section>

<div class="bg-[#fefcf2] py-16 md:py-[100px]">
	<div class="max-w-[1160px] m-auto text-center">
		<ImageCarousel images={mainImages} />
	</div>
</div>

<NameBlock
	name="Why choose Us"
	description="We work hard every day to make life of our guests better and happier"
/>

<section
	class="bg-[#fefcf2] capitalize py-2.5 md:py-[10px] flex flex-col items-center pb-32 md:pb-[200px]"
>
	<div class="grid gap-5 max-w-[1160px]">
		{#each gridBlocks as block, idx}
			<ViewAnimation yFrom={50} duration={600} delay={idx * 150}>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-5">
					<div
						class={clsx(
							"flex flex-col gap-6 text-[25px]",
							idx % 2 === 0 ? "md:order-1" : "md:order-2",
						)}
					>
						<div class="font-medium">{block.title}</div>
						<div class="font-light">{block.description}</div>
					</div>
					<img
						src={block.image}
						class={clsx(
							"aspect-560/460 w-full md:w-140 h-auto md:h-115 object-cover",
							idx % 2 === 0 ? "md:order-2" : "md:order-1",
						)}
						alt=""
					/>
				</div>
			</ViewAnimation>
		{/each}
	</div>
</section>

<NameBlock
	name="Our services and advantages"
	description="We try to give you a good mood and maximum comfort during your vacation."
/>

<section
	class=" capitalize py-2.5 md:py-[10px] flex flex-col items-center mb-32 md:mb-[200px]"
>
	<div
		class="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-[80px] gap-x-10 md:gap-x-[40px] max-w-[990px] px-5"
	>
		{#each advantagesList as block, idx}
			<ViewAnimation yFrom={40} duration={500} delay={idx * 100}>
				<div class="flex gap-5 md:gap-[20px]">
					<img
						src={block.image}
						alt=""
						class="w-20 h-20 md:w-[80px] md:h-[80px]"
					/>
					<div class="">
						<div class="mb-2 md:mb-[8px] text-[30px]">
							{block.title}
						</div>
						<div class="text-[16px] font-light">{block.description}</div>
					</div>
				</div>
			</ViewAnimation>
		{/each}
	</div>
</section>

<NameBlock
	name="Reviews from our guests"
	description="Read what our guests have to say about their stay at TUNA Homestay. Discover real experiences and testimonials from travelers just like you."
/>

<svg
	class="w-full flip-horizontal"
	style="height:4vw;fill:#020202;"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 1280 200"
	preserveAspectRatio="none"
>
	<path d="M1280 200H0V0l1280 195.5v4.5z"></path>
</svg>
<section
	class="min-h-[80svh] grid place-items-center text-white relative py-16 md:py-[100px] px-5"
	style={"background-image: url(https://optim.tildacdn.ink/tild6637-3136-4835-a131-613665613961/-/format/webp/z5447907754081_d1825.jpg.webp); no-repeat end center fixed; background-size: cover;"}
>
	<div
		style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))"
		class="absolute inset-0 z-0 h-full w-full"
	></div>
	<div class="max-w-[600px] z-1 text-center text-shadow-2xs">
		<h1 class="mb-5 md:mb-[20px] text-[52px] font-bold">Book a room</h1>
		<p class="mb-5 md:mb-[20px] text-[25px] font-light">
			Fill the forms with your information and we will sent you a confirmation
			e-mail shortly!
		</p>
		<SimpleButton variant="primary" c="uppercase text-[16px]">
			start booking
		</SimpleButton>
	</div>
</section>
<svg
	class="w-full rotate-180 flip-horizontal mb-[20px]"
	style="height:4vw;fill:#3e3e39;"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 1280 200"
	preserveAspectRatio="none"
>
	<path d="M1280 200H0V0l1280 195.5v4.5z"></path>
</svg>

<style>
	.flip-horizontal {
		transform: scaleX(-1);
	}
</style>
