import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.ip = import.meta.env.VITE_LOCAL_IP ?? event.getClientAddress();

	return await resolve(event);
};
