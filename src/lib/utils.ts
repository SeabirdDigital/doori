import { goto as svelteGoto } from "$app/navigation";
import { get } from "svelte/store";
import texts, { isPageId } from "./data/texts";
import type { LocationInArray } from "./data/types/locations";
import type { LanguageId, PageId } from "./data/types/texts";
import langStore from "./stores/lang";
import menuOpen from "./stores/menuOpen";
import pageId from "./stores/pageId";
import transitionOn from "./stores/transitionOn";

export const getDistanceFromLatLngInKm = (
	pos1: readonly [number, number],
	pos2: readonly [number, number]
) => {
	const R = 6371; // Radius of the earth in km
	const dLat = deg2rad(pos2[0] - pos1[0]); // deg2rad below
	const dLon = deg2rad(pos2[1] - pos1[1]);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(deg2rad(pos1[0])) *
			Math.cos(deg2rad(pos2[0])) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const d = R * c; // Distance in km
	return d;
};

export const deg2rad = (deg: number) => {
	return deg * (Math.PI / 180);
};

export const latLng2LngLat = (latLng: [number, number] | readonly [number, number]) => {
	return [...latLng].reverse() as [number, number];
};

type GotoOptions = { lang?: LanguageId; sectionId: string };
export const goto = (id: PageId, options?: Partial<GotoOptions>) => {
	const lang = options?.lang ?? get(langStore);

	transitionOn.set(true);

	if (!isPageId(id)) throw new Error("No page found");

	const gotoHref = `/${lang}/${texts[lang][id].slug}`;

	setTimeout(async () => {
		if (options?.lang) langStore.set(options.lang);

		await svelteGoto(gotoHref + (options?.sectionId ? `#${options.sectionId}` : ""));

		pageId.set(id);

		menuOpen.set(false);
		transitionOn.set(false);
	}, 500);
};

export const sortLocations = (
	locationsArray: LocationInArray[],
	currentLatLng: [number, number]
) => {
	return locationsArray.sort(
		(l1, l2) =>
			getDistanceFromLatLngInKm(currentLatLng, l1.latLng) -
			getDistanceFromLatLngInKm(currentLatLng, l2.latLng)
	);
};
