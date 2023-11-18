<script>
	export let data;
	import Navbar from '$components/navbar/Navbar.svelte';
	import '../app.css';
</script>

<nav class="w-60">
	<Navbar runnersData={data} />
</nav>
<main class="flex-1 p-6 bg-[#f2f3f4]">
	<slot />
</main>
