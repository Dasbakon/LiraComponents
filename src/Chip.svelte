<script lang="ts">
	import Button from "./Button.svelte";

	export let color: string = 'red-500';
  export let dismissible: boolean = false;
</script>

<div
	class={`center relative inline-block select-none whitespace-nowrap rounded-full bg-${color} py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white`}
>
	{#if $$slots.icon}
		<span class="mr-2">
			<slot name="icon"/>
		</span>
	{/if}
  {#if $$slots.avatar}
    <span class="mr-2">
      <slot name="avatar"/>
    </span>
  {/if}
	<slot>
		<p>Chip</p>
	</slot>
  {#if dismissible}
    <Button twclass="bg-blue-400 px-2 py-2"><i class="fa fa-x"></i></Button>
  {/if}
</div>
