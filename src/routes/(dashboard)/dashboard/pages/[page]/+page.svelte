<script lang="ts">
	import { page } from "$app/stores";
	import { Button, NativeSelect, Space, TextInput, Textarea } from "@svelteuidev/core";

	export let data;

	let lang = "sv";
	let pageData = data.page;

	const save = async () => {
		const items = (await data.supabase.from("doori").select("*").eq("page", $page.params.page))
			.data;
		items?.forEach(async (i) => {
			const newValue = pageData[i.language][i.name];
			if (i.value != newValue) {
				console.log({ ...i, value: newValue });
				const thing = await data.supabase.from("doori").update({ value: newValue }).eq("id", i.id);
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

<Space h={24} />

{#key lang}
	<TextInput label="Title" bind:value={pageData[lang].title} />
	<TextInput label="Slug" bind:value={pageData[lang].slug} />

	{#each Object.entries(pageData[lang]).filter((p) => typeof p != "string") as s}
		<Space h={24} />

		{#if typeof s[1] != "string"}
			<TextInput label="Heading" bind:value={s[1].heading} />
			<Textarea label="Text" bind:value={s[1].text} />
		{/if}
	{/each}
{/key}

<Space h={24} />

<Button on:click={save}>Save</Button>
