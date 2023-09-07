<script lang="ts">
	import { locationsArray } from "$lib/data/locations";
	import texts from "$lib/data/texts";
	import Bowl1 from "$lib/images/bowl1.webp";
	import Bowl2 from "$lib/images/bowl2.webp";
	import chikinmayo from "$lib/images/chikinmayo.webp";
	import Chopsticks from "$lib/images/chopsticks.webp";
	import Double from "$lib/images/double.webp";
	import DumpNKFC from "$lib/images/dumpnkfc.webp";
	import egg from "$lib/images/egg.webp";
	import KFC from "$lib/images/kfc.webp";
	import lang from "$lib/stores/lang";
	import { goto } from "$lib/utils";
	import { onMount } from "svelte";

	let layout = texts[$lang].layout;
	$: layout = texts[$lang].layout;

	let home = texts[$lang].home;
	$: home = texts[$lang].home;

	const lArray = locationsArray.sort((l) => {
		return l.id == "helsingborg" || l.id == "malmö" ? -1 : 1;
	});

	let numberOfPictureSets = 2;

	onMount(() => {
		numberOfPictureSets = Math.ceil(window.innerWidth / 1040);
	});
</script>

<svelte:head>
	<title>{home.title}</title>
</svelte:head>

<div
	class="container relative flex flex-row-reverse justify-end pb-32 pt-24 sm:pb-16 sm:pt-16 lg:flex-row lg:justify-center lg:gap-24 lg:pt-8"
>
	<div class="sm:hidden">
		<img class="absolute -left-36 -top-12 h-44" src={Bowl1} alt="" />
		<img class="absolute -bottom-8 -right-8 h-36" src={Bowl2} alt="" />
		<img class="absolute -right-24 -top-20 h-56 rotate-12" src={Chopsticks} alt="" />
	</div>
	<div class="relative hidden sm:block">
		<div
			class="absolute -right-96 -top-20 flex rotate-6 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25 lg:right-0 lg:top-0"
		>
			<img class="aspect-square h-72 object-cover" src={KFC} alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div
			class="absolute -right-96 -top-20 flex -rotate-12 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25 lg:right-0 lg:top-0"
		>
			<img class="aspect-square h-72 object-cover" src={KFC} alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div
			class="absolute -right-96 -top-20 flex flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25 lg:relative lg:right-0 lg:top-0"
		>
			<img class="aspect-square h-72 object-cover" src={Double} alt="" />
			<span class="py-6 font-indie text-3xl">K-bowl + Chikinmayo</span>
		</div>
	</div>

	<div class="flex flex-col justify-center gap-6">
		<div class="flex flex-col gap-4">
			<h1 class="text-5xl">
				{@html home.hero.heading}
			</h1>
			<p class="max-w-lg">
				{@html home.hero.text}
			</p>
		</div>

		<div class="flex items-center gap-6">
			<a href="https://qopla.com/restaurant/doori/qDQjQjbxQE/order">
				<button class="full to-extend">
					{home.hero.buttons.order}
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
			<button on:click={() => goto("menu")} class="link"> {home.hero.buttons.menu}</button>
		</div>
	</div>
</div>

<div class="flex items-center gap-8 py-12">
	<div class="h-px flex-1 bg-brown lg:w-12 lg:flex-none" />
	<a href="https://www.instagram.com/doori_koreanskmat/" class="hover:text-yellow-500">Instagram</a>
	<a href="https://www.facebook.com/Doorikoreanskmat/" class="hover:text-purple-500">Facebook</a>
	<div class="h-px flex-1 bg-brown" />
</div>

<div
	class="container relative flex flex-row-reverse items-center justify-end pb-32 pt-16 sm:py-16 lg:flex-row lg:justify-center lg:gap-8"
>
	<div class="flex flex-col gap-6 lg:w-1/2">
		<div class="flex flex-col gap-4">
			<h2 class="text-4xl font-bold">
				{@html home.sauce.heading}
			</h2>
			<p class="hidden max-w-md sm:block">
				{@html home.sauce.text}
			</p>

			{#each home.sauce.sauces as sauce}
				<h4 class="text-2xl font-bold">{sauce.name}</h4>
				<p class="lg:max-w-lg">{sauce.description}</p>
			{/each}
		</div>
	</div>

	<div class="relative hidden lg:block">
		<div
			class="absolute right-0 flex rotate-6 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square h-72 object-cover" src={KFC} alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div
			class="absolute right-0 flex -rotate-12 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square h-72 object-cover" src={KFC} alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div
			class="relative right-0 flex flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square h-72 object-cover" src={KFC} alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
	</div>
</div>

<div class="container mb-24 mt-16 hidden justify-center sm:flex">
	<div class="relative flex max-w-4xl items-center justify-center">
		<div
			class="flex aspect-[0.8] rotate-6 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square w-56 object-cover" src={KFC} alt="" />
			<span class="flex flex-1 items-center font-indie text-3xl">K-bowl</span>
		</div>
		<div
			class="flex aspect-[0.8] -rotate-12 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square w-56 object-cover" src={chikinmayo} alt="" />
			<span class="flex flex-1 items-center text-center font-indie text-3xl">Chikinmayo</span>
		</div>
		<div
			class="hidden aspect-[0.8] flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25 md:flex"
		>
			<img class="aspect-square w-56 object-cover" src={DumpNKFC} alt="" />
			<span class="flex flex-1 items-center text-center font-indie text-3xl">Dumplings</span>
		</div>
		<div
			class="flex aspect-[0.8] rotate-[8deg] flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square w-56 object-cover" src={egg} alt="" />
			<span class="flex flex-1 items-center text-center font-indie text-3xl">Bibimbap</span>
		</div>
	</div>
</div>

<div id={home.restaurants.toLowerCase()} class="container grid gap-8 pb-16 md:grid-cols-2">
	{#each lArray as location}
		<div class="">
			<h3 class="mb-2 text-4xl font-bold lg:mb-4">
				{location.city}
			</h3>
			<div class="text-xs text-black/60 lg:text-base xl:text-lg">
				<div>
					{layout.restaurants.weekdays.mon}: {location.openingHours.monday ??
						layout.restaurants.closed}
					{layout.restaurants.weekdays.tue}: {location.openingHours.tuesday ??
						layout.restaurants.closed}
				</div>
				<div>
					{layout.restaurants.weekdays.wed}: {location.openingHours.wednesday ??
						layout.restaurants.closed}
					{layout.restaurants.weekdays.thu}: {location.openingHours.thursday ??
						layout.restaurants.closed}
				</div>
				<div>
					{layout.restaurants.weekdays.fri}: {location.openingHours.friday ??
						layout.restaurants.closed}
					{layout.restaurants.weekdays.sat}: {location.openingHours.saturday ??
						layout.restaurants.closed}
				</div>
				<div>
					{layout.restaurants.weekdays.sun}: {location.openingHours.sunday ??
						layout.restaurants.closed}
				</div>
			</div>
			<div class="my-4 flex justify-between text-sm lg:justify-start">
				<div class="h-12 w-auto lg:w-64">
					{@html location.address}
					<span>{location.onlyDelivery ? layout.restaurants.onlyDelivery : ""}</span>
				</div>
				<div>
					{location.phone}
				</div>
			</div>

			<div class="mt-6 flex gap-6">
				{#if location.maps}
					<a href={location.maps}>
						<button class="borders to-full">
							{layout.restaurants.find}
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
				<a href={location.order}>
					<button class="borders to-full">
						{location.order.includes("foodora") ? "Foodora" : home.hero.buttons.order}
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
				{#if location.reservation}
					<a href={location.reservation}>
						<button class="borders to-full">
							{layout.restaurants.reserve}
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
			</div>
		</div>
	{/each}
</div>
