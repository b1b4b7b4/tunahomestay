<script lang="ts">
	import { calculatePrice } from "$lib";
	import type { PageData } from "./$types";
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

	let { data }: { data: PageData } = $props();

	const t = data.translations;
	const texts = t.hero.typingTexts;
	const mainImages = data.mainImages;
	const gridBlocks = data.gridBlocks;
	const advantagesList = data.advantagesList;
	const pricing = data.pricing;
	const mapConfig = data.mapConfig;
</script>

<section
	class="min-h-screen flex justify-center items-center text-white pt-52 md:pt-[250px] relative pb-[100px] px-5 flex-wrap gap-[50px]"
	style={"background-image: url(" + t.hero.backgroundImage + "); no-repeat right right fixed; background-size: cover;"}
>
	<div
		style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));"
		class="absolute inset-0 z-0 h-full w-full"
	></div>

	<ViewAnimation yFrom={30} duration={800}>
		<div
			class="z-1 text-[46px] px-5 md:px-[20px] min-h-[500px] font-semibold text-shadow-lg mb-16 md:mb-[100px]"
		>
			<h1 class="uppercase">{t.hero.title}</h1>

			<h2 style="color: rgb(235, 94, 40)" class="uppercase text-[72px] grid">
				<strong> {t.hero.homestayName} </strong>
				<span class="text-white text-[46px]">{t.hero.tours}</span>
			</h2>

			<div class="uppercase text-[40px] mt-16 md:mt-[100px] max-w-[600px]">
				<TypingAnimation {texts} />
			</div>
		</div>
	</ViewAnimation>

	<ViewAnimation xFrom={30} duration={600}>
		<BookForm {pricing} />
	</ViewAnimation>
</section>

<RunningLine texts={t.runningLine.texts} />

<section
	class="pt-16 md:pt-[90px] pb-12 md:pb-[60px] bg-[#252422] text-white text-center"
>
	<ViewAnimation yFrom={30} duration={800}>
		<div class="text-[14px] mb-5">{t.welcome.title}</div>
		<div
			class="text-[26px] max-w-[600px] lg:max-w-[900px] m-auto text-center font-light mb-8 md:mb-10"
		>
			{@html t.welcome.description}
		</div>

		<SimpleButton variant="primary" c="uppercase text-[16px]" href={mapConfig.googleMapsUrl}
			>{t.welcome.locationButton}</SimpleButton
		>
	</ViewAnimation>
</section>

<div class="bg-[#fefcf2] py-16 md:py-[100px]">
	<div class="max-w-[1160px] m-auto text-center">
		<ImageCarousel images={mainImages} />
	</div>
</div>

<NameBlock
	name={t.whyChooseUs.title}
	description={t.whyChooseUs.description}
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
	name={t.services.title}
	description={t.services.description}
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
	name={t.reviews.title}
	description={t.reviews.description}
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
	style={"background-image: url(" + t.reviews.backgroundImage + "); no-repeat end center fixed; background-size: cover;"}
>
	<div
		style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))"
		class="absolute inset-0 z-0 h-full w-full"
	></div>
	<div class="max-w-[600px] z-1 text-center text-shadow-2xs">
		<h1 class="mb-5 md:mb-[20px] text-[52px] font-bold">{t.booking.title}</h1>
		<p class="mb-5 md:mb-[20px] text-[25px] font-light">
			{t.booking.description}
		</p>
		<SimpleButton variant="primary" c="uppercase text-[16px]">
			{t.booking.button}
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
