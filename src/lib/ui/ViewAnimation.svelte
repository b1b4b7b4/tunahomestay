<script lang="ts">
	import { onMount } from "svelte";

	let {
		children,
		opacityFrom = 0,
		opacityTo = 1,
		yFrom = 0,
		yTo = 0,
		xFrom = 0,
		xTo = 0,
		duration = 500,
		delay = 0,
		threshold = 0.1,
	} = $props<{
		children: any;
		opacityFrom?: number;
		opacityTo?: number;
		yFrom?: number;
		yTo?: number;
		xFrom?: number;
		xTo?: number;
		duration?: number;
		delay?: number;
		threshold?: number;
	}>();

	let element: HTMLElement;
	let isVisible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						isVisible = true;
					}, delay);
					observer.disconnect();
				}
			},
			{ threshold }
		);
		if (element) observer.observe(element);
		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	style="transition: all {duration}ms ease-out; opacity: {isVisible ? opacityTo : opacityFrom}; transform: translate({isVisible ? xTo : xFrom}px, {isVisible ? yTo : yFrom}px);"
>
	{@render children()}
</div>