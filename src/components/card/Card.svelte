<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let title;
	export let icon;
	export let data = 0;
	export let metric = '';
	export let progressBar = false;
	export let progressMinMax = [0, 0];

	const width = tweened(0, { duration: 1000, easing: cubicOut });
	$: {
		width.set(data ? (progressMinMax[0] / progressMinMax[1]) * 100 : 0);
	}
</script>

<article class="bg-white w-full rounded-2xl px-10 py-6 overflow-hidden relative">
	{#if title}
		<header class="gap-2 mb-4">
			<h2 class="text-xl font-medium">
				{title}
			</h2>
		</header>
	{/if}
	<div class="text-center">
		<span class="font-extrabold text-5xl">{data}</span>
		<span class="text-gray-500">{metric}</span>
	</div>
	{#if icon}
		<div class="absolute top-0 right-[-70px] w-[180px] h-[12rem] z-0 opacity-5 flex align-middle">
			<img src={icon} alt="" aria-hidden="true" class="h-[160px] m-auto select-none" />
		</div>
	{/if}
	{#if progressBar}
		<div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 mt-8">
			<div
				style="width: {$width}%"
				class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#d54e4e]"
			></div>
		</div>
	{/if}
	<slot />
</article>
