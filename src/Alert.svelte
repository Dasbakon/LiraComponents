<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	interface variantsType {
		[key: string]: string;
	}

	let isVisible = false;
	let variantsEnum: variantsType = {
		success: 'bg-green-500',
		error: 'bg-red-500',
		warning: 'bg-yellow-500',
		info: 'bg-blue-500'
	};

	export let variant = 'info';
	export let time = 3000;
	export function show() {
		isVisible = true;

		let timeout = setTimeout(() => {
			isVisible = false;
		}, time);
	}
</script>

{#if isVisible}
	<div
		class={`font-regular w-1/2 md:w-1/4 p-0 flex-nowrap rounded-lg rounded-tr-none ${variantsEnum[variant]} text-base leading-5 text-white opacity-100 fixed bottom-0 md:top-0 md:right-0 sm:bottom-0 md:bottom-auto`}
		out:fade={{ duration: 300 }}
	>
		<div class="p-2 flex flex-wrap">
			<slot name="icon">
				<i class="fas fa-info-circle align-baseline" />
			</slot>
			<div class="ml-2">
				<strong>{variant.toUpperCase()}</strong>
				<slot name="message">
					<p>This is a(n) {variant} message.</p>
				</slot>
			</div>
		</div>
		<!--<div class={`px-0 mx-0 bg-blue-300 w-[calc(100%-${})] h-1 overflow-clip`} />-->
	</div>
{/if}
