<script lang="ts">
	import type { Record } from "./classes/record";

    export let records = Array<Record>();
</script>

<div class="flex flex-col">
	<div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
		<div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
			<div class="overflow-hidden">
				<table class="min-w-full">
					<thead class="bg-gray-200 border-b">
						<tr>
							<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left"> Date </th>
							<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
								Value
							</th>
						</tr>
					</thead>
					<tbody>
                        {#each records as record}
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                {#if record.type === 'R'}
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 revenue">
                                        {record.date}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap revenue">
                                        {record.value}
                                    </td>
                                {:else}
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 expense">
                                        {record.date}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap expense">
                                        {record.value}
                                    </td>
                                {/if}
                            </tr>
                        {/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<style>
    .revenue {
        color: green;
    }

    .expense {
        color: red;
    }
</style>
