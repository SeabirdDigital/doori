<script lang="ts">
	type DooriLocation = {
		city: string;
		openingHours: {
			monday: string;
			tuesday: string;
			wednesday: string;
			thursday: string;
			friday: string;
			saturday: string;
			sunday: string;
		};

		address: string;
		phone: string;
		foodora: string;
		maps?: string;
	};

	const locations: { [id: string]: DooriLocation } = {
		malmö: {
			city: "Malmö",
			openingHours: {
				monday: "Stängt",
				tuesday: "15:45 - 20:30",
				wednesday: "15:30 - 20:30",
				thursday: "15:30 - 20:30",
				friday: "16:00 - 21:00",
				saturday: "16:00 - 20:45",
				sunday: "15:30 - 20:30"
			},
			address: "Möllevången<br>Endast Hemleverans",
			phone: "076-167 70 50",
			foodora: "https://www.foodora.se/restaurant/vf5j/doori-malmo"
		},
		helsingborg: {
			city: "Helsingborg",
			openingHours: {
				monday: "Stängt",
				tuesday: "11:15 - 19:00",
				wednesday: "11:30 - 19:00",
				thursday: "11:15 - 20:00",
				friday: "11:15 - 20:00",
				saturday: "11:15 - 20:00",
				sunday: "Stängt"
			},
			address: "Roskildegatan 2<br>252 21 Helsingborg",
			phone: "072-249 11 98",
			foodora: "https://www.foodora.se/restaurant/pzqr/doori",
			maps: "https://goo.gl/maps/GpiwtjJ5tXuz5Qfq5"
		},
		trelleborg: {
			city: "Trelleborg",
			openingHours: {
				monday: "Stängt",
				tuesday: "11:00 - 20:45",
				wednesday: "11:00 - 20:45",
				thursday: "11:00 - 21:00",
				friday: "11:00 - 21:00",
				saturday: "11:45 - 21:00",
				sunday: "11:30 - 20:45"
			},
			address: "Centrala Trelleborg<br>Endast Hemleverans",
			phone: "041-064 40",
			foodora: "https://www.foodora.se/restaurant/vf5j/doori-malmo"
		},
		lund: {
			city: "Lund",
			openingHours: {
				monday: "11:00 - 20:45",
				tuesday: "11:00 - 20:45",
				wednesday: "11:00 - 20:45",
				thursday: "11:00 - 20:45",
				friday: "11:00 - 20:45",
				saturday: "11:30 - 20:45",
				sunday: "11:30 - 21:00"
			},
			address: "Centrala Staden<br>Endast Hemleverans",
			phone: "076-167 70 50",
			foodora: "https://www.foodora.se/restaurant/xalr/doori-lund"
		},
		växjö: {
			city: "Växjö",
			openingHours: {
				monday: "12:00 - 21:00",
				tuesday: "12:00 - 21:00",
				wednesday: "12:00 - 21:00",
				thursday: "11:30 - 21:00",
				friday: "12:00 - 20:45",
				saturday: "11:00 - 21:15",
				sunday: "11:00 - 21:00"
			},
			address: "Endast Hemleverans",
			phone: "047-02 27 55",
			foodora: "https://www.foodora.se/restaurant/hst4/doori-vaxjo"
		}
	};
</script>

<div
	class="container relative flex flex-col items-center justify-end pb-32 pt-24 sm:py-16 lg:justify-center lg:gap-24"
>
	<div class="relative hidden items-center justify-center sm:flex">
		<div class="flex rotate-6 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25">
			<img class="aspect-square h-72 object-cover" src="/kfc.jpeg" alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div class="flex -rotate-12 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25">
			<img class="aspect-square h-72 object-cover" src="/kfc.jpeg" alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div class="flex flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25">
			<img class="aspect-square h-72 object-cover" src="/kfc.jpeg" alt="" />
			<span class="py-6 font-indie text-3xl">K-bowl</span>
		</div>
	</div>

	<div class="flex flex-col gap-6">
		<div class="flex flex-col gap-4">
			<h1>
				Om Oss<span class="text-purple-500">.</span>
			</h1>
			<p class="">
				Med mitt intresse för koreansk mat startade vi vår resa 2021 från en liten men söt food
				truck och ville genom den introducera hemlagad koreansk mat som är både autentisk och
				smakrik!
				<br />
				<br />
				På Roskildegatan 2 i Helsingborg fortsätter vi att tillaga vår mest populära maträtt, Korean
				Fried Chicken. Denna, tillsammans med våra hemlagad såser och andra rätter, hav vi precis gjort
				tillgängliga genom våra virtuella kök i Malmö, Lund, Trelleborg, och Växjö så att våra kunder
				kan beställa mat online för leveranser (på foodora) och take away.
				<br />
				<br />
				En av de främsta anledningarna till att vi startade Doori var för att sprida glädje och göra
				det lätt för våra kunder att njuta av riktigt god koreansk mat. Vi fortsätter därför att expandera
				till olika delar av Skåne.
				<br />
				<br />
				Följ oss på Instagram och häng med på vår spännande resa!
			</p>
		</div>
	</div>
</div>

<div class="flex items-center gap-8 py-16">
	<div class="h-px flex-1 bg-black lg:w-12 lg:flex-none" />
	<a href="https://www.instagram.com/doori_koreanskmat/" class="hover:text-yellow-500">Instagram</a>
	<a href="https://www.facebook.com/Doorikoreanskmat/" class="hover:text-purple-500">Facebook</a>
	<div class="h-px flex-1 bg-black" />
</div>

<div
	class="container flex flex-col items-baseline justify-between gap-6 pb-16 md:flex-row md:items-center"
>
	<div>
		<h2 class="text-2xl font-bold">Gillar vad du ser?</h2>
		<p>Bli en del av familjen och bli<br />anställd eller franchisetagare!</p>
	</div>
	<div>
		<div class="flex items-center gap-6">
			<button class="h-fit border-b-2 border-black"> Jobb </button>
			<a href="/franchising">
				<button
					class="relative flex items-center gap-2 bg-black fill-background-500 px-4 py-3 text-background-500"
				>
					Franchisetagare
					<div class="-mr-2">
						<svg
							class="-rotate-90"
							xmlns="http://www.w3.org/2000/svg"
							height="22"
							viewBox="0 -960 960 960"
							width="22"
						>
							<path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
						</svg>
					</div>
				</button>
			</a>
		</div>
	</div>
</div>
