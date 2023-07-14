import { isLanguageId, pages } from "$lib/data/texts";
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

export const load: ServerLoad = async ({ locals, cookies, params }) => {
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

	cookies.set("lang", lang);

	return { lang, id, ip: locals.ip };
};
