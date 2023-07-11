import type { langs } from "$lib/texts";
import { writable } from "svelte/store";

const lang = writable<keyof typeof langs>("sv");
export default lang;
