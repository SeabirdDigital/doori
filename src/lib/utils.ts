import { goto as svelteGoto } from "$app/navigation";
import { menuOpen } from "./stores/menuOpen";
import { transitionOn } from "./stores/transitionOn";

export const goto = (href: string) => {
	transitionOn.set(true);
	setTimeout(() => {
		svelteGoto(href);
		menuOpen.set(false);
		transitionOn.set(false);
	}, 500);
};
