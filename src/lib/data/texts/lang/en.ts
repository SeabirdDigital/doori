import type { Menu } from "$lib/data/types/texts";

const menu: Menu = [
	{
		name: "Lunch",
		items: [
			{
				name: "K-bowl",
				longName: true,
				description:
					"Doori's fried chicken with your choice of homemade sauce, served with rice and pickled radish."
			},
			{
				name: "Fried dumplings",
				longName: true,
				description: "With cream cheese, crab sticks and sweet chili sauce."
			},
			{
				name: "Chikinmayo",
				description:
					"Korean Fried Chicken with rice and scrambled eggs, topped with soy sauce, teriyaki sauce and mayonnaise. Mix before eating to make it taste better."
			},
			{
				name: "Bibimbap",
				description:
					"Bibimbap is rice served in a bowl covered with seasoned vegetables, beef and topped with egg sunny side up. Doori's gochujang sauce is served on the side."
			}
		]
	},
	{
		name: "Extras",
		items: [
			{
				name: "Pickled radish",
				longName: true,
				description: ""
			},
			{
				name: "Kimchi",
				description: ""
			},
			{
				name: "Go sauce",
				description:
					"This sauce is our most popular sauce and is short for Gochujang sauce. The Go sauce is based on chili paste from Korea and despite the color it is not that strong."
			},
			{
				name: "So sauce",
				description:
					"The basis of the So sauce is garlic soy. This sauce is popular with those who like a milder taste."
			},
			{
				name: "He sauce",
				description:
					"The He sauce is a stronger version of the Go sauce for those who appreciate stronger food."
			}
		]
	}
];

const en = {
	layout: {
		banner: {
			chosen: "Chosen"
		},
		nav: {
			menu: "Menu",
			about: "About Us",
			franchising: "Franchising",
			language: "Language"
		},
		restaurants: {
			closed: "Closed",
			onlyDelivery: "Only home delivery",
			weekdays: {
				mon: "Mon",
				tue: "Tue",
				wed: "Wed",
				thu: "Thu",
				fri: "Fri",
				sat: "Sat",
				sun: "Sun"
			}
		},
		copyright: "Doo-Ri AB. All rights reserved."
	},
	home: {
		slug: "/",
		title: "Doori | Korean fried chicken & beyond",
		hero: {
			heading: "KOREAN<br>FRIED<br>CHICKEN<br>& beyond",
			text: "",
			buttons: { order: "Order Now", menu: "See Menu" }
		},
		sauce: {
			heading: "Sauces",
			text: "Korean fried chicken with optional homemade sauces:",
			sauces: [
				{
					name: "Go sauce",
					description:
						"This sauce is our most popular sauce and is short for Gochujang sauce. The Go sauce is based on chili paste from Korea and despite the color it is not that strong."
				},
				{
					name: "So sauce",
					description:
						"The basis of the So sauce is garlic soy. This sauce is popular with those who like a milder taste."
				},
				{
					name: "He sauce",
					description:
						"The He sauce is a stronger version of the Go sauce for those who appreciate stronger food."
				}
			]
		},
		restaurants: "Restaurants"
	},
	menu: {
		slug: "menu",
		title: "Menu | Doori",
		heading: "Menu",
		menu
	},
	about: {
		slug: "about",
		title: "About Us | Doori",
		main: {
			heading: "About Us",
			text: "It all started in 2021 when a friend and I decided to try renting a small food truck over the summer. We drove around Skåne to show what the Korean kitchen has to offer. Very quickly we had an answer: Korean food was really appreciated and Korean Fried Chicken was undoubtedly the favorite dish!<br><br>By the next summer we had found the smallest restaurant we could find in Helsingborg and after twelve days of intensive fixing and sweeping we had opened our first restaurant!<br><br>Since then, things have gone at breakneck speed and you can now find our Korean Fried Chicken in Lund, Trelleborg, Höganäs, Växjö and in Malmö. At the time of writing, we are also just opening our very first franchise outside of Helsingborg, located at Bergsgatan 15 in Malmö, welcome there!<br><br>With a small business, we have a big mission: to spread the joy of well-prepared authentic Korean food to as many people as possible. Most people don't know what Korean food tastes like, so come in and try our food and feel free to follow us on our exciting journey."
		},
		recruit: {
			heading: "Like what you see?",
			text: "Become part of the family and become an<br />employee or franchisee!",
			buttons: {
				work: "Work",
				franchisee: "Franchisee"
			}
		},
		dictionary: {
			noun: "noun",
			definition:
				'"Doori" or "Duri" is an indigenous Korean name. It is a Gyeongsang dialect word for "two", as well as a homophone of a differently-spelled standard Korean word (둘이) meaning "two people" or "a couple"'
		}
	},
	work: {
		slug: "work",
		title: "Work | Doori",
		form: {
			heading: "Become an Employee",
			name: "Name",
			email: "Email",
			phone: "Phone",
			where: "Where",
			choose: "Choose an alternative",
			cv: "CV",
			submit: "Submit"
		}
	},
	franchising: {
		slug: "franchising",
		title: "Franchising | Doori",
		form: {
			heading: "Become a Franchisee",
			name: "Name",
			email: "Email",
			phone: "Phone",
			city: "City",
			type: "Type",
			choose: "Choose an alternative",
			types: {
				restaurant: "Restaurant",
				foodTruck: "Food Truck",
				ghostKitchen: "Ghost Kitchen"
			} as { [id: string]: string },
			submit: "Submit"
		}
	}
};

export default en;
