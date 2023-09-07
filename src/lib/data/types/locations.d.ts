export type DooriLocation = {
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
	order: string;
	reservation?: string;
	maps?: string;
};

type LocationId = keyof typeof locationsObject;
type LocationInArray = (typeof locationsArray)[0];
