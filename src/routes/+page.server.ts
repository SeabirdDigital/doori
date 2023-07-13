import { redirect, type ServerLoad } from "@sveltejs/kit";

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

export const load: ServerLoad = async ({ cookies }) => {
	const lang = (cookies.get("lang") as "sv" | "en" | undefined) ?? "sv";

	throw redirect(302, `/${lang}/`);
};
