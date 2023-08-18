<script lang="ts">
	import texts from "$lib/data/texts";
	import Bar from "$lib/images/bar.webp";
	import Helsingborg from "$lib/images/helsingborg.webp";
	import Van from "$lib/images/van.webp";
	import lang from "$lib/stores/lang";
	import { goto } from "$lib/utils";

	let about = texts[$lang].about;
	$: about = texts[$lang].about;
</script>

<svelte:head>
	<title>{about.title}</title>
</svelte:head>

<div
	class="container relative flex flex-col items-center justify-end gap-24 pb-32 pt-8 sm:py-16 lg:justify-center"
>
	<div class="relative hidden max-w-xl items-center justify-center sm:flex">
		<div
			class="flex aspect-[0.8] rotate-6 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square w-56 object-cover" src={Helsingborg} alt="" />
			<span class="flex flex-1 items-center font-indie text-3xl">Helsingborg</span>
		</div>
		<div
			class="flex aspect-[0.8] -rotate-12 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square w-56 object-cover" src={Van} alt="" />
			<span class="flex flex-1 items-center text-center font-indie text-3xl">Food Truck</span>
		</div>
		<div
			class="flex aspect-[0.8] flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square w-56 object-cover" src={Bar} alt="" />
			<span class="flex flex-1 items-center text-center font-indie text-3xl">Malmö</span>
		</div>
	</div>

	<div class="flex flex-col gap-6">
		<div class="flex flex-col gap-4">
			<h1>
				{@html about.main.heading}
			</h1>
			<p class="max-w-2xl">
				{@html about.main.text}
			</p>
		</div>
	</div>

	<div>
		<div class="flex items-end gap-2">
			<h3 class="text-4xl font-bold">doori</h3>
			<span class="text-3xl italic">{about.dictionary.noun}</span>
		</div>
		<span>/duːrə/</span>
		<p class="max-w-2xl">
			{about.dictionary.definition}
		</p>
	</div>
</div>

<div class="flex items-center gap-8 py-16">
	<div class="h-px flex-1 bg-brown lg:w-12 lg:flex-none" />
	<a href="https://www.instagram.com/doori_koreanskmat/" class="hover:text-yellow-500">Instagram</a>
	<a href="https://www.facebook.com/Doorikoreanskmat/" class="hover:text-purple-500">Facebook</a>
	<div class="h-px flex-1 bg-brown" />
</div>

<div
	class="container flex flex-col items-baseline justify-between gap-6 pb-16 md:flex-row md:items-center"
>
	<div>
		<h2 class="mb-2 text-3xl font-bold">
			{@html about.recruit.heading}
		</h2>
		<p>{@html about.recruit.text}</p>
	</div>
	<div>
		<div class="flex items-center gap-6">
			<a href="mailto:jobb@doori.se">
				<button class="link"> {about.recruit.buttons.work} </button>
			</a>
			<button on:click={() => goto("franchising")} class="full to-extend">
				{about.recruit.buttons.franchisee}
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
		</div>
	</div>
</div>
