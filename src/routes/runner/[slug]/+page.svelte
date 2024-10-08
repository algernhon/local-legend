<script>
	export let data;

    if (typeof data === 'undefined') {
        data = {
            res: {
                prenom: 'John',
                monogramme: 'J',
                image_de_fond: 'https://source.unsplash.com/random/800x600',
                VMA: 15.9,
                sexe: 'M',
                date_de_naissance: '1990-01-01'
            }
        };
    }

	import {
		calculateMaxHeartRate,
		calculateAge,
		calculateVO2max,
		calculatePace,
		calculateTime
	} from '$lib/utilities';

	import Card from '$components/card/Card.svelte';
	import Profil from '$components/card/Profil.svelte';
	import LongCard from '$components/card/LongCard.svelte';
	import CardVMA from '$components/card/CardVMA.svelte';
	import CardInput from '$components/card/CardInput.svelte';
	import CardRace from '$components/card/CardRace.svelte';

	import stopwatch from '$icons/stopwatch.svg';
	import lungs from '$icons/lungs.svg';
	import heartpulse from '$icons/heart-pulse.svg';
	import personrunning from '$icons/person-running.svg';
	import medal from '$icons/medal.svg';

	$: fmcmax = calculateMaxHeartRate(calculateAge(data.res.date_de_naissance), data.res.sexe);
</script>

<svelte:head>
	<title>Local Legend - Fiche {data.res.prenom}</title>
</svelte:head>

<section class="grid auto-rows-[minmax(0,_12rem)] grid-cols-3 xl:grid-cols-5 w-full gap-4">
	<Profil name={data.res.prenom} monogram={data.res.monogramme} image={data.res.image_de_fond} />
	<Card title="VMA" icon={stopwatch} data={data.res.VMA ?? 0} metric="km/h" />
	<Card title="VO2max" icon={lungs} data={calculateVO2max(data.res.VMA)} metric="ml/mn/kg" />
	<Card title="FCMax" icon={heartpulse} data={fmcmax} metric="ml/mn/kg" />
	<Card
		title="LT"
		icon={personrunning}
		data={data.res.VMA ? parseFloat((data.res.VMA / 15.5).toFixed(2)) : 0}
		metric="LT"
		progressBar
		progressMinMax={[data.res.VMA, 15.5]}
	></Card>
	<LongCard
		span="5"
		title=""
		data={[
			{
				title: 'Allure echauffement',
				value: calculatePace(data.res.VMA * 0.55),
				metric: 'min/km',
				min: Math.round(fmcmax * 0.6),
				max: Math.round(fmcmax * 0.65)
			},
			{
				title: 'Endurance fondamentale',
				value: calculatePace(data.res.VMA * 0.65),
				metric: 'min/km',
				min: Math.round(fmcmax * 0.65),
				max: Math.round(fmcmax * 0.75)
			},
			{
				title: 'Seuil aérobie (SV1)',
				value: calculatePace(data.res.VMA * 0.78),
				metric: 'min/km',
				min: Math.round(fmcmax * 0.82),
				max: Math.round(fmcmax * 0.87)
			},
			{
				title: 'Seuil anaérobie (SV2)',
				value: calculatePace(data.res.VMA * 0.87),
				metric: 'min/km',
				min: Math.round(fmcmax * 0.87),
				max: Math.round(fmcmax * 0.92)
			},
			{
				title: 'Allure VMA',
				value: calculatePace(data.res.VMA),
				metric: 'min/km',
				min: Math.round(fmcmax * 0.95),
				max: Math.round(fmcmax * 1)
			}
		]}
	/>
	<CardVMA
		title="% VMA"
		data={[
			{ title: '60%', value: calculatePace(data.res.VMA * 0.6) },
			{ title: '65%', value: calculatePace(data.res.VMA * 0.65) },
			{ title: '70%', value: calculatePace(data.res.VMA * 0.7) },
			{ title: '75%', value: calculatePace(data.res.VMA * 0.75) },
			{ title: '80%', value: calculatePace(data.res.VMA * 0.8) },
			{ title: '85%', value: calculatePace(data.res.VMA * 0.85) },
			{ title: '90%', value: calculatePace(data.res.VMA * 0.9) },
			{ title: '95%', value: calculatePace(data.res.VMA * 0.95) },
			{ title: '100%', value: calculatePace(data.res.VMA * 1) },
			{ title: '105%', value: calculatePace(data.res.VMA * 1.05) },
			{ title: '110%', value: calculatePace(data.res.VMA * 1.1) }
		]}
	/>
	<CardInput title="Calcul % VMA" data={data.res.VMA} metric="min/km" />
	<CardRace
		title="5 km"
		data={{
			easy: { time: calculateTime(data.res.VMA, 90, 5), pace: calculatePace(data.res.VMA * 0.9) },
			medium: {
				time: calculateTime(data.res.VMA, 92.5, 5),
				pace: calculatePace(data.res.VMA * 0.925)
			},
			hard: { time: calculateTime(data.res.VMA, 95, 5), pace: calculatePace(data.res.VMA * 0.95) }
		}}
	/>
	<CardRace
		title="10 km"
		data={{
			easy: { time: calculateTime(data.res.VMA, 85, 10), pace: calculatePace(data.res.VMA * 0.85) },
			medium: {
				time: calculateTime(data.res.VMA, 87.5, 10),
				pace: calculatePace(data.res.VMA * 0.875)
			},
			hard: { time: calculateTime(data.res.VMA, 90, 10), pace: calculatePace(data.res.VMA * 0.9) }
		}}
	/>
	<CardRace
		title="20 km"
		data={{
			easy: { time: calculateTime(data.res.VMA, 80, 20), pace: calculatePace(data.res.VMA * 0.8) },
			medium: {
				time: calculateTime(data.res.VMA, 82.5, 20),
				pace: calculatePace(data.res.VMA * 0.825)
			},
			hard: { time: calculateTime(data.res.VMA, 85, 20), pace: calculatePace(data.res.VMA * 0.85) }
		}}
	/>
	<CardRace
		title="semi"
		data={{
			easy: {
				time: calculateTime(data.res.VMA, 80, 21.0975),
				pace: calculatePace(data.res.VMA * 0.8)
			},
			medium: {
				time: calculateTime(data.res.VMA, 82.5, 21.0975),
				pace: calculatePace(data.res.VMA * 0.825)
			},
			hard: {
				time: calculateTime(data.res.VMA, 85, 21.0975),
				pace: calculatePace(data.res.VMA * 0.85)
			}
		}}
	/>
	<CardRace
		title="marathon"
		data={{
			easy: {
				time: calculateTime(data.res.VMA, 75, 42.195),
				pace: calculatePace(data.res.VMA * 0.75)
			},
			medium: {
				time: calculateTime(data.res.VMA, 77.5, 42.195),
				pace: calculatePace(data.res.VMA * 0.775)
			},
			hard: {
				time: calculateTime(data.res.VMA, 80, 42.195),
				pace: calculatePace(data.res.VMA * 0.8)
			}
		}}
	/>
</section>
