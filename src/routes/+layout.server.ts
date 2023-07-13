import { locations, type DooriLocation } from "$lib/stores/locations";
import { langs, pageMeta } from "$lib/texts";
import { getDistanceFromLatLngInKm } from "$lib/utils";
import { error, redirect, type ServerLoad } from "@sveltejs/kit";

export type IpInfo = {
	ip: string;
	hostname: string;
	city: string;
	region: string;
	country: string;
	loc: string;
	org: string;
	postal: string;
	timezone: string;
};

export const load: ServerLoad = async ({ locals, cookies, fetch, params }) => {
	let lang = params.path?.split("/")[0] as keyof typeof langs;
	let rest = params.path?.split("/").slice(1).join("/");
	if (rest === "") rest = "/";

	if (Object.keys(langs).indexOf(lang) === -1) {
		lang = (cookies.get("lang") as "sv" | "en" | undefined) ?? "sv";

		throw redirect(302, `/${lang}${rest ? "/" + rest : ""}`);
	}

	let pageId: string | undefined;
	let foundPage = false;
	for (const key in pageMeta[lang]) {
		if (Object.prototype.hasOwnProperty.call(pageMeta[lang], key)) {
			const page = pageMeta[lang][key as keyof typeof pageMeta.en];

			const slug = rest;
			foundPage = page?.slug == slug;
			pageId = key;
		}

		if (foundPage) break;
	}
	if (!foundPage || !pageId) {
		throw error(404, "Page not found");
	}

	let ipInfo: IpInfo | undefined;
	let locationsInOrder: (DooriLocation & { id: string })[] = [];

	const ipInfoResponse = await fetch(`https://ipinfo.io/${locals.ip}?token=d0eac2491f7841`).catch(
		() => {
			console.log("No Internet");
			return undefined;
		}
	);

	if (ipInfoResponse) {
		ipInfo = await ipInfoResponse.json();

		const currentLocation = ipInfo?.loc.split(",").map((x) => parseFloat(x)) as [number, number];

		locationsInOrder = Object.entries(locations)
			.sort(
				(l1, l2) =>
					getDistanceFromLatLngInKm(currentLocation, l1[1].latLng) -
					getDistanceFromLatLngInKm(currentLocation, l2[1].latLng)
			)
			.map((l) => ({ ...l[1], id: l[0] }));
	}

	cookies.set("lang", lang);

	return { lang, locationsInOrder, ipInfo, slug: rest, pageId };
};
