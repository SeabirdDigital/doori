import type { LocationId } from "$lib/data/types/locations";
import { writable } from "svelte/store";

export const newSelectedLocation = writable<LocationId>("malmö");

const selectedLocation = writable<LocationId>("malmö");
export default selectedLocation;
