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
			},
			find: "Hitta hit",
			reserve: "Boka bord"
		},
		copyright: "Doo-Ri AB. Alla rättigheter förbehållna."
	},
	home: {
		slug: "/",
		title: "Doori | Korean fried chicken & beyond",
		hero: {
			heading: "KOREAN<br>FRIED<br>CHICKEN<br>& beyond",
			text: "",
			buttons: { order: "Beställ nu", menu: "Visa meny" }
		},
		sauce: {
			heading: "Såser",
			text: "Korean fried chicken med valfri hemmagjord sås:",
			sauces: [
				{
					name: "Go sås",
					description:
						"Denna sås är vår mest populära sås och är en förkortning för Gochujang-sås. Go såsen är baserat på chili paste från Korea och trots färgen är den inte så stark."
				},
				{
					name: "So sås",
					description:
						"Grunden för So såsen är vitlökssoja. Denna sås är populär bland de som gillar mildare smak."
				},
				{
					name: "He sås",
					description:
						"He såsen är en starkare version av Go såsen för de som uppskattar starkare mat."
				}
			]
		},
		restaurants: "Restauranger"
	},
	menu: {
		slug: "meny",
		title: "Meny | Doori",
		heading: "Meny",
		menu: [
			{
				name: "",
				items: [
					{
						name: "Korean Fried Chicken",
						longName: true,
						description:
							"Dooris friterade kyckling med valfri hemlagad sås, serverad med ris och picklad rättika."
					},
					{
						name: "Friterade dumplings",
						longName: true,
						description: "Med cream cheese, crab sticks och sweet chili sås."
					},
					{
						name: "Chikinmayo",
						description:
							"Korean Fried Chicken med ris och scramble ägg, toppad med so sås, teriyakisås och majonnäs. Blanda innan du äter så smakar det bättre."
					},
					{
						name: "Bibimbap",
						description:
							"Bibimbap är ris som serveras i en skål täckt med kryddade grönsaker, nötkött och toppad med ägg sunny side up. Dooris gochujangsås är serverad vid sidan om."
					}
				]
			},
			{
				name: "Tillbehör",
				items: [
					{
						name: "Picklad rättika",
						longName: true,
						description: ""
					},
					{
						name: "Hemmagjord Kimchi",
						description: ""
					},
					{
						name: "Go sås",
						description:
							"Denna sås är vår mest populära sås och är en förkortning för Gochujang-sås. Go såsen är baserat på chili paste från Korea och trots färgen är den inte så stark."
					},
					{
						name: "So sås",
						description:
							"Grunden för So såsen är vitlökssoja. Denna sås är populär bland de som gillar mildare smak."
					},
					{
						name: "He sås",
						description:
							"He såsen är en starkare version av Go såsen för de som uppskattar starkare mat."
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
			text: "Allt började 2021 när jag och en kompis bestämde oss för att testa på att hyra en liten food truck över sommaren. Vi körde Skåne runt för att visa vad det koreanska köket har att erbjuda. Väldigt snabbt fick vi ett svar: koreansk mat var riktigt uppskattad och Korean Fried Chicken var utan tvekan favoriträtten!<br><br>Till nästa sommar hade vi hittat den minsta restaurangen vi kunde hitta i Helsingborg och efter tolv dagar av intensivt fixande och fejande hade vi öppnat vår första restaurang!<br><br>Sedan dess har allt gått i en rasande fart och utöver Helsingborg kan man nu hitta vår Korean Fried Chicken i Lund, Trelleborg, Växjö och i Malmö.<br><br>Med en liten verksamhet har vi ett stort uppdrag: att sprida glädjen av vällagad autentisk koreansk mat till så många som möjligt. De flesta vet inte hur koreansk mat smakar så kom in och prova vår mat och följ oss gärna på vår spännande resa."
		},
		recruit: {
			heading: "Gillar du vad du ser?",
			text: "Bli en del av familjen och bli<br />anställd eller franchisetagare!",
			buttons: {
				work: "Jobb",
				franchisee: "Franchisetagare"
			}
		},
		dictionary: {
			noun: "noun",
			definition:
				'"Doori" eller "Duri" är ett inhemskt koreanskt namn. Det är ett Gyeongsang-dialektord för "två", såväl som en homofon av ett koreanskt standardord (둘이) som betyder "två personer" eller "ett par"'
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
