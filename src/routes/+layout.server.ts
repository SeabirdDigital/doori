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

	let pageId: PageId | undefined;
	let foundPage = false;
	for (const key in pages[lang]) {
		if (Object.prototype.hasOwnProperty.call(pages[lang], key)) {
			const page = pages[lang][key as keyof typeof pages.en];

			const slug = rest;
			foundPage = page?.slug == slug;
			pageId = key as PageId;
		}

		if (foundPage) break;
	}
	if (!foundPage || !pageId) {
		throw error(404, "Page not found");
	}

	cookies.set("lang", lang);

	return { lang, pageId, ip: locals.ip };
};
