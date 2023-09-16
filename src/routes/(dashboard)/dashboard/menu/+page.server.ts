import { error, type ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ params, locals: { supabase } }) => {
	const menuDataArray = (await supabase.from("doori_menu").select("*")).data;
	if (!menuDataArray) throw error(404, "Menu not found");
	const menu: { [lang: string]: { name: string; items: any[] }[] } = {};
	menuDataArray.forEach((item) => {
		if (!menu[item.language]) menu[item.language] = [];

		const category = menu[item.language].find((c) => c.name === item.category);
		if (!category) menu[item.language].push({ name: item.category, items: [item] });
		else category.items.push(item);
	});

	return {
		menu
	};
};
