<script lang="ts">
	//export all main button props
	export let disabled: boolean = false;
	export let type: any = 'button';
	export let onClick: () => void = () => {};
	export let twclass: string = '';
	export let variant: string = 'primary';
	export let color: string = 'white';
	export let size: string = 'sm';
	export let block: boolean = false;

	interface variantType {
		[key: string]: string;
	}

	interface sizeType {
		[key: string]: string;
	}

	let variants: variantType = {
		primary: 'bg-blue-500 hover:bg-blue-600',
		secondary: 'bg-gray-500 hover:bg-gray-600',
		success: 'bg-green-500 hover:bg-green-600',
		error: 'bg-red-500 hover:bg-red-600',
		warning: 'bg-yellow-500 hover:bg-yellow-600',
		light: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
		dark: 'bg-gray-800 hover:bg-gray-900',
		link: `bg-transparent hover:bg-transparent text-${color} shadow-none hover:shadow-none hover:bg-slate-50`,
		outlined: `bg-transparent hover:bg-transparent border border-${color} shadow-none hover:shadow-md hover:shadow-${color}`
	};

	let sizes: sizeType = {
		sm: 'py-1 px-4 text-sm',
		md: 'py-2 px-6 text-base',
		lg: 'py-3 px-8 text-lg'
	};

	let blockClass = block ? 'block w-full' : '';
</script>

<button
	class={`middle none center py-1 px-4 text-sm text-${color} font-medium shadow-md shadow-blue-500/20 transition-all hover:shadow-md hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${variants[variant]} ${sizes[size]} ${blockClass} ${twclass}`}
	{disabled}
	{type}
	on:click={onClick}
>
	{#if $$slots['icon-left']}
		<span class="mr-2">
			<slot name="icon-left" />
		</span>
	{/if}
	<slot>Button</slot>
	{#if $$slots['icon-right']}
		<span class="ml-2">
			<slot name="icon-right" />
		</span>
	{/if}
</button>
