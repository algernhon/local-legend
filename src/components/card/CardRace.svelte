<script>
	export let title;
	export let icon;
	export let data = [];
</script>

<article class="bg-white w-full rounded-2xl px-10 py-6 overflow-hidden relative">
	{#if title}
		<header class="gap-2 mb-2">
			<h2 class="text-xl font-medium">
				Estimation <span class="text-[#d54e4e] font-extrabold">{title}</span>
			</h2>
		</header>
	{/if}
	<div class="flex justify-between">
		<span>Facile</span>
		<div>
			<span class="font-extrabold">{data.easy.time}</span>
			<span class="text-gray-500">à {data.easy.pace}</span>
		</div>
	</div>
	<div class="flex justify-between">
		<span>Réalisable</span>
		<div>
			<span class="font-extrabold">{data.medium.time}</span>
			<span class="text-gray-500">à {data.medium.pace}</span>
		</div>
	</div>
	<div class="flex justify-between">
		<span>Ambitieux</span>
		<div>
			<span class="font-extrabold">{data.hard.time}</span>
			<span class="text-gray-500">à {data.hard.pace}</span>
		</div>
	</div>
	{#if icon}
		<div class="absolute top-0 right-[-70px] w-[180px] h-[12rem] z-0 opacity-5 flex align-middle">
			<img src={icon} alt="" aria-hidden="true" class="h-[160px] m-auto select-none" />
		</div>
	{/if}
	<slot />
</article>
