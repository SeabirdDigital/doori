import { error, type ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ params, locals: { supabase } }) => {
	if (params.page == "layout") throw error(404, "Page not found");

	const pageArray = (await supabase.from("doori").select("*").eq("page", params.page)).data;
	if (!pageArray) throw error(404, "Page not found");
	const page: {
		[lang: string]: {
			title: string;
			slug: string;
			[section: string]:
				| {
						heading: string;
						text: string;
				  }
				| string;
		};
	} = {
		sv: {
			title: "",
			slug: ""
		},
		en: {
			title: "",
			slug: ""
		}
	};
	pageArray.forEach((item) => {
		const id = (item.name as string)
			.replace(/([a-z](?=[A-Z]))/g, "$1 ")
			.toLowerCase()
			.split(" ");

		if (id.length > 1) {
			if (!page[item.language][id[0]]) {
				page[item.language][id[0]] = {
					heading: "",
					text: ""
				};
			}

			const i = page[item.language][id[0]];
			if (typeof i != "string" && (id[1] == "heading" || id[1] == "text")) i[id[1]] = item.value;
		} else {
			page[item.language][item.name] = item.value;
		}
	}, {});

	console.log(page);

	return {
		page
	};
};
