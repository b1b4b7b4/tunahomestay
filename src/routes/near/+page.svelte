<script>
	import { page } from "$app/state";
	import { differetTypes } from "$lib";
	import NearTypes from "$lib/components/NearTypes.svelte";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import { ChevronsDown } from "@lucide/svelte";
	import clsx from "clsx";
	import { onMount } from "svelte";

	let scrollY = $state(0);

	const list = [
		{
			title: "West Lake (Hồ Tây)",
			image:
				"https://optim.tildacdn.ink/tild3764-6134-4366-b235-613132663432/-/resize/800x600/-/format/webp/west_lake.jpg.webp",
		},
		{
			title: "Tran Quoc Pagoda (Chùa Trấn Quốc)",
			image:
				"https://optim.tildacdn.ink/tild3433-3764-4331-b535-373030336535/-/resize/800x600/-/format/webp/pagoda.jpg.webp",
		},
		{
			title: "Quang Ba Flower Market",
			image:
				"https://optim.tildacdn.ink/tild6537-3931-4062-b261-373335663562/-/resize/800x600/-/format/webp/flower.jpg.webp",
		},
		{
			title: "Cafes and Restaurants on Xuân Diệu Street",
			image:
				"https://optim.tildacdn.ink/tild6231-3931-4337-a466-633935306630/-/resize/800x800/-/format/webp/food.jpg.webp",
		},
		{
			title: "Two Dragons of Tây Hồ (Tượng 2 con Rồng Hồ Tây)",
			image:
				"https://optim.tildacdn.ink/tild6135-6364-4630-b939-353934626230/-/resize/800x800/-/format/webp/2dr.jpg.webp",
		},
		{
			title: "Hanoi Old Quarter (Phố Cổ Hà Nội)",
			image:
				"https://optim.tildacdn.ink/tild3937-3738-4232-a133-653764396332/-/resize/800x800/-/format/webp/old_q.jpg.webp",
		},
		{
			title: "Hoan Kiem Lake (Hồ Hoàn Kiếm)",
			image:
				"https://optim.tildacdn.ink/tild3165-3338-4634-b738-336566373166/-/resize/800x800/-/format/webp/lake__2.jpg.webp",
		},
		{
			title: "Tay Ho Temple (Phủ Tây Hồ)",
			image:
				"https://optim.tildacdn.ink/tild3665-3631-4631-b763-306631326539/-/resize/800x800/-/format/webp/temple_th.jpg.webp",
		},
		{
			title: "Bookworm Hanoi",
			image:
				"https://optim.tildacdn.ink/tild3338-6566-4434-a334-363731386339/-/resize/800x800/-/format/webp/bookworm.jpg.webp",
		},
		{
			title: "The Hanoi Ceramic Mosaic Mural",
			image:
				"https://optim.tildacdn.ink/tild6661-6435-4437-a466-336564323264/-/resize/800x800/-/format/webp/mural2.jpg.webp",
		},
		{
			title: "Ho Chi Minh Mausoleum (Lăng Chủ tịch Hồ Chí Minh)",
			image:
				"https://optim.tildacdn.ink/tild6364-3463-4135-b336-323564333339/-/resize/800x800/-/format/webp/Mausoleum.jpg.webp",
		},
		{
			title: "Temple of Literature (Văn Miếu - Quốc Tử Giám)",
			image:
				"https://optim.tildacdn.ink/tild3837-6134-4363-b233-356364386230/-/resize/800x800/-/format/webp/liteer.jpg.webp",
		},
	];

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
			src="https://videos.pexels.com/video-files/20458617/20458617-uhd_3840_2160_24fps.mp4"
			type="video/mp4"
		/>
	</video>
	<div
		style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));"
		class="absolute inset-0 z-0 h-full w-full"
	></div>

	<div class="uppercase text-center z-1 text-shadow-lg">
		<div class="py-[34px] text-[68px] font-bold">I love hanoi</div>
		<div class="text-[16px]">DISCOVER OUR CITY WITH TUNA HOMESTAY</div>
	</div>

	<div class="z-1 absolute mx-auto bottom-12 bounce">
		<ChevronsDown size={40} />
	</div>
</div>

<div class="container max-w-[1200px] m-auto px-5">
	<NearTypes />

	<div
		class="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[40px]"
	>
		{#each list as item}
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
					>view more
				</SimpleButton>
			</div>
		{/each}
	</div>
</div>
