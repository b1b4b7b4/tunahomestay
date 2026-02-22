<script>
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import { fade } from "svelte/transition";
</script>

<SimpleButton
	transition={fade}
	params={{ duration: 200 }}
	c="fixed top-[100px] w-[88px] h-[88px] bg-white/80 z-10 right-[50px] rounded-full flex items-center justify-center shadow-md"
>
	<svg
		role="presentation"
		width="80"
		height="80"
		viewBox="0 0 80 80"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M31.1228 48.1328L21 58.253"
			stroke="black"
			stroke-width="1.5"
			stroke-linecap="square"
		></path>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M53.5878 25.5522C59.6573 31.6217 59.6573 41.4634 53.5878 47.5329C47.5181 53.6026 37.6765 53.6026 31.6069 47.5329C25.5373 41.4634 25.5373 31.6217 31.6069 25.5522C37.6765 19.4826 47.5181 19.4826 53.5878 25.5522Z"
			stroke="black"
			stroke-width="1.5"
		></path>
		<path
			d="M48.425 32.5469C50.9434 35.0652 50.8891 39.2025 48.3037 41.7878"
			stroke="black"
			stroke-width="1.5"
		></path>
	</svg>
</SimpleButton>
