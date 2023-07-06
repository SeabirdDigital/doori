import type { langs } from "$lib/texts";
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

export const load: ServerLoad = async ({ locals, cookies }) => {
	const ipInfoResponse = await fetch(`https://ipinfo.io/${locals.ip}?token=d0eac2491f7841`);
	const ipInfo: IpInfo = await ipInfoResponse.json();

	let lang = cookies.get("lang") as keyof typeof langs | undefined;
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

	return { lang };
};
