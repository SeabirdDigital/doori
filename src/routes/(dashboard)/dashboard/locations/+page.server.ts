import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ locals: { supabase } }) => {
	const locations = await (
		await supabase.from("doori_locations").select("*")
	).data?.sort((a, b) => a.order - b.order);

	return {
		locations
	};
};
