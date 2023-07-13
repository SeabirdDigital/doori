import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.ip = event.getClientAddress();
	if (event.locals.ip === "::1")
		event.locals.ip = (await (await fetch("https://ipinfo.io/json")).json()).ip;

	return await resolve(event);
};
