import type { langs } from "$lib/texts";
import { writable } from "svelte/store";

export const lang = writable<keyof typeof langs>("sv");
