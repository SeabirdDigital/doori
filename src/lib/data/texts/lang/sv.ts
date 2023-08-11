import type { Texts } from "$lib/data/types/texts";

const sv: Texts = {
	layout: {
		banner: {
			chosen: "Vald"
		},
		nav: {
			menu: "Meny",
			about: "Om oss",
			franchising: "Franchising",
			language: "Språk"
		},
		restaurants: {
			closed: "Stängt",
			onlyDelivery: "Endast hemleverans",
			weekdays: {
				mon: "Mån",
				tue: "Tis",
				wed: "Ons",
				thu: "Tor",
				fri: "Fre",
				sat: "Lör",
				sun: "Sön"
			}
		},
		copyright: "Doo-Ri AB. Alla rättigheter förbehållna."
	},
	home: {
		slug: "/",
		title: "Doori | Korean fried chicken & beyond",
		hero: {
			heading: "Korean fried<br>chicken & beyond",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			buttons: { order: "Beställ nu", menu: "Visa meny" }
		},
		restaurants: "Restauranger"
	},
	menu: {
		slug: "meny",
		title: "Meny | Doori",
		heading: "Meny",
		menu: [
			{
				name: "Lunch",
				items: [
					{
						name: "K-bowl",
						longName: true,
						description:
							"Dooris friterade kyckling med valfri hemlagad sås, serverad med ris och picklad rättika.",
						price: 139
					},
					{
						name: "Friterade dumplings",
						longName: true,
						description: "Med cream cheese, crab sticks och sweet chili sås.",
						price: 59
					},
					{
						name: "Chikinmayo",
						description:
							"Korean Fried Chicken med ris och scramble ägg, toppad med so sås, teriyakisås och majonnäs. Blanda innan du äter så smakar det bättre.",
						price: 139
					},
					{
						name: "Bibimbap",
						description:
							"Bibimbap är ris som serveras i en skål täckt med kryddade grönsaker, nötkött och toppad med ägg sunny side up. Dooris gochujangsås är serverad vid sidan om.",
						price: 149
					}
				]
			},
			{
				name: "Tillbehör",
				items: [
					{
						name: "Picklad rättika",
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
						name: "Go sås",
						description:
							"Denna sås är vår mest populära sås och är en förkortning för Gochujang-sås. Go såsen är baserat på chili paste från Korea och trots färgen är den inte så stark.",
						price: 20
					},
					{
						name: "So sås",
						description:
							"Grunden för So såsen är vitlökssoja. Denna sås är populär bland de som gillar mildare smak.",
						price: 20
					},
					{
						name: "He sås",
						description:
							"He såsen är en starkare version av Go såsen för de som uppskattar starkare mat.",
						price: 20
					}
				]
			}
		]
	},
	about: {
		slug: "om-oss",
		title: "Om Oss | Doori",
		main: {
			heading: "Om oss",
			text: "Med mitt intresse för koreansk mat startade vi vår resa 2021 från en liten men söt food truck och ville genom den introducera hemlagad koreansk mat som är både autentisk och smakrik!<br><br>På Roskildegatan 2 i Helsingborg fortsätter vi att tillaga vår mest populära maträtt, Korean Fried Chicken. Denna, tillsammans med våra hemlagad såser och andra rätter, hav vi precis gjort tillgängliga genom våra virtuella kök i Malmö, Lund, Trelleborg, och Växjö så att våra kunder kan beställa mat online för leveranser (på foodora) och take away.<br><br>En av de främsta anledningarna till att vi startade Doori var för att sprida glädje och göra det lätt för våra kunder att njuta av riktigt god koreansk mat. Vi fortsätter därför att expandera till olika delar av Skåne.<br><br>Följ oss på Instagram och häng med på vår spännande resa!"
		},
		recruit: {
			heading: "Gillar du vad du ser",
			text: "Bli en del av familjen och bli<br />anställd eller franchisetagare!",
			buttons: {
				work: "Jobb",
				franchisee: "Franchisetagare"
			}
		}
	},
	work: {
		slug: "jobb",
		title: "Jobb | Doori",
		form: {
			heading: "Ansök",
			name: "Namn",
			email: "Email",
			phone: "Telefon",
			where: "Var vill du jobba?",
			choose: "Välj ett alternativ",
			cv: "CV",
			submit: "Skicka"
		}
	},
	franchising: {
		slug: "franchising",
		title: "Franchising | Doori",
		form: {
			heading: "Bli franchisetagare",
			name: "Namn",
			email: "Email",
			phone: "Telefon",
			city: "Stad",
			type: "Typ",
			choose: "Välj ett alternativ",
			types: {
				restaurant: "Restaurang",
				foodTruck: "Food Truck",
				ghostKitchen: "Ghost Kitchen"
			},
			submit: "Skicka"
		}
	}
};

export default sv;
