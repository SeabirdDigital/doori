import { error, type ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ params, locals: { supabase } }) => {
	const pageArray = (await supabase.from("doori").select("*").eq("page", params.page)).data;
	if (!pageArray) throw error(404, "Page not found");
	const page: { [key: string]: { [key: string]: string } } = {
		sv: {},
		en: {}
	};
	pageArray.forEach((item) => {
		page[item.language][item.name] = item.value;
	}, {});

	return {
		page
	};
};
