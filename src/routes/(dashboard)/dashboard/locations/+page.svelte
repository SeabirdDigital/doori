<script lang="ts">
	import { goto } from "$app/navigation";
	import { Button, Card, Group, Stack, Text } from "@svelteuidev/core";

	export let data;

	const locations = data.locations;
</script>

<Stack>
	{#if locations}
		{#each locations as l}
			<Card>
				<Group position="apart">
					<Text grow size="lg">{l.city}</Text>
					<Button on:click={() => goto("/dashboard/locations/" + l.city)}>Edit</Button>
				</Group>
			</Card>
		{/each}
	{/if}
</Stack>
