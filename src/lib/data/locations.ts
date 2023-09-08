import type { DooriLocation, LocationId } from "./types/locations";

const malmö: DooriLocation = {
	city: "Malmö",
	latLng: [55.5964701, 13.0088436],
	openingHours: {
		monday: undefined,
		tuesday: "11:00 - 20:45",
		wednesday: "11:00 - 20:45",
		thursday: "11:00 - 20:45",
		friday: "11:00 - 21:00",
		saturday: "11:00 - 21:00",
		sunday: "11:00 - 20:45"
	},
	address: `Bergsgatan 15<br>211 54 Malmö`,
	onlyDelivery: false,
	phone: "076-009 37 07",
	maps: "https://goo.gl/maps/ErazMwcWypr9tsVb9",
	order: "https://www.foodora.se/restaurant/ghco/doori-malmo",
	reservation: "#"
};
const helsingborg: DooriLocation = {
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
	phone: "076-860 56 59",
	order: "https://qopla.com/restaurant/doori---helsingborg/qDQjQjbxQE/order",
	maps: "https://goo.gl/maps/GpiwtjJ5tXuz5Qfq5"
};
const trelleborg: DooriLocation = {
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
	order: "https://www.foodora.se/restaurant/datj/doori-trelleborg"
};
const lund: DooriLocation = {
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
	order: "https://www.foodora.se/restaurant/xalr/doori-lund"
};
const växjö: DooriLocation = {
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
	order: "https://www.foodora.se/restaurant/hst4/doori-vaxjo"
};

const locationsObject = {
	malmö,
	helsingborg,
	trelleborg,
	lund,
	växjö
};

const locations: { [key in LocationId]: DooriLocation } = { ...locationsObject };
export default locations;

const locationsArray = Object.entries(locations).map((l) => ({
	...l[1],
	id: l[0] as LocationId
}));

export { locationsArray };
