<script>
	import { page } from "$app/stores";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
</script>

<svelte:head>
	<title>Error - Tuna Homestay</title>
</svelte:head>

<div
	class="min-h-[80svh] flex flex-col items-center justify-center text-center px-5"
>
	<div class="text-[72px] font-bold text-[#eb5f29] mb-5">
		{$page.status || 404}
	</div>
	<div class="text-[24px] md:text-[32px] mb-8">{$page.error?.message}</div>
	<SimpleButton variant="primary" href="/">Go to Home Page</SimpleButton>
</div>

