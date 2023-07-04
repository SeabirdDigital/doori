import { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ locals }) => {
	return {
		ip: locals.ip
	};
};
