<script lang="ts">
	import type { PageData } from "./$types";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import clsx from "clsx";
	import TypingAnimation from "$lib/ui/TypingAnimation.svelte";
	import Field from "$lib/ui/Field.svelte";
	import { enhance } from "$app/forms";
	import toast from "svelte-french-toast";

	let { data }: { data: PageData } = $props();

	const toursList = data.toursList;
	const toursPage = data.toursPage;
	const t = toursPage;

	function currentYear() {
		return new Date().getFullYear();
	}
</script>

<div class="container max-w-[1200px] m-auto pt-[200px] px-5">
	<div class="text-5xl md:text-[75px] mb-12 md:mb-[60px] font-bold uppercase">
		{t.hero.title} <br />
		<span class="text-[#eb5f29]">{t.hero.homestayName}</span>
	</div>

	<div class="mb-12 md:mb-[60px] font-light text-[25px]">
		<TypingAnimation texts={t.hero.typingTexts} />
	</div>

	<SimpleButton
		variant="primary"
		c="uppercase text-[16px] shadow-xl mb-24 md:mb-[120px]"
	>
		{t.hero.bookButton}
	</SimpleButton>

	<h1 class="uppercase text-4xl md:text-[52px] mb-24 md:mb-[120px]">
		LIST of tours {currentYear()}:
	</h1>

	<div class="grid md:grid-cols-2 gap-10 md:gap-[50px] mb-16 md:mb-[100px]">
		{#each toursList as tour, idx}
			<div
				style="--bg-image: url({tour.image});"
				class={clsx(
					"tour-card relative p-5 md:p-[40px] w-full h-full aspect-[1160/650] flex flex-col justify-end text-white group hover:scale-101 transition-all duration-300 ease-in-out",
					!tour.small && "col-span-full",
				)}
			>
				<div
					class="absolute inset-0"
					style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.20), rgba(0,0,0,0.30));"
				></div>

				<div
					class="z-1 text-shadow-lg transition-all duration-300 group-hover:pb-16 md:group-hover:pb-[80px]"
				>
					<div
						class={clsx(
							"mb-2 md:mb-[10px]",
							tour.small
								? "text-2xl md:text-[40px]"
								: "text-4xl md:text-[65px]",
						)}
					>
						{tour.title}
					</div>
					<div
						class={clsx(
							"font-light",
							tour.small ? "text-lg md:text-[25px]" : "text-xl md:text-[30px]",
						)}
					>
						{@html tour.description}
					</div>
				</div>
				<SimpleButton
					variant="primary"
					c="uppercase text-[16px] shadow-xl absolute bottom-5 left-5 md:bottom-[40px] md:left-[40px] transition-all duration-200 scale-95 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 z-1"
					>learn more
				</SimpleButton>
			</div>
		{/each}
	</div>
</div>

<svg
	class="w-full"
	style="height:4vw;fill:#dfe4dd;"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 1280 200"
	preserveAspectRatio="none"
>
	<path d="M640 195.5L0 0v200h1280V0"></path>
</svg>
<div
	class="min-h-screen grid place-items-center text-white relative"
	style="background-image: url({t.cta.backgroundImage}); background-size: cover; background-position: center; background-repeat: no-repeat;"
>
	<div
		class="absolute inset-0"
		style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.20), rgba(0,0,0,0.30));"
	></div>
	<div class="z-1 text-center px-5">
		<div class="text-4xl md:text-[52px] mb-5 md:mb-[20px] font-bold uppercase">
			{t.cta.title}
		</div>
		<div class="text-xl md:text-[30px] mb-8 md:mb-[50px] max-w-[480px] m-auto">
			{t.cta.description}
		</div>

		<form class="grid gap-5 my-7.5 md:my-[30px] max-w-[500px] m-auto" action="?/reserve" method="POST" use:enhance={({ formData, action, cancel, submitter }) => {
			const loadingToast = toast.loading('Submitting reservation...');
		return async ({ update, result }) => {
			await update({ reset: result.type === 'success' });
			if (result.type === 'success') {
				toast.success('Tour reservation request sent!', { id: loadingToast });
			} else {
				toast.error('Failed to send reservation request', { id: loadingToast });
			}
		};
		}}>
			<Field name="email" placeholder={t.cta.form.emailPlaceholder} required />
			<Field name="email" placeholder={t.cta.form.namePlaceholder} required />
			<Field
				name="message"
				placeholder={t.cta.form.messagePlaceholder}
				isTextarea
				c="pt-[16px] min-h-[100px]"
				required
			/>

			<SimpleButton variant="primary" c="uppercase text-[16px]" type="submit">
				{t.cta.submitButton}
			</SimpleButton>
		</form>

		<div class="text-[12px] font-light text-center opacity-85">
			{t.cta.termsText} <a href="/terms" class="underline"
				>{t.cta.termsLink}</a
			>
		</div>
	</div>
</div>
