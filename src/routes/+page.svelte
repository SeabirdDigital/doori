<script lang="ts">
	import { goto } from "$lib/utils";

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
	class="container relative flex flex-row-reverse justify-end pb-32 pt-24 sm:py-16 lg:flex-row lg:justify-center lg:gap-24"
>
	<div class="sm:hidden">
		<img class="absolute -left-36 -top-12 h-44" src="/bowl1.png" alt="" />
		<img class="absolute -bottom-8 -right-8 h-36" src="/bowl2.png" alt="" />
		<img class="absolute -right-24 -top-20 h-56 rotate-12" src="/chopsticks.png" alt="" />
	</div>
	<div class="relative hidden sm:block">
		<div
			class="absolute -right-96 -top-12 flex rotate-6 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25 lg:right-0"
		>
			<img class="aspect-square h-72 object-cover" src="/kfc.jpeg" alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div
			class="absolute -right-96 -top-12 flex -rotate-12 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25 lg:right-0"
		>
			<img class="aspect-square h-72 object-cover" src="/kfc.jpeg" alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div
			class="absolute -right-96 -top-12 flex flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25 lg:relative lg:right-0"
		>
			<img class="aspect-square h-72 object-cover" src="/kfc.jpeg" alt="" />
			<span class="py-6 font-indie text-3xl">K-bowl</span>
		</div>
	</div>

	<div class="flex flex-col gap-6">
		<div class="flex flex-col gap-4">
			<h1>
				Korean fried <br /> chicken & beyond<span class="text-purple-500">.</span>
			</h1>
			<p class="hidden max-w-lg sm:block">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book.
			</p>
		</div>

		<div class="flex items-center gap-6">
			<a href="#restauranger">
				<button
					class="relative flex items-center gap-2 bg-black fill-background-500 px-4 py-3 text-background-500"
				>
					Beställ nu
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
			<button on:click={() => goto("/meny")} class="h-fit border-b-2 border-black">
				Visa Menyn
			</button>
		</div>
	</div>
</div>

<div class="flex items-center gap-8 py-12">
	<div class="h-px flex-1 bg-black lg:w-12 lg:flex-none" />
	<a href="https://www.instagram.com/doori_koreanskmat/" class="hover:text-yellow-500">Instagram</a>
	<a href="https://www.facebook.com/Doorikoreanskmat/" class="hover:text-purple-500">Facebook</a>
	<div class="h-px flex-1 bg-black" />
</div>

<div id="restauranger" class="container grid gap-8 pb-16 md:grid-cols-2">
	{#each Object.values(locations) as location}
		<div class="">
			<h3 class="mb-2 text-4xl font-bold sm:text-5xl lg:mb-4 lg:text-[6vw]">
				{location.city}
			</h3>
			<div class="text-xs text-black/60 lg:text-base xl:text-lg">
				<div>
					Mån: {location.openingHours.monday} Tis: {location.openingHours.tuesday}
				</div>
				<div>
					Ons: {location.openingHours.wednesday} Tors: {location.openingHours.thursday}
				</div>
				<div>
					Fre: {location.openingHours.friday} Lör: {location.openingHours.saturday}
				</div>
				<div>
					Sön: {location.openingHours.sunday}
				</div>
			</div>
			<div class="my-4 flex justify-between text-sm lg:justify-start">
				<div class="h-12 w-auto lg:w-64">
					{@html location.address}
				</div>
				<div>
					{location.phone}
				</div>
			</div>

			<div class="mt-6 flex gap-6">
				{#if location.maps}
					<a href={location.maps}>
						<button
							class="relative flex items-center gap-2 border-2 border-black bg-transparent fill-black px-4 py-3 text-black duration-200 hover:bg-black hover:fill-background-500 hover:text-background-500"
						>
							Hitta hit
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
				{/if}
				<a href={location.foodora}>
					<button
						class="relative flex items-center gap-2 border-2 border-black bg-transparent fill-black px-4 py-3 text-black duration-200 hover:bg-black hover:fill-background-500 hover:text-background-500"
					>
						Foodora
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
	{/each}
</div>
