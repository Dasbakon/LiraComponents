<script lang="ts">
	import Button from './Button.svelte';

	export let title: string = 'Card Title';
</script>

<div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
	<div
		class="relative mx-4 mt-4 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
	>
		<slot name="img">
			<img src="https://picsum.photos/800/600" alt="Random" />
		</slot>
	</div>
	<div class="p-6">
		<h5
			class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
		>
			{title}
		</h5>
		<slot name="content">
			<p class="block font-sans text-base leading-relaxed text-inherit antialiased">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus, voluptatum
				quibusdam molestiae, fugiat, quod exercitationem dolorum doloribus quia voluptates
				consequatur voluptatem.
			</p>
		</slot>
	</div>
	<div class="p-6 pt-0">
		<slot name="button">
			<Button block />
		</slot>
	</div>
</div>
