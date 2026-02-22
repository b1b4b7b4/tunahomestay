<script lang="ts">
	import { page } from "$app/state";
	import clsx from "clsx";
	const {
		c = "",
		href = "",
		children,
		rippleAnimation = false,
		transition = undefined,
		variant = "none",
		params = {},
		...rest
	} = $props();

	const variants = {
		none: "",
		primary:
			"bg-[#eb5f29] text-white hover:bg-black text-[16px] rounded-[10px]  px-[30px] py-[13px]",
		secondary:
			"bg-[#f0f0f0] text-black hover:bg-black/80 text-[16px] rounded-[10px]  px-[30px] py-[13px]",
	} as any;
</script>

{#if href}
	<a
		{href}
		transition:{transition}={params}
		class={clsx(
			"hover:scale-105 transition-all duration-300 ease-in-out active:scale-95 cursor-pointer",
			variants[variant],
			c,
			page.url.pathname == href && "text-[#eb5f29]",
		)}
		{...rest}
	>
		{@render children()}
	</a>
{:else}
	<button
		transition:{transition}={params}
		class={clsx(
			"hover:scale-105 transition-all duration-300 ease-in-out active:scale-95 cursor-pointer",
			variants[variant],
			c,
		)}
		{...rest}
	>
		{@render children()}
	</button>
{/if}
