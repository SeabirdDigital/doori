import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ params, locals: { supabase } }) => {
	const location = await (
		await supabase.from("doori_locations").select("*").eq("city", params.location).single()
	).data;

	return {
		location
	};
};
