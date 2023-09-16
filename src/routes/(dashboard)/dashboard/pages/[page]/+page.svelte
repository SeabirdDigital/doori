<script lang="ts">
	import { page } from "$app/stores";

	export let data;

	let lang = "sv";
	let pageData = data.page;

	const save = async () => {
		const items = (await data.supabase.from("doori").select("*").eq("page", $page.params.page))
			.data;
		items?.forEach((i) => {
			const newValue = pageData[i.language][i.name];
			if (i.value != newValue) {
				console.log({ ...i, value: newValue });
				data.supabase.from("doori").update({ ...i, value: newValue });
			}
		});
	};
</script>

<div>
	<select name="language" id="lang" bind:value={lang}>
		<option value="sv">Svenska</option>
		<option value="en">English</option>
	</select>

	<div>
		{#key lang}
			<div>
				<input type="text" id="title" bind:value={pageData[lang].title} />
			</div>
			<div>
				<input type="text" id="slug" bind:value={pageData[lang].slug} />
			</div>

			{#each Object.entries(pageData[lang]).filter((p) => p[0]
						.toLowerCase()
						.endsWith("heading") || p[0].toLowerCase().endsWith("text")) as p}
				<div>
					{#if p[0].toLowerCase().endsWith("heading")}
						<input type="text" id={p[0]} bind:value={pageData[lang][p[0]]} />
					{:else}
						<textarea id={p[0]} cols="30" rows="10" bind:value={pageData[lang][p[0]]} />
					{/if}
				</div>
			{/each}
		{/key}
	</div>
	<button on:click={save}>Save</button>
</div>
