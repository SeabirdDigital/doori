<script>
	import { goto } from "$app/navigation";
	import { Button, Card, Group, Stack, Text } from "@svelteuidev/core";

	export let data;
</script>

<Stack>
	{#each Object.entries(data.pages) as page}
		<Card>
			<Group position="apart">
				<Text grow size="lg">{page[0]}</Text>
				<Button on:click={() => goto("/dashboard/pages/" + page[0])}>Edit</Button>
			</Group>
		</Card>
	{/each}
</Stack>
