import texts from "$lib/data/texts";
import type { LanguageId } from "$lib/data/types/texts";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async (event) => {
	const lang = event.params.lang as LanguageId;
	if (!lang)
		return new Response(undefined, {
			status: 400
		});

	if (texts[lang] === undefined) {
		return new Response("Language not found", {
			status: 400
		});
	}

	event.cookies.set("lang", lang, {
		path: "/",
		maxAge: 60 * 60 * 24 * 365 * 15
	});
	return new Response();
};
