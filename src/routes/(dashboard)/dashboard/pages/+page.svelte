<script>
	import { page } from "$app/stores";

	export let data;
</script>

{#each Object.entries(data.pages) as page}
	<div>
		<a href="/dashboard/pages/{page[0]}">
			{page[0]}
		</a>
	</div>
{/each}
