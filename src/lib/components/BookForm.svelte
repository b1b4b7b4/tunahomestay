<script lang="ts">
	import { calculatePrice } from "$lib";
	import DynamicNumber from "$lib/ui/DynamicNumber.svelte";
	import Field from "$lib/ui/Field.svelte";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";
	import { enhance } from "$app/forms";
	import toast from "svelte-french-toast";

	let { pricing = { pricePerNight: 200_000, currency: "VND" } }: { pricing?: { pricePerNight: number; currency: string } } = $props();

	let adults = $state("");
	let nights = $state("");
	let phone = $state("");

	const roomTypes = [
		"Mixed dormatory",
		"Female dormatory",
		"Male dormatory",
		"Mixed dormitory with private bathroom",
	];
	let roomType = $state(roomTypes[0]);

	function phoneMask(value: string) {
		// Remove all non-digit characters
		const digits = value.replace(/\D/g, "");
		// Apply mask: +XX XXX XXX XXXX (assuming Vietnamese format)
		if (digits.length <= 2) return `+${digits}`;
		if (digits.length <= 5) return `+${digits.slice(0, 2)}${digits.slice(2)}`;
		if (digits.length <= 8)
			return `+${digits.slice(0, 2)}${digits.slice(2, 5)}${digits.slice(5)}`;
		return `+${digits.slice(0, 2)}${digits.slice(2, 5)}${digits.slice(5, 8)}${digits.slice(8, 12)}`;
	}

	$effect(() => {
		if (phone) {
			const masked = phoneMask(phone);
			if (masked !== phone) {
				phone = masked;
			}
		}
	});
</script>

<form
	class="z-1 text-black bg-white rounded-[10px] p-[34px] flex flex-col gap-[20px] min-md:max-w-[460px]"
	action="?/book"
	method="POST"
	use:enhance={({ formData, action, cancel, submitter }) => {
		const loadingToast = toast.loading("Submitting booking...");
		return async ({ update, result }) => {
			await update({ reset: result.type === "success" });
			if (result.type === "success") {
				toast.success("Booking request sent!", { id: loadingToast });
			} else {
				toast.error("Failed to send booking request", { id: loadingToast });
			}
		};
	}}
>
	<div class="uppercase text-[18px]">book your stay now</div>
	<Field name="name" placeholder="Your full name" required />
	<Field name="email" placeholder="Email" required />
	<Field name="phone" placeholder="Phone" bind:value={phone} required />
	<div class="grid grid-cols-2 gap-[20px]">
		<Field
			name="date"
			placeholder="Date"
			isDate
			required
			min={new Date().toISOString().split("T")[0]}
		/>
		<Field
			name="roomType"
			placeholder="Select room type"
			options={roomTypes}
			bind:value={roomType}
		/>
	</div>
	<div class="grid grid-cols-2 gap-[20px]">
		<Field
			name="adults"
			label="Number of adults"
			placeholder="1"
			bind:value={adults}
			reg={/\D/g}
			required
		/>
		<Field
			name="nights"
			label="Amount of nights"
			placeholder="2"
			bind:value={nights}
			reg={/\D/g}
			required
		/>
	</div>

	<div class="flex gap-2 text-[18px] font-bold">
		Total cost of your stay:
		<DynamicNumber number={calculatePrice(adults, nights, pricing.pricePerNight)} duration={200} />
	</div>

	<SimpleButton
		type="submit"
		c="uppercase bg-[#eb5f29] min-h-[50px] text-white hover:bg-black text-[16px] rounded-[10px]  px-[30px] py-[13px]"
		rippleAnimation
		style="box-shadow: rgba(0, 11, 48, 0.25) 0px 10px 20px !important;"
		>book right now</SimpleButton
	>

	<div class="text-[16px] font-light">
		By booking through our form you agree to our
		<a href="/privacy" class="underline">Privacy Policy</a>.
	</div>
</form>
