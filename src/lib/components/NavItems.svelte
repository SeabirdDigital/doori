<script lang="ts">
	import lang from "$lib/stores/lang";
	import pageId from "$lib/stores/pageId";
	import texts, { langs } from "$lib/texts";
	import { goto } from "$lib/utils";

	let itemNames = texts[$lang].layout.nav;
	$: itemNames = texts[$lang].layout.nav;

	const langsArray = Object.keys(langs) as (keyof typeof langs)[];

	const switchLang = async () => {
		const currentIndex = langsArray.findIndex((l) => l == $lang);
		const nextIndex = currentIndex + 1 >= langsArray.length ? 0 : currentIndex + 1;

		await fetch(`/api/lang/${langsArray[nextIndex]}`, { method: "POST" });

		goto($pageId, { lang: langsArray[nextIndex] });
	};
</script>

<li>
	<button on:click={() => goto("Menu")}>{itemNames.menu}</button>
</li>
<li>
	<button on:click={() => goto("About")}>{itemNames.about}</button>
</li>
<li>
	<button on:click={() => goto(`/${$lang}/#restauranger`, { href: true })}>
		{itemNames.restaurants}
	</button>
</li>
<li>
	<button on:click={() => goto("Franchising")}>{itemNames.franchising}</button>
</li>

<button class="flex items-center gap-4 sm:-ml-4" on:click={switchLang}>
	<span class="sm:hidden">{itemNames.language}</span>
	<img class="h-6" src="/flags/{$lang}.svg" alt="{$lang} flag. Click to switch language." />
</button>
