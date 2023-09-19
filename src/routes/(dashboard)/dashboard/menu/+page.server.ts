import { error, type ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ locals: { supabase } }) => {
	const menuDataArray = (await supabase.from("doori_menu").select("*")).data;
	if (!menuDataArray) throw error(404, "Menu not found");

	menuDataArray.sort((a, b) => a.order - b.order);

	const menu: Menu = {};
	menuDataArray.forEach((c) => {
		if (!menu[c.language]) menu[c.language] = [];

		menu[c.language].push(c);
	});

	return {
		menu
	};
};
