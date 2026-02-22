<script lang="ts">
	import useEmblaCarousel from "embla-carousel-svelte";
	import Autoplay from "embla-carousel-autoplay";
	import { ArrowLeft, ArrowRight } from "@lucide/svelte";
	import SimpleButton from "./SimpleButton.svelte";

	const { images = [], autoplay = true } = $props();

	let options = { loop: false };
	let plugins = [...(autoplay ? [Autoplay()] : [])];

	let emblaApi: any;
	let selectedIndex = $state(0);

	const goToPrev = () => emblaApi?.scrollPrev();
	const goToNext = () => emblaApi?.scrollNext();

	const onInit = (event: any) => {
		emblaApi = event.detail;
		emblaApi.plugins().autoplay?.play();
		selectedIndex = emblaApi.selectedScrollSnap();
		emblaApi.on("select", () => {
			selectedIndex = emblaApi.selectedScrollSnap();
		});
	};
</script>

<div>
	<div class="p-5 flex items-center gap-10">
		<SimpleButton
			c="embla__prev border-[#eb5f29] border-2 h-[44px] text-[#eb5f29] rounded-full hover:bg-[#eb5f29] hover:text-white aspect-square flex justify-center items-center"
			onclick={goToPrev}
		>
			<ArrowLeft />
		</SimpleButton>
		<div class="embla">
			<div
				class="embla__viewport"
				onemblaInit={onInit}
				use:useEmblaCarousel={{ options, plugins }}
			>
				<div class="embla__container">
					{#each images as image}
						<div class="embla__slide">
							<img
								src={image.src || image}
								alt=""
								class="w-full h-auto aspect-[1160/1180] object-cover"
							/>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<SimpleButton
			c="embla__next border-[#eb5f29] border-2 h-[44px] text-[#eb5f29] rounded-full hover:bg-[#eb5f29] hover:text-white aspect-square flex justify-center items-center"
			onclick={goToNext}
			><ArrowRight />
		</SimpleButton>
	</div>

	<div class="flex justify-center gap-2 mt-2">
		{#each images as image, index}
			<button
				onclick={() => emblaApi.scrollTo(index)}
				class="w-2 h-2 rounded-full {selectedIndex === index
					? 'bg-black'
					: 'bg-[#eb5f29]'} hover:bg-black"
				aria-label="Go to slide {index + 1}"
			></button>
		{/each}
	</div>

	<div class="mt-5 text-[16px]">{images[selectedIndex]?.title || ""}</div>
</div>

<style>
	.embla__viewport {
		overflow: hidden;
	}

	.embla__container {
		display: flex;
		touch-action: pan-y pinch-zoom;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
