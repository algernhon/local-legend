<script>
	export let title;
	export let data = [];
</script>

<article class="bg-white w-full rounded-2xl px-10 py-6 overflow-hidden relative col-span-4">
	{#if title}
		<header class="gap-2">
			<h2 class="text-xl font-medium">
				{title}
			</h2>
		</header>
	{/if}
	<div class="flex gap-4 justify-around flex-wrap items-center">
		<table class="table-auto">
			<thead>
				<tr>
					{#each data as item}
						<th class="px-4 pb-2 font-normal border-b">{item.title}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				<tr>
					{#each data as item}
						<td class="px-4 pt-2 text-center">
							<div class="flex flex-col">
								<span class="font-extrabold text-3xl">{item.value}</span>
								<span class="text-gray-500">min/km</span>
							</div>
						</td>
					{/each}
				</tr>
			</tbody>
		</table>
	</div>
	<slot />
</article>
