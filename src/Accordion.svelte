<script lang="ts">
	import { slide } from 'svelte/transition';
	let opened = false;
	export let title: string = 'Accordion Title';
	export let content: any = 'Accordion Content';
	export let openIcon: string = 'fa-plus';
	export let closeIcon: string = 'fa-minus';
	export let disabled: boolean = false;

    const enabled_button_class = 'border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in';
    const disabled_button_class = 'border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in opacity-50 cursor-not-allowed';
</script>

<div class="relative mb-3">
	<h6 class="mb-0">
		<button
			{disabled}
			class={disabled ? disabled_button_class : enabled_button_class}
			on:click={() => (opened = !opened)}
		>
			<span>{title}</span>

			<i class={`fa ${opened ? closeIcon : openIcon} absolute right-0 pt-1 text-xs`} />
		</button>
	</h6>
	{#if opened}
		<div class={`overflow-hidden`} transition:slide>
			<div class="p-4 text-sm leading-normal text-blue-gray-500/80">
				{content}
			</div>
		</div>
	{/if}
</div>
