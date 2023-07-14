import type { LanguageId } from "$lib/data/types/texts";
import { writable } from "svelte/store";

const lang = writable<LanguageId>("sv");
export default lang;
