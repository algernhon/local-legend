<script>
	export let title;
	export let icon;
	export let data = [];
</script>

<article class="bg-white w-full rounded-2xl px-10 py-6 overflow-hidden relative">
	{#if title}
		<header class="gap-2 mb-2">
			<h2 class="text-2xl font-medium">
				Estimation <span class="text-[#d54e4e] font-extrabold">{title}</span>
			</h2>
		</header>
	{/if}
	<div class="text-center">
		<span class="font-extrabold text-gray-500">{data.easy}</span>
	</div>
	<div class="text-center">
		<span class="font-extrabold text-6xl">{data.medium}</span>
	</div>
	<div class="text-center">
		<span class="font-extrabold text-gray-500">{data.hard}</span>
	</div>
	{#if icon}
		<div class="absolute top-0 right-[-70px] w-[180px] h-[12rem] z-0 opacity-5 flex align-middle">
			<img src={icon} alt="" aria-hidden="true" class="h-[160px] m-auto select-none" />
		</div>
	{/if}
	<slot />
</article>
