<script>
	import { goto } from "$app/navigation";
	import { Button, Card, Group, Stack, Text } from "@svelteuidev/core";
</script>

<Stack>
	<Card>
		<Group position="apart">
			<Text grow size="lg">Pages</Text>
			<Button on:click={() => goto("/dashboard/pages")}>Edit</Button>
		</Group>
	</Card>
	<Card>
		<Group position="apart">
			<Text size="lg">Menu</Text>
			<Button on:click={() => goto("/dashboard/menu")}>Edit</Button>
		</Group>
	</Card>
	<Card>
		<Group position="apart">
			<Text size="lg">Locations</Text>
			<Button on:click={() => goto("/dashboard/locations")}>Edit</Button>
		</Group>
	</Card>
</Stack>
