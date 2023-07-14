import { isLanguageId, pages } from "$lib/data/texts";
import type { DooriLocation } from "$lib/data/types/locations";
import type { LanguageId, PageId } from "$lib/data/types/texts";
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
	let lang = params.path?.split("/")[0] as LanguageId;
	let rest = params.path?.split("/").slice(1).join("/");
	if (rest === "") rest = "/";

	if (!isLanguageId(lang)) {
		lang = (cookies.get("lang") as LanguageId) ?? "sv";

		throw redirect(302, `/${lang}${rest ? "/" + rest : ""}`);
	}

	const pagesInLang = pages[lang];
	const id: PageId | undefined = (Object.keys(pagesInLang) as PageId[]).find(
		(key) => pagesInLang[key].slug == rest
	);
	if (!id) {
		throw error(404, "Page not found");
	}

	const locationsInOrder: (DooriLocation & { id: string })[] = [];

	const ipInfoResponse = await fetch(`https://ipinfo.io/${locals.ip}?token=d0eac2491f7841`).catch(
		() => {
			console.log("No Internet");
			return undefined;
		}
	);

	const ipInfo: IpInfo | undefined = await ipInfoResponse?.json();

	cookies.set("lang", lang);

	return { lang, locationsInOrder, ipInfo, id };
};
