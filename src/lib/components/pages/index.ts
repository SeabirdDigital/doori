import type { SvelteComponent } from "svelte";
import About from "./About.svelte";
import Franchising from "./Franchising.svelte";
import Home from "./Home.svelte";
import Menu from "./Menu.svelte";

const pages: { [id: string]: typeof SvelteComponent } = {
	Home,
	Menu,
	About,
	Franchising
};
export default pages;
