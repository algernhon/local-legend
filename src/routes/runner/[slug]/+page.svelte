<script>
	export let data;
	import {
		calculateMaxHeartRate,
		calculateAge,
		calculateVO2max,
		calculatePace
	} from '$lib/utilities';

	import Card from '$components/card/Card.svelte';
	import Profil from '$components/card/Profil.svelte';

	import stopwatch from '$icons/stopwatch.svg';
	import lungs from '$icons/lungs.svg';
	import heartpulse from '$icons/heart-pulse.svg';
	import personrunning from '$icons/person-running.svg';

	$: fmcmax = calculateMaxHeartRate(calculateAge(data.res.Date_de_naissance), data.res.Sexe);
</script>

<section class="grid auto-rows-[minmax(0,_12rem)] grid-cols-3 xl:grid-cols-5 w-full gap-4">
	<Profil name={data.res.Prenom} monogram={data.res.monogramme} image={data.res.image_de_fond} />
	<Card title="VMA" icon={stopwatch} data={data.res.VMA ?? 0} metric="km/h" />
	<Card title="VO2max" icon={lungs} data={calculateVO2max(data.res.VMA)} metric="ml/mn/kg" />
	<Card title="FCMax" icon={heartpulse} data={fmcmax} metric="ml/mn/kg" />
	<Card
		title="LT"
		icon={personrunning}
		data={data.res.VMA ? parseFloat((data.res.VMA / 15.7).toFixed(2)) : 0}
		metric="LT"
		progressBar
		progressMinMax={[data.res.VMA, 15.7]}
	></Card>
</section>

<div class="flex flex-wrap gap-4 mt-32">
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
