import type { LanguageId, PageIds, Pages, Texts } from "../types/texts";
import en from "./lang/en";
import sv from "./lang/sv";

export const textObject = {
	sv,
	en
};

const texts: { [key in LanguageId]: Texts } = textObject;
export default texts;

export const pages: { [key in LanguageId]: Pages } = texts;

export const languages: LanguageId[] = Object.keys(texts) as LanguageId[];

export const isLanguageId = (lang: string): lang is LanguageId => {
	return Object.keys(textObject).includes(lang);
};
export const isPageId = (pageId: string): pageId is PageIds => {
	return Object.keys(textObject.en).includes(pageId);
};
