import { writable } from "svelte/store";

export const currentLatLng = writable<[number, number]>();
