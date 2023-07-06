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
