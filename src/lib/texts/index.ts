import { en } from "./lang/en";
import { sv } from "./lang/sv";

export type Texts = typeof en;

export type Menu = Category[];
type Category = {
	name: string;
	items: Item[];
};
type Item = {
	name: string;
	longName?: boolean;
	description: string;
	price: number | string;
};

export const langs = {
	sv,
	en
};
const texts: { [id: string]: Texts } = langs;

export default texts;

export const pageMeta: {
	[key in keyof typeof langs]: {
		[key in keyof Partial<Texts> | string]: { slug: string; title: string };
	};
} = {
	en: {
		Home: {
			slug: "/",
			title: "Doori | Korean fried chicken & beyond"
		},
		Menu: {
			slug: "menu",
			title: "Menu | Doori"
		},
		About: {
			slug: "about",
			title: "About Us | Doori"
		},
		Franchising: {
			slug: "franchising",
			title: "Franchising | Doori"
		}
	},
	sv: {
		Home: {
			slug: "/",
			title: "Doori | Korean fried chicken & beyond"
		},
		Menu: {
			slug: "meny",
			title: "Meny | Doori"
		},
		About: {
			slug: "om-oss",
			title: "Om Oss | Doori"
		},
		Franchising: {
			slug: "franchising",
			title: "Franchising | Doori"
		}
	}
};
