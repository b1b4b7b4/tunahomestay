<script>
	const { name, description } = $props();
</script>

<section
	class="capitalize py-[10px] flex flex-col items-center text-center px-2"
>
	<h1 class="text-[52px] mb-[20px]">{name}</h1>
	<p class="text-[25px] mb-[100px] max-w-[550px] m-auto text-center font-light">
		{@html description}
	</p>
</section>
