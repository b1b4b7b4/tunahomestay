<script lang="ts">
	import clsx from "clsx";

	let {
		label = "",
		value = $bindable(""),
		id = undefined,
		reg = null,
		isDate = false,
		isTextarea = false,
		options = [],
		c = "",
		...rest
	} = $props();

	const inputClass = clsx(
		"px-4.5 min-h-12.5 bg-[#f0f0f0] border-0 focus:ring-1 ring-black/20 text-black",
		c,
	);

	function applyReg() {
		if (reg) {
			value = value.replace(reg, "");
		}
	}
</script>

{#if label}
	<div class="flex flex-col gap-2">
		<label
			for={id || label.toLowerCase().replace(/\s+/g, "-")}
			class="text-black text-[18px] font-light">{label}</label
		>
		{#if options && options.length > 0}
			<select
				id={id || label.toLowerCase().replace(/\s+/g, "-")}
				bind:value
				class={inputClass}
				{...rest}
			>
				{#each options as option}
					<option value={typeof option === "object" ? option.value : option}
						>{typeof option === "object" ? option.label : option}</option
					>
				{/each}
			</select>
		{:else if isTextarea}
			<textarea
				id={id || label.toLowerCase().replace(/\s+/g, "-")}
				bind:value
				class={inputClass}
				oninput={applyReg}
				{...rest}
			></textarea>
		{:else}
			<input
				id={id || label.toLowerCase().replace(/\s+/g, "-")}
				bind:value
				type={isDate ? "date" : "text"}
				class={inputClass}
				oninput={isDate ? undefined : applyReg}
				{...rest}
			/>
		{/if}
	</div>
{:else if options && options.length > 0}
	<select {id} bind:value class={inputClass} {...rest}>
		{#each options as option}
			<option value={typeof option === "object" ? option.value : option}
				>{typeof option === "object" ? option.label : option}</option
			>
		{/each}
	</select>
{:else if isTextarea}
	<textarea {id} bind:value class={inputClass} oninput={applyReg} {...rest}
	></textarea>
{:else}
	<input
		{id}
		type={isDate ? "date" : "text"}
		bind:value
		class={inputClass}
		oninput={isDate ? undefined : applyReg}
		{...rest}
	/>
{/if}
