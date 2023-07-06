import { SECRET_LOCAL_IP } from "$env/static/private";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.ip = SECRET_LOCAL_IP ?? event.getClientAddress();

	return await resolve(event);
};
