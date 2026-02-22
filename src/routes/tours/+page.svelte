<script>
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import clsx from "clsx";
	import TypingAnimation from "$lib/ui/TypingAnimation.svelte";
	import Field from "$lib/ui/Field.svelte";

	const toursList = [
		{
			title: "MAGNIFICENT HA LONG CRUISE",
			description: "1 Night Cruise - 1 Night Hotel",
			image:
				"https://optim.tildacdn.ink/tild6537-6262-4666-a635-356666643566/-/format/webp/pexels-ilitafamily-5.jpg.webp",
			small: false,
		},
		{
			title: "HANOI CITY FULL DAY TOUR",
			description: "1 Day",
			image:
				"https://optim.tildacdn.ink/tild3064-3762-4261-a364-306437646131/-/format/webp/Inside-of-St-Josephs.jpg.webp",
			small: false,
		},
		{
			title: "SAPA FANSIPAN PEAK 3143m",
			description: "2 Days - 1 Night Hotel",
			image:
				"https://optim.tildacdn.ink/tild6665-6536-4238-b766-623336633332/-/format/webp/pexels-quang-nguyen-.jpg.webp",
			small: false,
		},
		{
			title: "CAT BA ISLAND TOUR",
			description: "3 Days 2 Nights",
			image:
				"https://optim.tildacdn.ink/tild6633-6539-4238-a464-656361313638/-/format/webp/Flamingo_CatBa_Beach.jpg.webp",
			small: true,
		},
		{
			title: "ONE-DAY NINH-BINH ADVENTURE",
			description: "1 Day",
			image:
				"https://optim.tildacdn.ink/tild3839-3163-4561-a262-616530666136/-/format/webp/31098_1_1.jpg.webp",
			small: true,
		},
		{
			title: "HA GIANG LOOP",
			description: "4 DAYS 3 NIGHTS",
			image:
				"https://optim.tildacdn.ink/tild3233-3338-4532-b737-356239623834/-/format/webp/ha-giang-featured_1.jpg.webp",
			small: false,
		},
	];

	function currentYear() {
		return new Date().getFullYear();
	}
</script>

<div class="container max-w-[1200px] m-auto pt-[200px] px-5">
	<div class="text-5xl md:text-[75px] mb-12 md:mb-[60px] font-bold uppercase">
		Experience tours with <br />
		<span class="text-[#eb5f29]">TUNA HOMESTAY</span>
	</div>

	<div class="mb-12 md:mb-[60px] font-light text-[25px]">
		<TypingAnimation
			texts={[
				"We offer fantastic motorbike adventures,",
				"Captivating sightseeing tours,",
				"and trips to unique locations.",
			]}
		/>
	</div>

	<SimpleButton
		variant="primary"
		c="uppercase text-[16px] shadow-xl mb-24 md:mb-[120px]"
	>
		book a toor
	</SimpleButton>

	<h1 class="uppercase text-4xl md:text-[52px] mb-24 md:mb-[120px]">
		LIST of tours {currentYear()}:
	</h1>

	<div class="grid md:grid-cols-2 gap-10 md:gap-[50px] mb-16 md:mb-[100px]">
		{#each toursList as tour, idx}
			<div
				style="--bg-image: url({tour.image});"
				class={clsx(
					"tour-card relative p-5 md:p-[40px] w-full h-full aspect-[1160/650] flex flex-col justify-end text-white group hover:scale-101 transition-all duration-300 ease-in-out",
					!tour.small && "col-span-full",
				)}
			>
				<div
					class="absolute inset-0"
					style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.20), rgba(0,0,0,0.30));"
				></div>

				<div
					class="z-1 text-shadow-lg transition-all duration-300 group-hover:pb-16 md:group-hover:pb-[80px]"
				>
					<div
						class={clsx(
							"mb-2 md:mb-[10px]",
							tour.small
								? "text-2xl md:text-[40px]"
								: "text-4xl md:text-[65px]",
						)}
					>
						{tour.title}
					</div>
					<div
						class={clsx(
							"font-light",
							tour.small ? "text-lg md:text-[25px]" : "text-xl md:text-[30px]",
						)}
					>
						{@html tour.description}
					</div>
				</div>
				<SimpleButton
					variant="primary"
					c="uppercase text-[16px] shadow-xl absolute bottom-5 left-5 md:bottom-[40px] md:left-[40px] transition-all duration-200 scale-95 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 z-1"
					>learn more
				</SimpleButton>
			</div>
		{/each}
	</div>
</div>

<svg
	class="w-full"
	style="height:4vw;fill:#dfe4dd;"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 1280 200"
	preserveAspectRatio="none"
>
	<path d="M640 195.5L0 0v200h1280V0"></path>
</svg>
<div
	class="min-h-screen grid place-items-center text-white relative"
	style="background-image: url(https://optim.tildacdn.ink/tild6137-6463-4162-a534-333035323435/-/format/webp/pexels-quang-huy-249.jpg.webp); background-size: cover; background-position: center; background-repeat: no-repeat;"
>
	<div
		class="absolute inset-0"
		style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.20), rgba(0,0,0,0.30));"
	></div>
	<div class="z-1 text-center px-5">
		<div class="text-4xl md:text-[52px] mb-5 md:mb-[20px] font-bold uppercase">
			Like it ? Reserve a tour!
		</div>
		<div class="text-xl md:text-[30px] mb-8 md:mb-[50px] max-w-[480px] m-auto">
			Tell us about your choice and we'll get back to you
		</div>

		<form class="grid gap-5 my-7.5 md:my-[30px] max-w-[500px] m-auto">
			<Field placeholder="Your email" />
			<Field placeholder="Name" />
			<Field
				placeholder="What tour would you like to join"
				isTextarea
				c="pt-[16px] min-h-[100px]"
			/>

			<SimpleButton variant="primary" c="uppercase text-[16px]">
				Book a tour
			</SimpleButton>
		</form>

		<div class="text-[12px] font-light text-center opacity-85">
			You agree with our <a href="/terms" class="underline"
				>Terms and Conditions</a
			>
		</div>
	</div>
</div>

<style>
	.tour-card {
		position: relative;
		overflow: hidden;
	}
	.tour-card::before {
		content: "";
		position: absolute;
		inset: 0;
		background-image: var(--bg-image);
		background-size: cover;
		background-position: center;
		transition: transform 0.3s ease;
		z-index: -1;
	}
	.tour-card:hover::before {
		transform: scale(1.05);
	}
</style>
