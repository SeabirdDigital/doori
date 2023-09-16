import { error, type ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ locals: { supabase } }) => {
	const pagesArray = (await supabase.from("doori").select("*")).data;
	if (!pagesArray) throw error(404, "Pages not found");
	const pages = pagesArray.reduce((obj, item) => {
		if (!obj[item.page])
			obj[item.page] = {
				sv: {},
				en: {}
			};

		obj[item.page][item.language][item.name] = item.value;
		return obj;
	}, {});

	return {
		pages
	};
};
