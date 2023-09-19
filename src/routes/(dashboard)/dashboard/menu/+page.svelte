<script lang="ts">
	import { page } from "$app/stores";
	import { deepEqual } from "$lib/utils.js";

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

<div>
	<select name="language" id="lang" bind:value={lang}>
		<option value="sv">Svenska</option>
		<option value="en">English</option>
	</select>

	<div>
		{#key lang}
			{#each menu[lang] as c, i}
				<div>
					<input type="text" id="c{i}" bind:value={c.category_name} />

					<div>
						{#each c.items as item, j}
							<div>
								<input type="text" id="name{j}" bind:value={c.items[j].name} />
								<input type="checkbox" id="longName{j}" bind:value={c.items[j].longName} />
								<div>
									<textarea
										id="description{j}"
										cols="30"
										rows="10"
										bind:value={c.items[j].description}
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
