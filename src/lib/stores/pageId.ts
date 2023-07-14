import type { PageId } from "$lib/data/types/texts";
import { writable } from "svelte/store";

const pageId = writable<PageId>();
export default pageId;
