<script lang="ts">
	import { deepEqual } from "$lib/utils.js";
	import {
		Accordion,
		Button,
		NativeSelect,
		Space,
		Switch,
		TextInput,
		Textarea
	} from "@svelteuidev/core";

	export let data;

	let lang = "sv";
	let menu = data.menu;

	const save = async () => {
		const c = (await data.supabase.from("doori_menu").select("*")).data;
		c?.forEach(async (item) => {
			const newValue = menu[item.language].find((c: any) => c.id == item.id);

			if (!deepEqual(item, newValue)) {
				const thing = await data.supabase.from("doori_menu").update(newValue).eq("id", item.id);
				console.log(thing);
			}
		});
	};
</script>

<NativeSelect
	data={[
		{ label: "Svenska", value: "sv" },
		{ label: "English", value: "en" }
	]}
	bind:value={lang}
	label="Choose language"
/>

<div>
	{#key lang}
		{#each menu[lang] as c, i}
			<Space h={24} />
			<div>
				<TextInput label="Category Name" bind:value={c.category_name} />

				<Space h={8} />
				<Accordion>
					<div>
						{#each c.items as item, j}
							<Accordion.Item value={j}>
								<div slot="control">{item.name}</div>
								<TextInput label="Dish Name" bind:value={item.name} />
								<Space h={8} />
								<Switch label="Long name" bind:checked={item.longName} />
								<Space h={8} />
								<Textarea label="Description" bind:value={item.description} />
							</Accordion.Item>
						{/each}
					</div>
				</Accordion>
			</div>
		{/each}
	{/key}
</div>

<Space h={24} />

<Button on:click={save}>Save</Button>
