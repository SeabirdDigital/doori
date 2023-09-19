type PageData = {
	[id: string]: {
		[lang: string]: Record<string, string>;
	};
};

type Menu = { [lang: string]: Category[] };

type Category = {
	category_name: string;
	items: Item[];
};

type Item = {
	name: string;
	longName: boolean;
	description: string;
};
