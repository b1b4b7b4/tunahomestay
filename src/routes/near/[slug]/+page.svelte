<script lang="ts">
	import { page } from "$app/state";
	import type { PageData } from "./$types";
	import NearTypes from "$lib/components/NearTypes.svelte";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import ViewAnimation from "$lib/ui/ViewAnimation.svelte";
	import { ChevronsDown } from "@lucide/svelte";
	import { onMount } from "svelte";

	let { data: pageData }: { data: PageData } = $props();
	let scrollY = $state(0);

	const slug = $derived(page.params.slug);
	const nearPlaces = pageData.nearPlaces;
	const nearPage = pageData.nearPage;
	const st = nearPlaces as Record<
		string,
		{ title: string; list: { image: string; title: string }[] }
	>;
	const data = $derived(st[slug ?? ""] || st["all"]);

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});
</script>

{#if slug}
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
			<source src={nearPage.hero.videoUrl} type="video/mp4" />
		</video>
		<div
			style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));"
			class="absolute inset-0 z-0 h-full w-full"
		></div>

		<div class="uppercase text-center z-1 text-shadow-lg">
			<div class="py-[34px] text-[40px] md:text-[68px] font-bold max-w-[1200px]">
				{@html data.title}
			</div>
		</div>

		<div class="z-1 absolute mx-auto bottom-12 bounce">
			<ChevronsDown size={40} />
		</div>
	</div>

	<div class="bg-[#fefcf2] py-[100px]">
		<div class="max-w-[1160px] m-auto px-5">
			<div class="grid gap-[50px]">
				{#each data.list as item, idx}
					<ViewAnimation yFrom={40} duration={600} delay={idx * 150}>
						<div class="grid grid-cols-2 items-center gap-[30px]">
							<img src={item.image} class="w-full h-full" alt="" />
							<div>
								<div class="text-[26px] font-bold">{item.title}</div>
							</div>
						</div>
					</ViewAnimation>
				{/each}
			</div>

			<div class="text-center text-[30px] font-bold mt-[100px]">
				{nearPage.exploreMoreTitle}
			</div>
			<NearTypes differetTypes={pageData.differetTypes} />
		</div>
	</div>
{/if}
