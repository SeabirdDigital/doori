import type { LanguageId } from "$lib/data/types/texts";
import { isLanguageId } from "$lib/stores/lang";
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

export const load: ServerLoad = async ({ cookies, params, locals: { supabase, getSession } }) => {
	let lang = params.path?.split("/")[0] as LanguageId;
	let rest = params.path?.split("/").slice(1).join("/");
	if (rest === "") rest = "/";

	console.log(lang, params);
	if (!isLanguageId(lang)) {
		console.log(lang);
		lang = (cookies.get("lang") as LanguageId) ?? "sv";

		throw redirect(302, `/${lang}${rest ? "/" + rest : ""}`);
	}

	const slugData = (
		await supabase
			.from("doori")
			.select("*")
			.eq("name", "slug")
			.eq("value", rest)
			.eq("language", lang)
			.single()
	).data;
	const id = slugData.page;

	const layoutDataArray = (await supabase.from("doori").select("*").eq("page", "layout")).data;
	if (!layoutDataArray) throw error(500, "Something went wrong");
	const layoutData: Record<string, string> = layoutDataArray.reduce(
		(obj, item) => Object.assign(obj, { [item.name]: item.value }),
		{}
	);

	const pageDataArray = (await supabase.from("doori").select("*")).data;
	if (!pageDataArray) throw error(404, "Page not found");
	const pageData = pageDataArray.reduce((obj, item) => {
		if (!obj[item.page])
			obj[item.page] = {
				sv: {},
				en: {}
			};

		obj[item.page][item.language][item.name] = item.value;
		return obj;
	}, {});

	const menuDataArray = (await supabase.from("doori_menu").select("*")).data;
	if (!menuDataArray) throw error(404, "Menu not found");

	menuDataArray.sort((a, b) => a.order - b.order);

	const menuData: { [lang: string]: { name: string; items: any[] }[] } = {};
	menuDataArray.forEach((c) => {
		if (!menuData[c.language]) menuData[c.language] = [];

		menuData[c.language].push({ name: c.category_name, items: c.items });
	});

	cookies.set("lang", lang, { path: "/" });

	return {
		lang,
		id,
		pageData,
		layoutData,
		menuData,
		session: await getSession()
	};
};
