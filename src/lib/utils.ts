import { goto as svelteGoto } from "$app/navigation";
import { get } from "svelte/store";
import pages from "./components/pages";
import langStore from "./stores/lang";
import menuOpen from "./stores/menuOpen";
import { pageData, pageId } from "./stores/page";
import transitionOn from "./stores/transitionOn";

type GotoOptions = { lang?: string; sectionId: string };
export const goto = (id: string, options?: Partial<GotoOptions>) => {
	const lang = options?.lang ?? get(langStore);

	transitionOn.set(true);

	if (!isPageId(id)) throw new Error("No page found");

	const gotoHref = `/${lang}/${get(pageData)[id][lang].slug}${
		options?.sectionId ? "#" + options.sectionId : ""
	}`;

	setTimeout(async () => {
		if (options?.lang) langStore.set(options.lang);

		await svelteGoto(gotoHref);

		pageId.set(id);

		menuOpen.set(false);
		transitionOn.set(false);
	}, 700);
};

export const deepEqual = (x: never, y: never): boolean => {
	const ok = Object.keys,
		tx = typeof x,
		ty = typeof y;
	return x && y && tx === "object" && tx === ty
		? ok(x).length === ok(y).length && ok(x).every((key) => deepEqual(x[key], y[key]))
		: x === y;
};

export const isLanguageId = (lang: string) => {
	return ["sv", "en"].includes(lang);
};
export const isPageId = (pageId: string) => {
	return Object.keys(pages).includes(pageId);
};
