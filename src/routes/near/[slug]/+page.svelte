<script lang="ts">
	import { page } from "$app/state";
	import NearTypes from "$lib/components/NearTypes.svelte";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import ViewAnimation from "$lib/ui/ViewAnimation.svelte";
	import { ChevronsDown } from "@lucide/svelte";
	import { onMount } from "svelte";

	let scrollY = $state(0);
	// const { slug } = page.params;
	const slug = $derived(page.params.slug);
	const st = {
		"5m": {
			title: "Around TUNA Homestay: <br /> What to See Within 5 Minutes",
			list: [
				{
					image:
						"https://optim.tildacdn.ink/tild3366-6636-4132-b766-356339353434/-/format/webp/west_lake.jpg.webp",
					title: "West Lake (Hồ Tây)",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild3338-3661-4334-b131-306561383861/-/format/webp/water_park.jpg.webp",
					title: "West Lake Water Park (Công viên nước Hồ Tây)",
				},
			],
		},
		"10m": {
			title: "Around TUNA Homestay: <br /> What to See Within 10 Minutes",
			list: [
				{
					image:
						"https://optim.tildacdn.ink/tild3330-3761-4636-b132-653533653634/-/format/webp/2dr.jpg.webp",
					title: "Two Dragons of Tây Hồ (Tượng 2 con Rồng Hồ Tây)",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild3338-3865-4439-a632-303131336537/-/format/webp/Mausoleum.jpg.webp",
					title: "Ho Chi Minh Mausoleum (Lăng Chủ tịch Hồ Chí Minh)",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild6263-3030-4064-b163-396130343665/-/format/webp/zoo.jpg.webp",
					title: "Hanoi Zoological Garden",
				},
			],
		},
		"15m": {
			title: "Around TUNA Homestay: <br /> What to See Within 15 Minutes",
			list: [
				{
					image:
						"https://optim.tildacdn.ink/tild6531-3363-4665-a534-326562393630/-/format/webp/pagoda.jpg.webp",
					title: "Tran Quoc Pagoda (Chùa Trấn Quốc)",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild6236-3430-4638-a331-366637363961/-/resize/1000x/-/format/webp/lenin.jpg.webp",
					title: "Lenin Park (Công viên Lenin)",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild6334-3038-4639-b263-393639636164/-/format/webp/flower.jpg.webp",
					title: "Quảng Bá Flower Market",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild6164-3339-4163-b136-303363343437/-/format/webp/bookworm.jpg.webp",
					title: "Bookworm Hanoi",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild3164-6137-4230-a665-643666663766/-/format/webp/ffd.jpg.webp",
					title: "Cafes and Restaurants on Xuân Diệu Street",
				},
			],
		},

		"20m": {
			title: "Around TUNA Homestay: <br /> What to See Within 20 Minutes",
			list: [
				{
					image:
						"https://optim.tildacdn.ink/tild3532-3735-4565-a530-396538333665/-/format/webp/old_q.jpg.webp",
					title: "Hanoi Old Quarter (Phố Cổ Hà Nội)",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild6462-3237-4430-b862-663665303834/-/format/webp/lake__2.jpg.webp",
					title: "Hoan Kiem Lake (Hồ Hoàn Kiếm)",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild3131-3835-4739-b837-363637333030/-/format/webp/water_show.jpg.webp",
					title: "Lotus Water Puppet Theatre",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild3333-6564-4763-a534-333038343062/-/format/webp/mural2.jpg.webp",
					title: "The Hanoi Ceramic Mosaic Mural ",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild6636-3138-4332-b638-343832653766/-/format/webp/liteer.jpg.webp",
					title: "Temple of Literature (Văn Miếu - Quốc Tử Giám)",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild3061-3563-4766-a163-623466303839/-/resize/960x/-/format/webp/1pillar.jpg.webp",
					title: "One Pillar Pagoda (Chùa Một Cột)",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild3162-3066-4632-b437-643630383863/-/format/webp/Ngoc-Son-Temple-5.jpg.webp",
					title: "Ngoc Son Temple (Chùa Ngọc Sơn)",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild6630-6538-4636-b738-326335653435/-/format/webp/St-Josephs-Cathedral.jpg.webp",
					title: "St. Joseph's Cathedral",
				},
			],
		},

		"30m": {
			title: "Around TUNA Homestay: <br /> What to See Within 30 Minutes",
			list: [
				{
					image:
						"https://optim.tildacdn.ink/tild6165-3435-4032-b631-353339383463/-/format/webp/prison.jpg.webp",
					title: "Hỏa Lò Prison",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild6362-3964-4165-a432-306232303137/-/format/webp/dong-xuan-market-1.jpg.webp",
					title: "Dong Xuan Market (Chợ Đồng Xuân)",
				},
				{
					image:
						"https://optim.tildacdn.ink/tild3132-6336-4133-a532-626261383738/-/format/webp/van-phuc-silk-villag.jpg.webp",
					title: "Van Phuc Silk Village (Làng lụa Vạn Phúc)",
				},
			],
		},
	} as any;

	const data = $derived(st[slug ?? ""]) as any;

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
			<source
				src="https://videos.pexels.com/video-files/20458617/20458617-uhd_3840_2160_24fps.mp4"
				type="video/mp4"
			/>
		</video>
		<div
			style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));"
			class="absolute inset-0 z-0 h-full w-full"
		></div>

		<div class="uppercase text-center z-1 text-shadow-lg">
			<div class="py-[34px] text-[68px] font-bold">{@html data.title}</div>

			<SimpleButton href="/" variant="primary" c="uppercase"
				>return to main page</SimpleButton
			>
		</div>

		<div class="z-1 absolute mx-auto bottom-12 bounce">
			<ChevronsDown size={40} />
		</div>
	</div>

	<div
		class="container py-[80px] grid gap-[60px] justify-center m-auto max-[1200px]"
	>
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

	<div class="text-center text-[30px] font-bold">
		Explore More Local Spots Near TUNA Homestay
	</div>
	<NearTypes />
{/if}
