import { writable } from "svelte/store";

const lang = writable<string>("sv");
export default lang;
