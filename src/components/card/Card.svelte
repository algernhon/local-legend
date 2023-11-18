<script>
	export let color;
</script>

<div
	class="border bg-white w-max rounded-lg shadow px-10 py-6"
	style={color ? `border-left: 5px solid ${color}` : ''}
>
	<slot />
</div>
