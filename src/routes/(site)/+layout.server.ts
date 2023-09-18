import { isLanguageId } from "$lib/utils";
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
	let lang = params.path?.split("/")[0];
	let rest = params.path?.split("/").slice(1).join("/");
	if (rest === "") rest = "/";

	if (!isLanguageId(lang ?? "")) {
		lang = cookies.get("lang") ?? "sv";

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
	const pageData: PageData = pageDataArray.reduce((obj, item) => {
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

	const menuData: Menu = {};
	menuDataArray.forEach((c) => {
		if (!menuData[c.language]) menuData[c.language] = [];

		menuData[c.language].push(c);
	});

	const locations = await (
		await supabase.from("doori_locations").select("*")
	).data?.sort((a, b) => a.order - b.order);

	if (lang) cookies.set("lang", lang, { path: "/" });

	return {
		lang,
		id,
		pageData,
		layoutData,
		locations,
		menuData,
		session: await getSession()
	};
};
