<script>
	export let login;
	export let firstName;
	export let url;
</script>

<a
	href={url}
	class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
>
	<span
		class="flex items-center justify-center bg-white mr-3 bg-opacity-10 border border-slate-500 aspect-square px-2 text-xs font-bold rounded-md w-[30px]"
	>
		{login}
	</span>
	<span class="flex-1">{firstName}</span>
</a>
