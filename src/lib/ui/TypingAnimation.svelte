<script lang="ts">
	import { onMount } from "svelte";

	let { texts = [] } = $props<{ texts: string[] }>();

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
					setTimeout(type, 70); // typing speed
				}
			} else {
				currentText = texts[currentIndex].slice(0, charIndex);
				charIndex--;
				if (charIndex < 0) {
					isTyping = true;
					currentIndex = (currentIndex + 1) % texts.length;
					setTimeout(type, 500); // pause after deleting
				} else {
					setTimeout(type, 20); // deleting speed
				}
			}
		};
		type();
	});
</script>

<p>{currentText}<span class="cursor">|</span></p>

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

