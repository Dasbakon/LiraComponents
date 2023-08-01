<script lang="ts">
	import Button from './Button.svelte';

	export let title: string = 'Dialog Title';

  let opened: boolean = false;
  
</script>

{#if opened}
<div
	class="w-screen h-screen backdrop-blur-sm backdrop-brightness-50 hover:blur-0 fixed top-0 left-0"
>
	<div
		class="mt-[30vh] m-auto w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
	>
		<div
			class="flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased"
		>
			{title}
		</div>
		<div
			class="relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased"
		>
			<slot>
				<p>
					The key to more success is to have a lot of pillows. Put it this way, it took me twenty
					five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m
					never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.
				</p>
			</slot>
		</div>
		<div class="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500 space-x-2">
			<Button variant="error" size="md">Cancel</Button>
			<Button variant="success" size="md">Confirm</Button>
		</div>
	</div>
</div>
{/if}
