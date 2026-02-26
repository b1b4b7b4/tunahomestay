<script lang="ts">
	import NameBlock from "$lib/ui/NameBlock.svelte";
	import ViewAnimation from "$lib/ui/ViewAnimation.svelte";

	let { contacts } = $props();
</script>

<section
	class="bg-[#252422] py-[75px] md:py-[100px] px-5 text-white text-center grid justify-center"
>
	<NameBlock
		name={contacts.title}
		description={contacts.description}
	/>

	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-[50px] max-w-[1200px]"
	>
		{#each contacts.items as contact, idx}
			<ViewAnimation yFrom={50} duration={600} delay={idx * 200}>
				<div class="flex flex-col items-center">
					<img
						src={contact.image}
						alt=""
						class="mb-7.5 md:mb-[30px] w-15 h-15 md:w-[60px] md:h-[60px]"
					/>
					<div class="mb-5 md:mb-[20px] text-[25px]">{contact.title}</div>
					<div class="text-[16px] font-light text-center">
						{@html contact.description}
					</div>
				</div>
			</ViewAnimation>
		{/each}
	</div>
</section>
