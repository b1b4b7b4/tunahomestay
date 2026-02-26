<script lang="ts">
	import { page } from "$app/state";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import clsx from "clsx";

	let { differetTypes }: { differetTypes: { title: string; href: string }[] } = $props();
</script>

<div
	class="py-12 md:py-[75px] flex gap-2 md:gap-[10px] justify-center flex-wrap"
>
	{#each differetTypes as type}
		<SimpleButton
			href={type.href}
			variant="primary"
			c={clsx(type.href == page.url.pathname && "bg-black")}
			>{type.title}</SimpleButton
		>
	{/each}
</div>
