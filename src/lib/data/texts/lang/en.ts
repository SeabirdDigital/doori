import type { Menu } from "$lib/data/types/texts";

const menu: Menu = [
	{
		name: "Lunch",
		items: [
			{
				name: "K-bowl",
				longName: true,
				description:
					"Doori's fried chicken with your choice of homemade sauce, served with rice and pickled radish.",
				price: 139
			},
			{
				name: "Fried dumplings",
				longName: true,
				description: "With cream cheese, crab sticks and sweet chili sauce.",
				price: 59
			},
			{
				name: "Chikinmayo",
				description:
					"Korean Fried Chicken with rice and scrambled eggs, topped with soy sauce, teriyaki sauce and mayonnaise. Mix before eating to make it taste better.",
				price: 139
			},
			{
				name: "Bibimbap",
				description:
					"Bibimbap is rice served in a bowl covered with seasoned vegetables, beef and topped with egg sunny side up. Doori's gochujang sauce is served on the side.",
				price: 149
			}
		]
	},
	{
		name: "Extras",
		items: [
			{
				name: "Pickled radish",
				longName: true,
				description: "",
				price: 29
			},
			{
				name: "Kimchi",
				description: "",
				price: 59
			},
			{
				name: "Go sauce",
				description:
					"This sauce is our most popular sauce and is short for Gochujang sauce. The Go sauce is based on chili paste from Korea and despite the color it is not that strong.",
				price: 20
			},
			{
				name: "So sauce",
				description:
					"The basis of the So sauce is garlic soy. This sauce is popular with those who like a milder taste.",
				price: 20
			},
			{
				name: "He sauce",
				description:
					"The He sauce is a stronger version of the Go sauce for those who appreciate stronger food.",
				price: 20
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
			heading: "Korean fried<br>chicken & beyond",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			buttons: { order: "Order Now", menu: "See Menu" }
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
			text: "With my interest in Korean food, we started our journey in 2021 from a small but cute food truck and wanted to introduce through it homemade Korean food that is both authentic and tasty!<br><br>At Roskildegatan 2 in Helsingborg, we continue to prepare our most popular dish, Korean Fried Chicken. This, together with our homemade sauces and other dishes, we have just made available through our virtual kitchens in Malmö, Lund, Trelleborg, and Växjö so that our customers can order food online for deliveries (on foodora) and take away.<br><br>One of the main reasons we started Doori was to spread joy and make it easy for our customers to enjoy really good Korean food. We therefore continue to expand to different parts of Skåne.<br><br>Follow us on Instagram and join us on our exciting journey!"
		},
		recruit: {
			heading: "Like what you see",
			text: "Become part of the family and become an<br />employee or franchisee!",
			buttons: {
				work: "Work",
				franchisee: "Franchisee"
			}
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
