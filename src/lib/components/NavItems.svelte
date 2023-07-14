<script lang="ts">
	import texts, { languages } from "$lib/data/texts";
	import lang from "$lib/stores/lang";
	import pageId from "$lib/stores/pageId";
	import { goto } from "$lib/utils";
	import Home from "./pages/Home.svelte";

	let itemNames = texts[$lang].layout.nav;
	$: itemNames = texts[$lang].layout.nav;

	const switchLang = async () => {
		const currentIndex = languages.findIndex((l) => l == $lang);
		const nextIndex = currentIndex + 1 >= languages.length ? 0 : currentIndex + 1;

		await fetch(`/api/lang/${languages[nextIndex]}`, { method: "POST" });

		goto($pageId, { lang: languages[nextIndex] });
	};
</script>

<li>
	<button on:click={() => goto("menu")}>{itemNames.menu}</button>
</li>
<li>
	<button on:click={() => goto("about")}>{itemNames.about}</button>
</li>
<li>
	<button on:click={() => goto("home", { sectionId: texts[$lang].home.restaurants.toLowerCase() })}>
		{itemNames.restaurants}
	</button>
</li>
<li>
	<button on:click={() => goto("franchising")}>{itemNames.franchising}</button>
</li>

<button class="flex items-center gap-4 sm:-ml-4" on:click={switchLang}>
	<span class="sm:hidden">{itemNames.language}</span>
	<img class="h-6" src="/flags/{$lang}.svg" alt="{$lang} flag. Click to switch language." />
</button>
