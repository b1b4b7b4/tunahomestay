<script>
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import { Menu } from "@lucide/svelte";
	import clsx from "clsx";
	import { onMount } from "svelte";

	const texts = [
		"experience local life with family comfort",
		"friendly service cozy family atmosphere",
		"stay with us feel at home",
		"perfect location great value",
	];

	let currentText = $state("");
	let currentIndex = $state(0);
	let isTyping = $state(true);
	let charIndex = $state(0);

	onMount(() => {
		const type = () => {
			if (isTyping) {
				currentText = texts[currentIndex].slice(0, charIndex + 1);
				charIndex++;
				if (charIndex === texts[currentIndex].length) {
					isTyping = false;
					setTimeout(type, 2000); // pause after typing
				} else {
					setTimeout(type, 100); // typing speed
				}
			} else {
				currentText = texts[currentIndex].slice(0, charIndex);
				charIndex--;
				if (charIndex < 0) {
					isTyping = true;
					currentIndex = (currentIndex + 1) % texts.length;
					setTimeout(type, 500); // pause after deleting
				} else {
					setTimeout(type, 50); // deleting speed
				}
			}
		};
		type();
	});

	let activeMenu = $state(false);
</script>

<header
	class={clsx(
		"flex items-center justify-between min-h-[159px] px-[40px] absolute z-99 inset-x-0 text-white ",
		activeMenu ? "bg-black" : "bg-black/80",
	)}
>
	<SimpleButton href="/">
		<img
			width="150"
			src="https://static.tildacdn.ink/tild6235-6233-4134-a136-643966303263/logo3-removebg-previ.png"
			alt=""
		/>
	</SimpleButton>

	<SimpleButton onclick={() => (activeMenu = !activeMenu)}
		><Menu size="38px" /></SimpleButton
	>

	{#if activeMenu}
		<div
			class="fixed inset-0 bg-black/60 top-[150px]"
			onclick={() => (activeMenu = false)}
		/>
		<div
			class="noscroll text-center fixed top-[150px] inset-x-0 z-10 bg-black px-[20px] py-[30px]"
		>
			<div class="grid gap-[20px] mb-[55px]">
				<SimpleButton href="/about">About</SimpleButton>
				<SimpleButton href="/rooms">Rooms</SimpleButton>
				<SimpleButton href="/near">Near us</SimpleButton>
				<SimpleButton href="/tours">Tours</SimpleButton>
			</div>
			<div class="max-w-[583px] m-auto">
				Our address: 12 Alley Ng. 445 Đ. Lạc Long Quân, Xuân La, Tây Hồ, Hà Nội,
				100000, Viet
			</div>
		</div>
	{/if}
</header>

<section
	class="min-h-screen grid place-items-center text-white"
	style={"background-image: url(https://optim.tildacdn.ink/tild6335-3966-4163-a330-363534383636/-/format/webp/z5448003676674_f83b3.jpg.webp); no-repeat right right fixed; background-size: cover;"}
>
	<div
		style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));"
		class="absolute inset-0 z-0 h-full w-full"
	></div>

	<div class="z-1 text-[46px] px-[20px] min-h-[500px]">
		<h1 class="uppercase">Experience your ways!</h1>

		<h2 style="color: rgb(235, 94, 40)" class="uppercase text-[72px] grid">
			Tuna Homestay <span class="text-white text-[46px]">& tours</span>
		</h2>

		<div class="uppercase text-[40px] mt-[100px] max-w-[600px]">
			<p>{currentText}<span class="cursor">|</span></p>
		</div>
	</div>
</section>

<style>
	.cursor {
		animation: blink 1s infinite;
	}
	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}
</style>
