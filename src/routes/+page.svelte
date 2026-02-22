<script>
	import { calculatePrice } from "$lib";
	import BookForm from "$lib/components/BookForm.svelte";
	import SearchHeader from "$lib/components/SearchHeader.svelte";
	import Field from "$lib/ui/Field.svelte";
	import ImageCarousel from "$lib/ui/ImageCarousel.svelte";
	import NameBlock from "$lib/ui/NameBlock.svelte";
	import RunningLine from "$lib/ui/RunningLine.svelte";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import { Menu, Search, X } from "@lucide/svelte";
	import clsx from "clsx";
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";

	const texts = [
		"experience local life with family comfort",
		"friendly service cozy family atmosphere",
		"stay with us feel at home",
		"perfect location great value",
	];

	let currentText = $state("");
	let currentIndex = $state(0);
	let isTyping = $state(true);
	let charIndex = $state(0);

	const mainImages = [
		{
			src: "https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
			title: "Common lounge area",
		},
		{
			src: "https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
			title: "Common lounge area 2",
		},
		{
			src: "https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
			title: "Common lounge area 3",
		},
	];

	const gridBlocks = [
		{
			title: "French elegance",
			description:
				"Stay in a French-style home that adds a touch of romance and elegance to your accommodation.",
			image:
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
		},
		{
			title: "Lakeside Access",
			description:
				"Conveniently situated just a minute’s walk from a beautiful lake, perfect for peaceful walks and enjoying nature.",
			image:
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
		},
		{
			title: "Heritage Tours",
			description:
				"We organize tours to nearby historical sites, museums and attractions.",
			image:
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
		},
		{
			title: "Sustainable Comfort",
			description:
				"Sleep well on eco-friendly, modern beds that ensure comfort while respecting the environment. Each room is also equipped with secure lockers and reading lamps for your convenience.",
			image:
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
		},
		{
			title: "Full Service",
			description:
				"Benefit from a wide range of services including delicious local foods, efficient housekeeping, and free Wi-Fi.",
			image:
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
		},
		{
			title: "Exceptional Hospitality",
			description:
				"Experience our commitment to warm and attentive service, making your stay as enjoyable as possible.",
			image:
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
		},
	];

	const advantagesList = new Array(10).fill({
		title: "Bus Tickets and Motorbike Rentals",
		description:
			"You can conveniently book bus tickets and rent motorbikes directly at our homestay for easy and flexible travel.",
		image:
			"https://static.tildacdn.ink/tild3733-6364-4134-b662-633834313832/computer_workplace_s.svg",
	});

	onMount(() => {
		const type = () => {
			if (isTyping) {
				currentText = texts[currentIndex].slice(0, charIndex + 1);
				charIndex++;
				if (charIndex === texts[currentIndex].length) {
					isTyping = false;
					setTimeout(type, 2000); // pause after typing
				} else {
					setTimeout(type, 100); // typing speed
				}
			} else {
				currentText = texts[currentIndex].slice(0, charIndex);
				charIndex--;
				if (charIndex < 0) {
					isTyping = true;
					currentIndex = (currentIndex + 1) % texts.length;
					setTimeout(type, 500); // pause after deleting
				} else {
					setTimeout(type, 50); // deleting speed
				}
			}
		};
		type();
	});

	let activeMenu = $state(false);
</script>

<header
	class={clsx(
		"flex items-center justify-between min-h-32 md:min-h-[159px] px-8 md:px-[40px] absolute z-10 inset-x-0 text-white transition-all duration-300",
		activeMenu ? "bg-black fixed" : "bg-black/80",
	)}
>
	<SimpleButton href="/">
		<img
			width="150"
			src="https://static.tildacdn.ink/tild6235-6233-4134-a136-643966303263/logo3-removebg-previ.png"
			alt=""
		/>
	</SimpleButton>

	<SimpleButton onclick={() => (activeMenu = !activeMenu)}>
		{#if activeMenu}
			<X size="38px" />
		{:else}
			<Menu size="38px" />
		{/if}
	</SimpleButton>

	{#if activeMenu}
		<div
			transition:fade={{ duration: 200 }}
			class="fixed inset-0 bg-black/60 top-32 md:top-[150px]"
			onclick={() => (activeMenu = false)}
		/>
		<div
			transition:fly={{ y: -20, duration: 200 }}
			class="noscroll text-center fixed top-32 md:top-[150px] inset-x-0 z-10 bg-black px-5 md:px-[20px] py-7.5 md:py-[30px]"
		>
			<div class="grid gap-[20px] mb-[55px] text-[24px]">
				<SimpleButton href="/about">About</SimpleButton>
				<SimpleButton href="/rooms">Rooms</SimpleButton>
				<SimpleButton href="/near">Near us</SimpleButton>
				<SimpleButton href="/tours">Tours</SimpleButton>
			</div>
			<div class="max-w-[583px] m-auto text-[20px] font-light">
				Our address: 12 Alley Ng. 445 Đ. Lạc Long Quân, Xuân La, Tây Hồ, Hà Nội,
				100000, Viet
			</div>
		</div>
	{/if}
</header>

{#if !activeMenu}
	<SearchHeader />
{/if}

<section
	class="min-h-screen grid place-items-center text-white pt-52 md:pt-[250px] relative pb-[100px] px-5 grid-cols-1 lg:grid-cols-2"
	style={"background-image: url(https://optim.tildacdn.ink/tild6335-3966-4163-a330-363534383636/-/format/webp/z5448003676674_f83b3.jpg.webp); no-repeat right right fixed; background-size: cover;"}
>
	<div
		style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));"
		class="absolute inset-0 z-0 h-full w-full"
	></div>

	<div
		class="z-1 text-[46px] px-5 md:px-[20px] min-h-[500px] font-semibold text-shadow-2xs mb-16 md:mb-[100px]"
	>
		<h1 class="uppercase">Experience your ways!</h1>

		<h2 style="color: rgb(235, 94, 40)" class="uppercase text-[72px] grid">
			<strong> Tuna Homestay </strong>
			<span class="text-white text-[46px]">& tours</span>
		</h2>

		<div class="uppercase text-[40px] mt-16 md:mt-[100px] max-w-[600px]">
			<p>{currentText}<span class="cursor">|</span></p>
		</div>
	</div>

	<BookForm />
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
	<div class="text-[14px] mb-5">Welcome to TUNA Homestay!</div>
	<div
		class="text-[26px] max-w-[600px] m-auto text-center font-light mb-8 md:mb-10"
	>
		We are thrilled to have you stay with us! Our guest house features <strong
			class="font-bold">4 cozy rooms</strong
		>, which can accommodate <strong class="font-bold">6 to 8 guests</strong> at
		the same time. You’ll find us just
		<strong class="font-bold"
			>two minutes away from the charming West Lake in Tay Ho</strong
		>, surrounded by beautiful nature and a vibrant atmosphere.<br /><br />
	</div>

	<SimpleButton variant="primary" c="uppercase text-[16px]"
		>Location</SimpleButton
	>
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
	class="w-full rotate-180 flip-horizontal"
	style="height:4vw;fill:#3e3e39;"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 1280 200"
	preserveAspectRatio="none"
>
	<path d="M1280 200H0V0l1280 195.5v4.5z"></path>
</svg>

<section
	class="bg-[#252422] py-[75px] md:py-[100px] px-5 text-white text-center grid justify-center"
>
	<NameBlock
		name="Contacts"
		description="To book a room and for any questions, please call us at: <br/>+84 83 293 88 88"
	/>

	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-[50px] max-w-[1200px]"
	>
		<div class="flex flex-col items-center">
			<img
				src="https://static.tildacdn.ink/tild3862-3561-4136-a361-343730666531/vector.svg"
				alt=""
				class="mb-7.5 md:mb-[30px] w-15 h-15 md:w-[60px] md:h-[60px]"
			/>
			<div class="mb-5 md:mb-[20px] text-[25px]">Contact</div>
			<div class="text-[16px] font-light text-center">
				Our Second Number: Our Second Number:<br />+84 85 586 71 86<br /><br
				/>Email:<br />tunahomestay01@gmail.com
			</div>
		</div>

		<div class="flex flex-col items-center">
			<img
				src="https://static.tildacdn.ink/tild3862-3561-4136-a361-343730666531/vector.svg"
				alt=""
				class="mb-7.5 md:mb-[30px] w-15 h-15 md:w-[60px] md:h-[60px]"
			/>
			<div class="mb-5 md:mb-[20px] text-[25px]">Address</div>
			<div class="text-[16px] font-light text-center">
				12 Alley Ng. 445 Đ. Lạc Long Quân, Xuân La, Tây Hồ, Hà Nội, 100000,
				Vietnam
			</div>
		</div>

		<div class="flex flex-col items-center">
			<img
				src="https://static.tildacdn.ink/tild3862-3561-4136-a361-343730666531/vector.svg"
				alt=""
				class="mb-7.5 md:mb-[30px] w-15 h-15 md:w-[60px] md:h-[60px]"
			/>
			<div class="mb-5 md:mb-[20px] text-[25px]">How to find us</div>
			<div class="text-[16px] font-light text-center">
				We are located in the Western part of the city. If you are coming from
				the airport, take the 90th bus (until the Qua Nga 3 Xuan La 70m - Lac
				Long Quan (Ho Tay)).
			</div>
		</div>
	</div>
</section>

<style>
	.cursor {
		animation: blink 1s infinite;
	}
	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}
	.flip-horizontal {
		transform: scaleX(-1);
	}
</style>
