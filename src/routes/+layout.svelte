<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/Header.svelte";
	import { fade } from "svelte/transition";
	import Contact from "$lib/components/Contact.svelte";
	import { ChevronUp } from "@lucide/svelte";
	import { onMount } from "svelte";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import ViewAnimation from "$lib/ui/ViewAnimation.svelte";
	import { Toaster } from "svelte-french-toast";

	let { children } = $props();
	let showScrollUp = $state(false);

	onMount(() => {
		const handleScroll = () => {
			showScrollUp = window.scrollY > 200;
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
</script>

<Toaster />

<svelte:head>
	<title>Tuna Homestay Hanoi &amp; Experience</title>
	<meta
		name="description"
		content="At TUNA Homestay, we strive to make every guest feel at home. Our accommodations are designed with comfort and style in mind, offering a peaceful retreat amidst the vibrant energy of Hanoi."
	/>
	<meta
		name="keywords"
		content="Hostel in Hanoi, Cheap hotels in Hanoi, Best hostels in Hanoi, Tay Ho accommodation, Places to stay in Hanoi, Eco-friendly hostel Hanoi, Vietnam accommodation, Quiet hostel rooms Hanoi, Hostel with breakfast included Hanoi, Backpacker hostel rooms Hanoi, "
	/> <meta property="og:url" content="about-our-property" />
	<meta property="og:title" content="Tuna Homestay Hanoi &amp; Experience " />
	<meta
		property="og:description"
		content="At TUNA Homestay, we strive to make every guest feel at home. Our accommodations are designed with comfort and style in mind, offering a peaceful retreat amidst the vibrant energy of Hanoi."
	/>
	<link
		rel="shortcut icon"
		href="https://static.tildacdn.ink/tild6235-6233-4134-a136-643966303263/logo3-removebg-previ.png"
		type="image/x-icon"
	/>
</svelte:head>

<Header />

<div transition:fade={{ duration: 500 }}>
	{@render children()}
</div>

<ViewAnimation yFrom={50} duration={700}>
	<Contact />
</ViewAnimation>

{#if showScrollUp}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed bottom-5 max-md:right-5 md:left-1/2 md:transform md:-translate-x-1/2 z-50"
	>
		<SimpleButton
			variant="primary"
			onclick={scrollToTop}
			aria-label="Scroll to top"
		>
			<ChevronUp size={20} />
		</SimpleButton>
	</div>
{/if}
