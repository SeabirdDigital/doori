import { error, type ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ locals: { supabase } }) => {
	const pagesArray = (await supabase.from("doori").select("*")).data;
	if (!pagesArray) throw error(404, "Pages not found");

	let numOfPages = 0;
	pagesArray.reduce((obj, item) => {
		if (!obj[item.page]) {
			obj[item.page] = true;
			numOfPages++;
		}

		return obj;
	}, {});

	return {
		numOfPages
	};
};
