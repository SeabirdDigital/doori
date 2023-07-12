import { locations, type DooriLocation } from "$lib/stores/locations";
import type { langs } from "$lib/texts";
import { getDistanceFromLatLngInKm } from "$lib/utils";
import type { ServerLoad } from "@sveltejs/kit";

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

export const load: ServerLoad = async ({ locals, cookies, fetch }) => {
	let lang: keyof typeof langs = "sv";
	let ipInfo: IpInfo | undefined;
	let locationsInOrder: (DooriLocation & { id: string })[] = [];

	try {
		const ipInfoResponse = await fetch(`https://ipinfo.io/${locals.ip}?token=d0eac2491f7841`);
		ipInfo = await ipInfoResponse.json();

		const currentLocation = ipInfo?.loc.split(",").map((x) => parseFloat(x)) as [number, number];

		locationsInOrder = Object.entries(locations)
			.sort(
				(l1, l2) =>
					getDistanceFromLatLngInKm(currentLocation, l1[1].latLng) -
					getDistanceFromLatLngInKm(currentLocation, l2[1].latLng)
			)
			.map((l) => ({ ...l[1], id: l[0] }));

		lang = cookies.get("lang") as keyof typeof langs;
		if (!lang) {
			if (ipInfo?.country === "SE") {
				lang = "sv";
			} else {
				lang = "en";
			}
			cookies.set("lang", lang, {
				path: "/",
				maxAge: 60 * 60 * 24 * 365 * 15
			});
		}
	} catch (e) {
		console.log(e);
		console.warn("No internet");
	}

	return { lang, locationsInOrder, ipInfo };
};
