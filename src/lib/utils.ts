import { goto as svelteGoto } from "$app/navigation";
import { menuOpen } from "./stores/menuOpen";
import { transitionOn } from "./stores/transitionOn";

export const getDistanceFromLatLonInKm = (
	pos1: readonly [number, number],
	pos2: readonly [number, number]
) => {
	const R = 6371; // Radius of the earth in km
	const dLat = deg2rad(pos2[0] - pos1[0]); // deg2rad below
	const dLon = deg2rad(pos2[1] - pos1[1]);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(deg2rad(pos1[0])) *
			Math.cos(deg2rad(pos2[0])) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const d = R * c; // Distance in km
	return d;
};

export const deg2rad = (deg: number) => {
	return deg * (Math.PI / 180);
};

export const goto = (href: string) => {
	transitionOn.set(true);
	setTimeout(async () => {
		await svelteGoto(href);
		menuOpen.set(false);
		transitionOn.set(false);
	}, 500);
};
