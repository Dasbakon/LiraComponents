<script lang="ts">
	import type { SvelteComponent } from 'svelte/internal';
	import Avatar from './Avatar.svelte';

	export let avatars: [typeof Avatar, { [key: string]: any }][] = [
		[Avatar, { variant: 'rounded' }],
		[Avatar, { variant: 'rounded' }],
		[Avatar, { variant: 'rounded' }]
	];
</script>

<div class="flex items-center -space-x-4">
	{#each avatars as [avatar, props]}
		<div
			class="relative inline-block h-12 w-12 rounded-full overflow-hidden border-2 border-white object-cover object-center hover:z-10 focus:z-10"
		>
			<svelte:component this={avatar} {...props} />
		</div>
	{/each}
</div>
