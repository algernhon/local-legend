<script>
	export let span = 3;
	export let title;
	export let data;
</script>

<article
	class="bg-white w-full rounded-2xl px-10 py-6 overflow-hidden relative row-span-2 xl:row-span-1"
	style="grid-column: span {span};"
>
	{#if title}
		<header class="gap-2">
			<h2 class="text-2xl font-medium">
				{title}
			</h2>
		</header>
	{/if}
	<div class="flex gap-4 justify-around flex-wrap h-full items-center">
		{#each data as item}
			<div class="flex flex-col">
				<span class="uppercase">{item.title}</span>
				<div>
					<span class="font-extrabold text-6xl">{item.value}</span>
					<span class="text-gray-500">{item.metric}</span>
				</div>
				<div>
					<span class="font-extrabold">{item.min} - {item.max}</span>
					<span class="text-gray-500">bpm</span>
				</div>
			</div>
		{/each}
	</div>
	<slot />
</article>
