<script lang="ts">
	import TunaMap from "$lib/components/TunaMap.svelte";
	import ImageCarousel from "$lib/ui/ImageCarousel.svelte";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import clsx from "clsx";

	const roomsList = [
		{
			title: "FEMALE DORMITORY",
			description:
				"The women's room in the hostel is designed in light, cozy tones, creating a sense of homely comfort and tranquility. The room features four bunk beds, each equipped with a comfortable mattress, clean linens, and a personal curtain for privacy. Next to each bed, there is an individual night light and a power outlet for guests' convenience.",
			image: [
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
			],
		},
		{
			title: "MIXED DORMITORY WITH PRIVATE BATHROOM",
			description:
				"Our cozy mixed dormitory accommodates eight guests and is equipped with four bunk beds featuring high-quality mattresses and fresh linens. Each guest can enjoy the convenience of an individual shower and toilet, providing necessary privacy and comfort. <br/> The room is fitted with air conditioning to maintain an optimal climate regardless of the weather. The modern interior of the room promotes relaxation and rest. Additionally, guests have access to free Wi-Fi, personal safes for securing valuables, and bedside night lighting.",
			image: [
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
			],
		},
		{
			title: "MALE DORMITORY",
			description:
				"The men's room in the hostel accommodates six people and includes three bunk beds. One of these beds is designed as a double bed, adding a unique and comfortable element to the room. Each bed is equipped with a comfortable mattress and fresh linens, as well as individual lamps and power outlets.<br/> vThe room also features air conditioning, ensuring a comfortable stay even during hot weather. For convenience and relaxation, there is a comfortable chair where guests can unwind or read a book.",
			image: [
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
			],
		},
		{
			title: "MIXED DORMITORY",
			description:
				"The mixed room in the hostel accommodates eight people and includes four bunk beds, each equipped with comfortable mattresses and fresh linens. This space is ideal for both men and women, providing a comfortable place for rest and interaction with other guests.<br/> The room's interior has been recently updated and is designed in a modern style with a focus on functionality and style. Large windows fill the room with natural light, making it brighter and more welcoming.",
			image: [
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
				"https://optim.tildacdn.ink/tild3665-6465-4632-b434-376663353064/-/format/webp/z5423169899372_09ca3.jpg.webp",
			],
		},
	];
</script>

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
				Tuna Homestay & Experience
			</div>
			<div class="text-[72px] font-bold">Book a room</div>
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

<div
	class="grid gap-16 lg:gap-[84px] max-w-[1200px] m-auto mt-11 lg:mt-[45px] mb-12 lg:mb-[50px] px-5"
	style="scroll-snap-type: y proximity;"
>
	{#each roomsList as room, idx}
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
						>book a room
					</SimpleButton>
				</div>
			</div>
		</div>
	{/each}
</div>

<TunaMap />
