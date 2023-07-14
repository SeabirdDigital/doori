import { locationsArray } from "$lib/data/locations";
import type { LocationId, LocationInArray } from "$lib/data/types/locations";
import { writable } from "svelte/store";

export const locationsInOrder = writable<LocationInArray[]>(locationsArray);

export const newSelectedLocation = writable<LocationId>("malmö");

const selectedLocation = writable<LocationId>("malmö");
export default selectedLocation;
