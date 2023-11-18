<script>
	export let data;
	import Card from '$components/card/Card.svelte';

	console.log(data.res);
</script>

<div class="flex gap-5 mb-5">
	<span class="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-500">
		<span class="text-xl font-medium leading-none text-white uppercase">{data.res.monogramme}</span>
	</span>
	<h1 class="flex flex-col">
		<span>Runner</span>
		<span class="text-xl font-bold">{data.res.Prenom}</span>
	</h1>
</div>
<div class="flex gap-4">
	<Card color="#862b2b">
		<div class="flex gap-5">
			<div class="bg-[#862b2b] text-white rounded-lg aspect-square p-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					fill="currentColor"
					class="bi bi-stopwatch-fill"
					viewBox="0 0 16 16"
				>
					<path
						d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"
					/>
				</svg>
			</div>
			<div class="flex flex-col">
				<span>VMA</span>
				<div>
					<span class="font-extrabold text-3xl">{data.res.VMA}</span>
					<span class="text-gray-500">km/h</span>
				</div>
			</div>
		</div>
	</Card>
	<Card>Hello {data.res.Prenom}</Card>
</div>
