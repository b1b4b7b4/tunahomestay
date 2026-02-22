<script>
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import { X, Menu } from "@lucide/svelte";
	import clsx from "clsx";
	import { fade, fly } from "svelte/transition";
	import SearchHeader from "./SearchHeader.svelte";
	import { onNavigate } from "$app/navigation";

	let activeMenu = $state(false);

	onNavigate(() => {
		activeMenu = false;
	});
</script>

<header
	class={clsx(
		"flex items-center justify-between min-h-32 md:min-h-[159px] px-8 md:px-[40px] absolute z-10 inset-x-0 text-white transition-all duration-300",
		activeMenu ? "bg-black fixed" : "bg-black/80",
	)}
>
	<SimpleButton href="/">
		<img
			width="150"
			src="https://static.tildacdn.ink/tild6235-6233-4134-a136-643966303263/logo3-removebg-previ.png"
			alt=""
		/>
	</SimpleButton>

	<SimpleButton onclick={() => (activeMenu = !activeMenu)}>
		{#if activeMenu}
			<X size="38px" />
		{:else}
			<Menu size="38px" />
		{/if}
	</SimpleButton>

	{#if activeMenu}
		<div
			transition:fade={{ duration: 200 }}
			class="fixed inset-0 bg-black/60 top-32 md:top-[150px]"
			onclick={() => (activeMenu = false)}
		/>
		<div
			transition:fly={{ y: -20, duration: 200 }}
			class="noscroll text-center fixed top-32 md:top-[150px] inset-x-0 z-10 bg-black px-5 md:px-[20px] py-7.5 md:py-[30px]"
		>
			<div class="grid gap-[20px] mb-[55px] text-[24px]">
				<SimpleButton href="/">About</SimpleButton>
				<SimpleButton href="/rooms">Rooms</SimpleButton>
				<SimpleButton href="/near">Near us</SimpleButton>
				<SimpleButton href="/tours">Tours</SimpleButton>
			</div>
			<div class="max-w-[583px] m-auto text-[20px] font-light">
				Our address: 12 Alley Ng. 445 Đ. Lạc Long Quân, Xuân La, Tây Hồ, Hà Nội,
				100000, Viet
			</div>
		</div>
	{/if}
</header>

{#if !activeMenu}
	<SearchHeader />
{/if}
