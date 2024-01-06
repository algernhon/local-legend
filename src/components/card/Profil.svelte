<script>
	export let image;
	export let name = '??';
	export let monogram = '??';
</script>

<header
	class="bg-white w-full rounded-2xl px-10 py-6 overflow-hidden relative col-span-3 row-span-2 bg-no-repeat bg-cover bg-center"
	style="background-image: url('https://directus.oepto.com/assets/{image}')"
>
	<div class="inline-flex gap-5 mb-5 bg-white px-8 py-4 rounded-2xl">
		<span class="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#d54e4e]">
			<span class="text-xl font-bold leading-none text-white uppercase">{monogram}</span>
		</span>

		<h1 class="flex flex-col">
			<span>Runner</span>
			<span class="text-xl font-extrabold">{name}</span>
		</h1>
	</div>
	<slot />
</header>
