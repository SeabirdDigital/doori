import { pageData } from "$lib/stores/page";
import type { RequestHandler } from "@sveltejs/kit";
import { get } from "svelte/store";

export const POST: RequestHandler = async (event) => {
	const lang = event.params.lang;
	if (!lang)
		return new Response(undefined, {
			status: 400
		});

	if (get(pageData).home[lang] === undefined) {
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
