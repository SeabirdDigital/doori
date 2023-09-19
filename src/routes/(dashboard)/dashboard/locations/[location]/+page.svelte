<script lang="ts">
	import { Accordion, Button, Space, Switch, TextInput } from "@svelteuidev/core";

	export let data;

	let l = data.location;

	const save = async () => {
		console.log(l);
		const t = await data.supabase.from("doori_locations").update(l).eq("id", l.id);
		console.log(t);
	};
</script>

<Accordion defaultValue="general">
	<Accordion.Item value="general">
		<div slot="control">General</div>
		<TextInput label="City" bind:value={l.city} />
		<TextInput label="Address" bind:value={l.address} />
		<Switch label="Only Delivery" bind:checked={l.onlyDelivery} />
		<TextInput label="Order Link" bind:value={l.orderLink} />
		<TextInput label="Maps Link" bind:value={l.maps} />
	</Accordion.Item>
	<Accordion.Item value="openingHours">
		<div slot="control">Opening Hours</div>
		<div>
			{#each ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as day}
				<div>
					<TextInput label={day} bind:value={l.openingHours[day]} />
				</div>
			{/each}
		</div>
	</Accordion.Item>
</Accordion>

<Space h={24} />

<Button on:click={save}>Save</Button>
