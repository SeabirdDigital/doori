import { writable } from "svelte/store";

type DooriLocation = {
	city: string;
	latLng: readonly [number, number];
	openingHours: {
		monday: string | undefined;
		tuesday: string | undefined;
		wednesday: string | undefined;
		thursday: string | undefined;
		friday: string | undefined;
		saturday: string | undefined;
		sunday: string | undefined;
	};

	address: string;
	onlyDelivery: boolean;
	phone: string;
	foodora: string;
	maps?: string;
};

export const locations: { [id: string]: DooriLocation } = {
	malmö: {
		city: "Malmö",
		latLng: [55.5970445, 13.0070001],
		openingHours: {
			monday: undefined,
			tuesday: "15:45 - 20:30",
			wednesday: "15:30 - 20:30",
			thursday: "15:30 - 20:30",
			friday: "16:00 - 21:00",
			saturday: "16:00 - 20:45",
			sunday: "15:30 - 20:30"
		},
		address: `Möllevången<br>`,
		onlyDelivery: true,
		phone: "076-167 70 50",
		foodora: "https://www.foodora.se/restaurant/vf5j/doori-malmo"
	},
	helsingborg: {
		city: "Helsingborg",
		latLng: [56.0491065, 12.6707987],
		openingHours: {
			monday: undefined,
			tuesday: "11:15 - 19:00",
			wednesday: "11:30 - 19:00",
			thursday: "11:15 - 20:00",
			friday: "11:15 - 20:00",
			saturday: "11:15 - 20:00",
			sunday: undefined
		},
		address: "Roskildegatan 2<br>252 21 Helsingborg",
		onlyDelivery: false,
		phone: "072-249 11 98",
		foodora: "https://www.foodora.se/restaurant/pzqr/doori",
		maps: "https://goo.gl/maps/GpiwtjJ5tXuz5Qfq5"
	},
	trelleborg: {
		city: "Trelleborg",
		latLng: [55.3748484, 13.1500905],
		openingHours: {
			monday: undefined,
			tuesday: "11:00 - 20:45",
			wednesday: "11:00 - 20:45",
			thursday: "11:00 - 21:00",
			friday: "11:00 - 21:00",
			saturday: "11:45 - 21:00",
			sunday: "11:30 - 20:45"
		},
		address: `Centrala Trelleborg<br>`,
		onlyDelivery: true,
		phone: "041-064 40",
		foodora: "https://www.foodora.se/restaurant/vf5j/doori-malmo"
	},
	lund: {
		city: "Lund",
		latLng: [55.6973679, 13.1875213],
		openingHours: {
			monday: "11:00 - 20:45",
			tuesday: "11:00 - 20:45",
			wednesday: "11:00 - 20:45",
			thursday: "11:00 - 20:45",
			friday: "11:00 - 20:45",
			saturday: "11:30 - 20:45",
			sunday: "11:30 - 21:00"
		},
		address: `Centrala Staden<br>`,
		onlyDelivery: true,
		phone: "076-167 70 50",
		foodora: "https://www.foodora.se/restaurant/xalr/doori-lund"
	},
	växjö: {
		city: "Växjö",
		latLng: [56.8801265, 14.8061533],
		openingHours: {
			monday: "12:00 - 21:00",
			tuesday: "12:00 - 21:00",
			wednesday: "12:00 - 21:00",
			thursday: "11:30 - 21:00",
			friday: "12:00 - 20:45",
			saturday: "11:00 - 21:15",
			sunday: "11:00 - 21:00"
		},
		address: ``,
		onlyDelivery: true,
		phone: "047-02 27 55",
		foodora: "https://www.foodora.se/restaurant/hst4/doori-vaxjo"
	}
} as const;

export const newSelectedLocation = writable<string>("malmö");

const selectedLocation = writable<string>("malmö");
export default selectedLocation;
