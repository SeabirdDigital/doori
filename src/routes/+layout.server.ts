import { isLanguageId } from "$lib/data/texts";
import type { LanguageId } from "$lib/data/types/texts";
import { supabase } from "$lib/supabaseClient";
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

export const load: ServerLoad = async ({ cookies, params }) => {
	let lang = params.path?.split("/")[0] as LanguageId;
	let rest = params.path?.split("/").slice(1).join("/");
	if (rest === "") rest = "/";

	if (!isLanguageId(lang)) {
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
	const layoutData = layoutDataArray.reduce(
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
	const menuData: { [lang: string]: { name: string; items: any[] }[] } = {};
	menuDataArray.forEach((item) => {
		if (!menuData[item.language]) menuData[item.language] = [];

		const category = menuData[item.language].find((c) => c.name === item.category);
		if (!category) menuData[item.language].push({ name: item.category, items: [item] });
		else category.items.push(item);
	});

	cookies.set("lang", lang, { path: "/" });

	return { lang, id, pageData, layoutData, menuData };
};
