<script>
	export let data;
	import {
		calculateMaxHeartRate,
		calculateAge,
		calculateVO2max,
		calculatePace
	} from '$lib/utilities';
	import Card from '$components/card/Card.svelte';

	$: fmcmax = calculateMaxHeartRate(calculateAge(data.res.Date_de_naissance), data.res.Sexe);

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
<div class="flex flex-wrap gap-4">
	<Card color="#862b2b">
		<div class="flex gap-5 ml-[-5px] items-center">
			<div class="bg-[#862b2b] text-white rounded-lg w-16 h-16 flex justify-center items-center">
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
					<span class="font-extrabold text-4xl">{data.res.VMA ?? '0'}</span>
					<span class="text-gray-500">km/h</span>
				</div>
			</div>
			<div class="flex flex-col border-l border-gray-200 pl-6">
				<span>VO2max</span>
				<div>
					<span class="font-extrabold text-4xl">{calculateVO2max(data.res.VMA)}</span>
					<span class="text-gray-500">ml/mn/kg</span>
				</div>
			</div>
		</div>
	</Card>
	<Card color="#4f862b">
		<div class="flex gap-5 ml-[-5px] items-center">
			<div class="bg-[#4f862b] text-white rounded-lg w-16 h-16 flex justify-center items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					class="bi bi-activity"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
					/>
				</svg>
			</div>
			<div class="flex flex-col">
				<span>FCMax</span>
				<div>
					<span class="font-extrabold text-4xl">
						{#if data.res.FCM === 0 || !data.res.FCM || data.res.FCM === '' || data.res.FCM === null || data.res.FCM === undefined}
							{calculateMaxHeartRate(calculateAge(data.res.Date_de_naissance), data.res.Sexe)}
						{:else}
							{data.res.FCM ?? '0'}
						{/if}
					</span>
					<span class="text-gray-500">bpm</span>
				</div>
			</div>
		</div>
	</Card>
	<Card color="#2b5186">
		<div class="flex gap-5 ml-[-5px] items-center">
			<div class="flex flex-col">
				<span>LT</span>
				<div>
					<!-- VMA Progress bar from 0 to 15,7 -->
					<div class="relative pt-1 w-80">
						<div class="flex mb-2 items-center justify-between">
							<div>
								<span
									style="position: absolute; left: {data.res.VMA
										? (data.res.VMA / 15.7) * 100
										: 0}%;
										top: 0"
									class="text-xs font-semibold inline-block py-1 px-2 uppercase text-white bg-blue-400"
								>
									{data.res.VMA ? parseFloat((data.res.VMA / 15.7).toFixed(2)) : 0} LT
								</span>
							</div>
						</div>
						<div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
							<div
								style="width: {data.res.VMA ? (data.res.VMA / 15.7) * 100 : 0}%"
								class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Card>
	<Card color="#862b7d">
		<div class="flex flex-wrap gap-5 ml-[-5px] items-center">
			<div class="bg-[#862b7d] text-white rounded-lg w-16 h-16 flex justify-center items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					fill="currentColor"
					class="bi bi-speedometer2"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"
					/>
					<path
						fill-rule="evenodd"
						d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
					/>
					flex-wrap</svg
				>
			</div>
			<div class="flex flex-col font-extrabold text-2xl">
				<span>Allures<br />clés</span>
			</div>
			<div class="flex flex-col border-l border-gray-200 pl-6">
				<span>Echauffement</span>
				<div>
					<span class="font-extrabold text-4xl">{calculatePace(data.res.VMA * 0.55)}</span>
					<span class="text-gray-500">min/km</span>
				</div>
				<div>
					<span class="font-extrabold"
						>{Math.round(fmcmax * 0.6)} - {Math.round(fmcmax * 0.65)}</span
					>
					<span class="text-gray-500">bpm</span>
				</div>
			</div>
			<div class="flex flex-col border-l border-gray-200 pl-6">
				<span>Endurance fondamentale</span>
				<div>
					<span class="font-extrabold text-4xl">{calculatePace(data.res.VMA * 0.65)}</span>
					<span class="text-gray-500">min/km</span>
				</div>
				<div>
					<span class="font-extrabold"
						>{Math.round(fmcmax * 0.65)} - {Math.round(fmcmax * 0.75)}</span
					>
					<span class="text-gray-500">bpm</span>
				</div>
			</div>
			<div class="flex flex-col border-l border-gray-200 pl-6">
				<span>Seuil aéroboie (SV1)</span>
				<div>
					<span class="font-extrabold text-4xl">{calculatePace(data.res.VMA * 0.78)}</span>
					<span class="text-gray-500">min/km</span>
				</div>
				<div>
					<span class="font-extrabold"
						>{Math.round(fmcmax * 0.82)} - {Math.round(fmcmax * 0.87)}</span
					>
					<span class="text-gray-500">bpm</span>
				</div>
			</div>
			<div class="flex flex-col border-l border-gray-200 pl-6">
				<span>Seuil anaérobie (SV2)</span>
				<div>
					<span class="font-extrabold text-4xl">{calculatePace(data.res.VMA * 0.87)}</span>
					<span class="text-gray-500">min/km</span>
				</div>
				<div>
					<span class="font-extrabold"
						>{Math.round(fmcmax * 0.87)} - {Math.round(fmcmax * 0.92)}</span
					>
					<span class="text-gray-500">bpm</span>
				</div>
			</div>
			<div class="flex flex-col border-l border-gray-200 pl-6">
				<span>Allure VMA</span>
				<div>
					<span class="font-extrabold text-4xl">{calculatePace(data.res.VMA)}</span>
					<span class="text-gray-500">min/km</span>
				</div>
				<div>
					<span class="font-extrabold">{Math.round(fmcmax * 0.95)} - {Math.round(fmcmax * 1)}</span>
					<span class="text-gray-500">bpm</span>
				</div>
			</div>
		</div>
	</Card>
</div>
