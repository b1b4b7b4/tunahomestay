<script lang="ts">
	const { texts = [] } = $props();
</script>

<div class="bg-[#eb5f29] py-3 overflow-hidden">
	<div class="flex whitespace-nowrap running uppercase text-white text-[25px]">
		{#each texts as text}
			<div>
				{text}
				<span class="mx-2">•</span>
			</div>
		{/each}
		{#each texts as text}
			<div>
				{text}
				<span class="mx-2">•</span>
			</div>
		{/each}
	</div>
</div>

<style>
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.running {
		animation: scroll 4s linear infinite;
	}
</style>
