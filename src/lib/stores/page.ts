import type { PageId } from "$lib/data/types/texts";
import { writable } from "svelte/store";

export const pageId = writable<PageId>();
