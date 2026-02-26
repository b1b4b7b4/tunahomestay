<script lang="ts">
	import type { PageData } from "./$types";
	import TunaMap from "$lib/components/TunaMap.svelte";
	import ImageCarousel from "$lib/ui/ImageCarousel.svelte";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import ViewAnimation from "$lib/ui/ViewAnimation.svelte";
	import clsx from "clsx";

	let { data }: { data: PageData } = $props();

	const roomsList = data.roomsList;
	const roomsPage = data.roomsPage;
</script>

<ViewAnimation yFrom={30} duration={800}>
	<div class="pt-[140px]">
		<div class="bg-[#eb5f29]">
			<svg
				class="w-full h-full rotate-180 flip-horizontal max-h-[4svh]"
				style="fill:#fffcf2;"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1280 200"
				preserveAspectRatio="none"
			>
				<path d="M1280 200H0V0l1280 195.5v4.5z"></path>
			</svg>
			<div class="min-h-[184px] text-white text-center">
				<div class="mb-[50px] text-[19px] tracking-wider uppercase">
					{roomsPage.hero.subtitle}
				</div>
				<div class="text-[72px] font-bold">{roomsPage.hero.title}</div>
			</div>
			<svg
				style="fill:#fffcf2;"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1280 200"
				preserveAspectRatio="none"
				class="w-full h-full flip-horizontal max-h-[4svh]"
			>
				<path d="M1280 200H0V0l1280 195.5v4.5z"></path>
			</svg>
		</div>
	</div>
</ViewAnimation>

<div
	class="grid gap-16 lg:gap-[84px] max-w-[1200px] m-auto mt-11 lg:mt-[45px] mb-12 lg:mb-[50px] px-5"
	style="scroll-snap-type: y proximity;"
>
	{#each roomsList as room, idx}
		<ViewAnimation yFrom={50} duration={600} delay={idx * 200}>
			<div
				class="grid grid-cols-1 lg:grid-cols-[auto_auto] gap-3 lg:gap-[50px]"
				style="scroll-snap-align: start;"
			>
				<div class={clsx(idx % 2 != 0 && "lg:order-1")}>
					<ImageCarousel images={room.image} autoplay={false} />
				</div>
				<div class="max-w-[420px] pt-10 px-5 lg:px-0">
					<div class="mb-7.5 lg:mb-[30px] text-[30px] font-medium">
						{room.title}
					</div>
					<div class="text-[16px] font-light">{@html room.description}</div>
					<div class="mt-12.5 lg:mt-[50px]">
						<SimpleButton variant="primary" c="uppercase text-[16px] shadow-xl"
							>{roomsPage.bookButton}</SimpleButton
						>
					</div>
				</div>
			</div>
		</ViewAnimation>
	{/each}
</div>

<TunaMap mapConfig={data.mapConfig} />
