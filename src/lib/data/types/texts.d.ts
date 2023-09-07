import type { textObject } from "../texts";
import type en from "../texts/lang/en";

type Texts = typeof en;
type Pages = Omit<Texts, "layout">;

type Menu = Category[];
type Category = {
	name: string;
	items: Item[];
};
type Item = {
	name: string;
	longName?: boolean;
	description: string;
};

type LanguageId = keyof typeof textObject;

type PageId = keyof Omit<typeof textObject.en, "layout">;
