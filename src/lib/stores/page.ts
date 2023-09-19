import { writable } from "svelte/store";

export const pageId = writable<string>();
export const pageData = writable<PageData>();
