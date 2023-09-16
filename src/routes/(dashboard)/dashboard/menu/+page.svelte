<script lang="ts">
	import { page } from "$app/stores";

	export let data;

	let lang = "sv";
	let menu = data.menu;

	const save = async () => {
		const items = (await data.supabase.from("doori_menu").select("*").eq("language", lang)).data;
		items?.forEach(async (item) => {
			const newValue = menu[item.language]
				.find((c) => c.name == item.category)
				?.items.find((i) => i.id == item.id);

			console.log(item.name, newValue.name);

			if (item != newValue) {
				const thing = await data.supabase.from("doori_menu").update(newValue).eq("id", item.id);
				console.log(thing);
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
			{#each menu[lang] as c, i}
				<div>
					<input type="text" id="c{i}" bind:value={menu[lang][i].name} />

					<div>
						{#each menu[lang][i].items as item, j}
							<div>
								<input type="text" id="name{j}" bind:value={menu[lang][i].items[j].name} />
								<input
									type="checkbox"
									id="longName{j}"
									bind:value={menu[lang][i].items[j].longName}
								/>
								<div>
									<textarea
										id="description{j}"
										cols="30"
										rows="10"
										bind:value={menu[lang][i].items[j].description}
									/>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		{/key}
	</div>
	<button on:click={save}>Save</button>
</div>
