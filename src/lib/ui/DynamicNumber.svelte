<script>
	import clsx from "clsx";
	import { cubicOut } from "svelte/easing";
	import { tweened } from "svelte/motion";

	const { c = "", number = 0, duration = 1000, ...rest } = $props();

	const tweenedNumber = tweened(0, { duration, easing: cubicOut });

	const formatter = new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	});

	$effect(() => {
		tweenedNumber.set(number);
	});
</script>

<div class={clsx(c)} {...rest}>
	{formatter.format(Math.round($tweenedNumber))}
</div>
