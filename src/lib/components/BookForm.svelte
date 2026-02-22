<script>
	import { calculatePrice } from "$lib";
	import DynamicNumber from "$lib/ui/DynamicNumber.svelte";
	import Field from "$lib/ui/Field.svelte";
	import SimpleButton from "$lib/ui/SimpleButton.svelte";

	let adults = $state("");
	let nights = $state("");

	const roomTypes = [
		"Mixed dormatory",
		"Female dormatory",
		"Male dormatory",
		"Mixed dormitory with private bathroom",
	];
	let roomType = $state(roomTypes[0]);
</script>

<form
	class="z-1 text-black bg-white rounded-[10px] p-[34px] flex flex-col gap-[20px] min-md:max-w-[460px]"
>
	<div class="uppercase text-[18px]">book your stay now</div>
	<Field placeholder="Your full name" />
	<Field placeholder="Email" />
	<Field placeholder="Phone" />
	<div class="grid grid-cols-2 gap-[20px]">
		<Field placeholder="Date" isDate />
		<Field
			placeholder="Select room type"
			options={roomTypes}
			bind:value={roomType}
		/>
	</div>
	<div class="grid grid-cols-2 gap-[20px]">
		<Field
			label="Number of adults"
			placeholder="1"
			bind:value={adults}
			reg={/\D/g}
		/>
		<Field
			label="Amount of nights"
			placeholder="2"
			bind:value={nights}
			reg={/\D/g}
		/>
	</div>

	<div class="flex gap-2 text-[18px] font-bold">
		Total cost of your stay:
		<DynamicNumber number={calculatePrice(adults, nights)} duration={200} />
	</div>

	<SimpleButton
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
