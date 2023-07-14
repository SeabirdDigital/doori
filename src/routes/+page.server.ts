import { redirect, type ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ cookies }) => {
	const lang = (cookies.get("lang") as "sv" | "en" | undefined) ?? "sv";

	throw redirect(302, `/${lang}/`);
};
