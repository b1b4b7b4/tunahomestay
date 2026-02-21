<script>
	import clsx from "clsx";
	const { c = "", href = "", children, ...rest } = $props();
</script>

{#if href}
	<a
		{href}
		class={clsx(
			"hover:scale-105 transition-transform duration-300 ease-in-out active:scale-95 cursor-pointer",
			c,
		)}
		{...rest}
	>
		{@render children()}
	</a>
{:else}
	<button
		class={clsx(
			"hover:scale-105 transition-transform duration-300 ease-in-out active:scale-95 cursor-pointer",
			c,
		)}
		{...rest}
	>
		{@render children()}
	</button>
{/if}
