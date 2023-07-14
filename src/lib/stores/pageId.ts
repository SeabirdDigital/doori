import type { PageIds } from "$lib/data/types/texts";
import { writable } from "svelte/store";

const pageId = writable<PageIds>();
export default pageId;
