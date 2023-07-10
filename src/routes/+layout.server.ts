import { locations } from "$lib/stores/locations";
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
	let nearestLocation: string | undefined = "helsingborg";

	try {
		const ipInfoResponse = await fetch(`https://ipinfo.io/${locals.ip}?token=d0eac2491f7841`);
		const ipInfo: IpInfo = await ipInfoResponse.json();

		const loc = ipInfo.loc.split(",").map((x) => parseFloat(x)) as [number, number];

		let nearestDistance = 0;
		Object.keys(locations).map((key) => {
			const location = locations[key];
			const d = getDistanceFromLatLngInKm(loc, location.latLng);
			if (nearestLocation && d > nearestDistance) return;

			nearestLocation = key;
			nearestDistance = d;
		});

		lang = cookies.get("lang") as keyof typeof langs;
		if (!lang) {
			if (ipInfo.country === "SE") {
				lang = "sv";
			} else {
				lang = "en";
			}
			cookies.set("lang", lang, {
				path: "/",
				maxAge: 60 * 60 * 24 * 365 * 15
			});
		}
	} catch {
		console.warn("No internet");
	}

	return { lang, nearestLocation };
};
