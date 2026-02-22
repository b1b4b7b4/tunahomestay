<script>
	import NameBlock from "$lib/ui/NameBlock.svelte";
</script>

<section
	class="bg-[#252422] py-[75px] md:py-[100px] px-5 text-white text-center grid justify-center"
>
	<NameBlock
		name="Contacts"
		description="To book a room and for any questions, please call us at: <br/>+84 83 293 88 88"
	/>

	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-[50px] max-w-[1200px]"
	>
		<div class="flex flex-col items-center">
			<img
				src="https://static.tildacdn.ink/tild3862-3561-4136-a361-343730666531/vector.svg"
				alt=""
				class="mb-7.5 md:mb-[30px] w-15 h-15 md:w-[60px] md:h-[60px]"
			/>
			<div class="mb-5 md:mb-[20px] text-[25px]">Contact</div>
			<div class="text-[16px] font-light text-center">
				Our Second Number: Our Second Number:<br />+84 85 586 71 86<br /><br
				/>Email:<br />tunahomestay01@gmail.com
			</div>
		</div>

		<div class="flex flex-col items-center">
			<img
				src="https://static.tildacdn.ink/tild3862-3561-4136-a361-343730666531/vector.svg"
				alt=""
				class="mb-7.5 md:mb-[30px] w-15 h-15 md:w-[60px] md:h-[60px]"
			/>
			<div class="mb-5 md:mb-[20px] text-[25px]">Address</div>
			<div class="text-[16px] font-light text-center">
				12 Alley Ng. 445 Đ. Lạc Long Quân, Xuân La, Tây Hồ, Hà Nội, 100000,
				Vietnam
			</div>
		</div>

		<div class="flex flex-col items-center">
			<img
				src="https://static.tildacdn.ink/tild3862-3561-4136-a361-343730666531/vector.svg"
				alt=""
				class="mb-7.5 md:mb-[30px] w-15 h-15 md:w-[60px] md:h-[60px]"
			/>
			<div class="mb-5 md:mb-[20px] text-[25px]">How to find us</div>
			<div class="text-[16px] font-light text-center">
				We are located in the Western part of the city. If you are coming from
				the airport, take the 90th bus (until the Qua Nga 3 Xuan La 70m - Lac
				Long Quan (Ho Tay)).
			</div>
		</div>
	</div>
</section>
