export function calculateMaxHeartRate(age, gender) {
	if (!age || !gender) {
		return 0;
	}

	if (gender === 'homme') {
		return 220 - age;
	} else if (gender === 'femme') {
		return 226 - age;
	} else {
		return 0;
	}
}

export function calculateAge(date) {
	if (!date) {
		return 0;
	}

	const dateOfBirth = new Date(date);
	const today = new Date();

	let age = today.getFullYear() - dateOfBirth.getFullYear();
	const month = today.getMonth() - dateOfBirth.getMonth();

	if (month < 0 || (month === 0 && today.getDate() < dateOfBirth.getDate())) {
		age--;
	}

	return age;
}

export function calculateVO2max(VMA) {
	if (!VMA) {
		return 0;
	}

	return Math.round(VMA * 3.5);
}

// Fonction qui transforme une vitesse en allure
export function calculatePace(speed) {
	if (!speed) {
		return 0;
	}

	const secKm = 3600 / speed;
	const minutes = Math.floor(secKm / 60);
	const seconds = Math.round(secKm % 60)
		.toString()
		.padStart(2, '0');

	return `${minutes}'${seconds}`;
}

// Fonction qui transforme une vma, un pourcentage de vma et une distance en temps
export function calculateTime(vma, percent, distance) {
	if (!vma || !percent || !distance) {
		return 0;
	}

	const speed = vma * (percent / 100);
	const sec = (distance / speed) * 3600;
	let minutes = Math.floor(sec / 60);
	const seconds = Math.round(sec % 60)
		.toString()
		.padStart(2, '0');

	let hours = 0;
	if (minutes > 59) {
		hours = Math.floor(minutes / 60);
		minutes = minutes % 60;
	}

	if (hours > 0) {
		return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds}`;
	} else {
		return `${minutes}:${seconds}`;
	}
}
