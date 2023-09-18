<script lang="ts">
	export let data;

	const locations = data.locations;
</script>

{#if locations}
	{#each locations as l}
		<div>
			<a href="/dashboard/locations/{l.city}">
				{l.city}
			</a>
		</div>
	{/each}
{/if}
