import type { SvelteComponent } from "svelte";
import about from "./About.svelte";
import franchising from "./Franchising.svelte";
import home from "./Home.svelte";
import menu from "./Menu.svelte";
import work from "./Work.svelte";

const pages: { [id: string]: typeof SvelteComponent } = {
	home,
	menu,
	about,
	franchising,
	work
};
export default pages;
