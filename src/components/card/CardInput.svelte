<script>
	import { calculatePace } from '$lib/utilities';

	export let title;
	export let icon;
	export let data = 0;
	export let metric = '';

	let currentValue = 100;
	$: calculatedValue = calculatePace(data * (currentValue / 100));
</script>

<article class="bg-white w-full rounded-2xl px-10 py-6 overflow-hidden relative">
	{#if title}
		<header class="gap-2 mb-4">
			<h2 class="text-xl font-medium">
				{title}
			</h2>
		</header>
	{/if}
	<div class="flex justify-center items-center gap-4">
		<div class="relative mt-1 rounded-md shadow-sm w-24 h-10 border border-gray-300">
			<input
				type="text"
				name="price"
				id="price"
				bind:value={currentValue}
				class="block w-full rounded-md pl-2 pr-6 text-xl font-bold h-full text-center"
				placeholder="0.00"
				aria-describedby="price-currency"
			/>
			<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
				<span class="text-gray-500 sm:text-sm" id="price-currency">%</span>
			</div>
		</div>
		<div>
			<span class="font-extrabold text-5xl">{calculatedValue}</span>
			<span class="text-gray-500">{metric}</span>
		</div>
	</div>
	{#if icon}
		<div class="absolute top-0 right-[-70px] w-[180px] h-[12rem] z-0 opacity-5 flex align-middle">
			<img src={icon} alt="" aria-hidden="true" class="h-[160px] m-auto select-none" />
		</div>
	{/if}
	<slot />
</article>
