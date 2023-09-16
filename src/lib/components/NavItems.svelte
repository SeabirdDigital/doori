<script lang="ts">
	import lang from "$lib/stores/lang";
	import { pageId } from "$lib/stores/page";
	import { goto } from "$lib/utils";

	export let layoutData: Record<string, string>;

	const flags = {
		sv: "/flags/sv.svg",
		en: "/flags/en.svg"
	};
	const languages = ["sv", "en"] as const;

	const switchLang = async () => {
		const currentIndex = languages.findIndex((l) => l == $lang);
		const nextIndex = currentIndex + 1 >= languages.length ? 0 : currentIndex + 1;

		await fetch(`/api/lang/${languages[nextIndex]}`, { method: "POST" });

		goto($pageId, { lang: languages[nextIndex] });
	};
</script>

<li>
	<button on:click={() => goto("menu")}>{layoutData.menu}</button>
</li>
<li>
	<button on:click={() => goto("about")}>{layoutData.about}</button>
</li>
<li>
	<button on:click={() => goto("franchising")}>{layoutData.franchising}</button>
</li>

<button class="flex items-center gap-4 sm:-ml-4" on:click={switchLang}>
	<span class="sm:hidden">{layoutData.language}</span>
	<img class="aspect-square h-6" src={flags[$lang]} alt="{$lang} flag. Click to switch language." />
</button>
