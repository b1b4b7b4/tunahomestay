<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

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
{@render children()}
