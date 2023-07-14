<script lang="ts">
	import texts from "$lib/data/texts";
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
			<img class="aspect-square w-full object-cover" src="/kfc.webp" alt="" />
			<span class="flex flex-1 items-center font-indie text-3xl">K-bowl</span>
		</div>
		<div
			class="flex aspect-[0.8] -rotate-12 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square w-full object-cover" src="/kfc.webp" alt="" />
			<span class="flex flex-1 items-center font-indie text-3xl">K-bowl</span>
		</div>
		<div
			class="flex aspect-[0.8] flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square w-full object-cover" src="/kfc.webp" alt="" />
			<span class="flex flex-1 items-center font-indie text-3xl">K-bowl</span>
		</div>
	</div>

	<div class="flex flex-col gap-6">
		<div class="flex flex-col gap-4">
			<h1>
				{@html about.main.heading}<span class="text-purple-500">.</span>
			</h1>
			<p class="">
				{@html about.main.text}
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
		<h2 class="mb-2 text-3xl font-bold">
			{@html about.recruit.heading}<span class="text-yellow-500">?</span>
		</h2>
		<p>{@html about.recruit.text}</p>
	</div>
	<div>
		<div class="flex items-center gap-6">
			<button class="h-fit border-b-2 border-black"> {about.recruit.buttons.work} </button>
			<button
				on:click={() => goto("franchising")}
				class="relative flex items-center gap-2 bg-black fill-background-500 px-4 py-3 text-background-500"
			>
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
