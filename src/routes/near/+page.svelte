<script lang="ts">
	import { page } from "$app/state";
	import type { PageData } from "./$types";
	import NearTypes from "$lib/components/NearTypes.svelte";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import { ChevronsDown } from "@lucide/svelte";
	import clsx from "clsx";
	import { onMount } from "svelte";

	let { data }: { data: PageData } = $props();
	let scrollY = $state(0);

	const nearList = data.nearList;
	const nearPage = data.nearPage;

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});
</script>

<div
	class="min-h-[89svh] flex justify-center items-center text-white relative py-[100px] px-5 flex-wrap gap-[50px] overflow-hidden"
>
	<video
		class="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
		style="transform: translateY({scrollY * 0.2}px);"
		autoplay
		muted
		loop
		playsinline
	>
		<source
			src={nearPage.hero.videoUrl}
			type="video/mp4"
		/>
	</video>
	<div
		style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));"
		class="absolute inset-0 z-0 h-full w-full"
	></div>

	<div class="uppercase text-center z-1 text-shadow-lg">
		<div class="py-[34px] text-[68px] font-bold">{nearPage.hero.title}</div>
		<div class="text-[16px]">{nearPage.hero.subtitle}</div>
	</div>

	<div class="z-1 absolute mx-auto bottom-12 bounce">
		<ChevronsDown size={40} />
	</div>
</div>

<div class="container max-w-[1200px] m-auto px-5">
	<NearTypes differetTypes={data.differetTypes} />

	<div
		class="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[40px]"
	>
		{#each nearList as item}
			<div
				style="--bg-image: url({item.image});"
				class={clsx(
					"tour-card relative w-full h-full aspect-[360/266] flex flex-col justify-center items-center text-white group hover:scale-101 transition-all duration-300 ease-in-out rounded-[25px] p-2 text-center text-shadow-lg",
				)}
			>
				<div
					class="absolute inset-0"
					style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.20), rgba(0,0,0,0.30));"
				></div>

				<div
					class="text-xl md:text-[30px] z-1 group-hover:pb-8 md:group-hover:pb-[80px] transition-all duration-300"
				>
					{item.title}
				</div>

				<SimpleButton
					variant="primary"
					c="uppercase text-[14px] shadow-xl absolute left-1/2 -translate-x-1/2 transition-all duration-200 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z-1 group-hover:translate-y-12 md:group-hover:translate-y-[60px]"
					>{nearPage.viewMoreButton}</SimpleButton
				>
			</div>
		{/each}
	</div>
</div>
