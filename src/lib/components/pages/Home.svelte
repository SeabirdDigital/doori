<script lang="ts">
	import locations, { locationsArray } from "$lib/data/locations";
	import texts from "$lib/data/texts";
	import Bar from "$lib/images/Bar.webp";
	import Bowl1 from "$lib/images/Bowl1.webp";
	import Bowl2 from "$lib/images/Bowl2.webp";
	import Chicken from "$lib/images/Chicken.webp";
	import Chopsticks from "$lib/images/Chopsticks.webp";
	import Dump from "$lib/images/Dump.webp";
	import Egg from "$lib/images/Egg.webp";
	import Film from "$lib/images/Film.svg";
	import Rice from "$lib/images/Rice.webp";
	import Stars from "$lib/images/Stars.svg";
	import KFC from "$lib/images/kfc.webp";
	import lang from "$lib/stores/lang";
	import selectedLocation from "$lib/stores/locations";
	import { goto } from "$lib/utils";

	let layout = texts[$lang].layout;
	$: layout = texts[$lang].layout;

	let home = texts[$lang].home;
	$: home = texts[$lang].home;
</script>

<svelte:head>
	<title>{home.title}</title>
</svelte:head>

<div
	class="container relative flex flex-row-reverse justify-end pb-32 pt-24 sm:py-16 lg:flex-row lg:justify-center lg:gap-24"
>
	<div class="sm:hidden">
		<img class="absolute -left-36 -top-12 h-44" src={Bowl1} alt="" />
		<img class="absolute -bottom-8 -right-8 h-36" src={Bowl2} alt="" />
		<img class="absolute -right-24 -top-20 h-56 rotate-12" src={Chopsticks} alt="" />
	</div>
	<div class="relative hidden sm:block">
		<div
			class="absolute -right-28 -top-24 left-auto z-20 aspect-[116/152] h-20 -rotate-3 lg:-left-4 lg:-top-20 lg:right-auto"
		>
			<img class="aspect-[116/152] h-20" src={Stars} alt="" />
		</div>
		<div
			class="absolute -right-96 -top-12 flex rotate-6 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25 lg:right-0"
		>
			<img class="aspect-square h-72 object-cover" src={KFC} alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div
			class="absolute -right-96 -top-12 flex -rotate-12 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25 lg:right-0"
		>
			<img class="aspect-square h-72 object-cover" src={KFC} alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div
			class="absolute -right-96 -top-12 flex flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25 lg:relative lg:right-0"
		>
			<img class="aspect-square h-72 object-cover" src={KFC} alt="" />
			<span class="py-6 font-indie text-3xl">K-bowl</span>
		</div>
	</div>

	<div class="flex flex-col gap-6">
		<div class="flex flex-col gap-4">
			<h1>
				{@html home.hero.heading}<span class="text-purple-500">.</span>
			</h1>
			<p class="hidden max-w-lg sm:block">
				{@html home.hero.text}
			</p>
		</div>

		<div class="flex items-center gap-6">
			<a href={locations[$selectedLocation].foodora}>
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

<div>
	<div class="mt-24 flex flex-col items-center">
		<div class="z-20 -mb-4 rotate-1 bg-yellow-100 px-4 py-3 text-2xl">
			<h2 class="font-indie leading-none">{home.favourites}</h2>
		</div>
	</div>
	<div
		class="flex h-48 -rotate-1 scale-110 gap-4 bg-contain bg-repeat-x py-6"
		style="background-image: url({Film});"
	>
		<div
			class="aspect-[4/3] h-full rounded-md bg-cover"
			style="background-image: url({Chicken});"
			title="Korean Fried Chicken"
		/>
		<div
			class="aspect-[4/3] h-full rounded-md bg-cover"
			style="background-image: url({Dump});"
			title="Dumplings"
		/>
		<div
			class="aspect-[4/3] h-full rounded-md bg-cover"
			style="background-image: url({Egg});"
			title="Bibimbap"
		/>
		<div
			class="aspect-[4/3] h-full rounded-md bg-cover"
			style="background-image: url({KFC});"
			title="Korean Fried Chicken"
		/>
		<div
			class="aspect-[4/3] h-full rounded-md bg-cover"
			style="background-image: url({Rice});"
			title="Chikinmayo"
		/>
		<div
			class="aspect-[4/3] h-full rounded-md bg-cover"
			style="background-image: url({Chicken});"
			title="Korean Fried Chicken"
		/>
		<div
			class="aspect-[4/3] h-full rounded-md bg-cover"
			style="background-image: url({Dump});"
			title="Dumplings"
		/>
	</div>
</div>

<div class="container bg-yellow-100/25 pb-12 pt-16 sm:pb-24 sm:pt-28">
	<div class="flex items-center justify-center gap-20">
		<div class="hidden sm:block">
			<div
				class="flex aspect-[0.8] w-60 rotate-6 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
			>
				<img class="aspect-square w-full object-cover" src={Bar} alt="" />
				<span class="flex flex-1 items-center font-indie text-3xl">Malmö</span>
			</div>
		</div>
		<div class="flex flex-col gap-6">
			<div>
				<h3 class="mb-2 text-4xl font-bold">{@html home.newsArticle.heading}</h3>
				<p class="max-w-md">
					{@html home.newsArticle.text}
				</p>
			</div>

			<div>
				<a href="https://www.instagram.com/doori_koreanskmat/">
					<button class="link">{home.newsArticle.learnMore}</button>
				</a>
			</div>
		</div>
	</div>
</div>

<div class="flex gap-2 whitespace-nowrap bg-black py-3 text-2xl text-white">
	<span class="relative block" id="first-kfc">Korean fried chicken & beyond </span> ✨
	<span class="relative block">Korean fried chicken & beyond </span> ✨
	<span class="relative block">Korean fried chicken & beyond </span> ✨
	<span class="relative block">Korean fried chicken & beyond </span> ✨
	<span class="relative block">Korean fried chicken & beyond </span> ✨
</div>

<div class="container grid gap-8 py-16 md:grid-cols-2">
	{#each locationsArray as location}
		<div class="">
			<h3 class="mb-2 text-4xl font-bold sm:text-5xl lg:mb-4 lg:text-[6vw]">
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
					<button class="borders to-full">
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

<div class="" />

<style>
	@keyframes kfcRoll {
		0% {
			margin-left: 0;
		}
		100% {
			margin-left: -474px;
		}
	}

	#first-kfc {
		animation: kfcRoll 10s linear infinite;
	}
</style>
