<script>
    export let runnersData;

    import Runner from '$components/navbar/NavRunner.svelte';
    import Link from '$components/navbar/NavLink.svelte';
    import Title from '$components/navbar/NavTitle.svelte';

    let expanded = false; // Le menu est fermé par défaut

    function clickHandler() {
        expanded = !expanded;
    }
</script>

<button aria-controls="menu-principal" aria-expanded={expanded} id="menu-btn" on:click={clickHandler} class="md:hidden block text-4xl cursor-pointer text-white">☰</button>
<nav id="menu-principal" class={`fixed bg-gray-800 md:static top-0 ${expanded ? 'right-0' : 'right-full'} w-full h-full md:flex md:flex-col md:items-center md:bg-transparent transition-right duration-300`} aria-label="Menu principal">
    <button aria-controls="menu-principal" aria-expanded={expanded} id="close-menu-btn" on:click={clickHandler} class="md:hidden block text-4xl cursor-pointer text-white">X</button>
    
    <div class="flex flex-col gap-2 mt-6 px-4">
        <div class="flex flex-shrink-0 items-center px-4 mb-4">
            <img class="max-h-8 w-auto m-auto" src="/logo-ll.png" alt="Local Legend" />
        </div>
        <Link title="Dashboard" url="/" active />

        <Title>Runners</Title>

        {#each runnersData.res as runner}
            {#if runner.statut === 'enable'}
                <Runner
                    firstName={runner.prenom}
                    login={runner.monogramme.toUpperCase() ?? '??'}
                    url={`/runner/${runner.id}`}
                    {...runner}
                />
            {/if}
        {/each}

        <Title>Outils</Title>
        <Link title="Calendrier" url="/" />
        <Link title="Tableau" url="/" />
    </div>
</nav>

<!--
    this.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('open');
<div class="flex min-h-0 flex-1 flex-col bg-gray-800 h-full">
	<div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4 lg:block">
		<div class="flex flex-shrink-0 items-center px-4">
			<img class="max-h-8 w-auto m-auto" src="/logo-ll.png" alt="Local Legend" />
		</div>
		<nav class="mt-5 flex-1 space-y-1 bg-gray-800 px-2" aria-label="Menu">
			<Link title="Dashboard" url="/" active />

			<Title>Runners</Title>

			{#each runnersData.res as runner}
				{#if runner.Statut === 'enable'}
					<Runner
						firstName={runner.Prenom}
						login={runner.monogramme.toUpperCase() ?? '??'}
						url={`/runner/${runner.id}`}
						{...runner}
					/>
				{/if}
			{/each}

			<Title>Outils</Title>
			<Link title="Calendrier" url="/" />
			<Link title="Tableau" url="/" />
		</nav>
	</div>
	<div class="flex flex-shrink-0 bg-gray-700 p-4">
		<a href="/" class="group block w-full flex-shrink-0">
			<div class="flex items-center">
				<div class="text-gray-400">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						class="bi bi-box-arrow-in-right"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
						/>
						<path
							fill-rule="evenodd"
							d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
						/>
					</svg>
				</div>
				<div class="ml-3">
					<p class="text-sm font-medium text-white hover:text-gray-300">Espace Coach</p>
				</div>
			</div>
		</a>
	</div>
</div>
-->