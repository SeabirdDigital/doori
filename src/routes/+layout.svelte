<script lang="ts">
	import { page } from "$app/stores";
	import Dialog from "$lib/components/Dialog/Dialog.svelte";
	import NavItems from "$lib/components/NavItems.svelte";
	import Header from "$lib/components/layout/Header.svelte";
	import pages from "$lib/components/pages";
	import locations, { locationsArray } from "$lib/data/locations";
	import texts from "$lib/data/texts";
	import type { LanguageId } from "$lib/data/types/texts";
	import Logo from "$lib/images/logo.webp";
	import { currentLatLng } from "$lib/stores/currentLatLng";
	import { ipInfo } from "$lib/stores/ipInfo";
	import lang from "$lib/stores/lang";
	import selectedLocation, { locationsInOrder, newSelectedLocation } from "$lib/stores/locations";
	import menuOpen from "$lib/stores/menuOpen";
	import pageId from "$lib/stores/pageId";
	import transitionOn from "$lib/stores/transitionOn";
	import { goto, latLng2LngLat, sortLocations } from "$lib/utils";
	import "@fontsource/indie-flower";
	import "@fontsource/quicksand/500.css";
	import "@fontsource/quicksand/700.css";
	import "@fontsource/space-mono/400.css";
	import "@fontsource/space-mono/700.css";
	import { json } from "@sveltejs/kit";
	import { SvelteComponent, onMount } from "svelte";
	import "../app.css";

	export let data;

	lang.set(data.lang as LanguageId);
	ipInfo.set(data.ipInfo);

	currentLatLng.set($ipInfo?.loc.split(",").map((x) => parseFloat(x)) as [number, number]);
	locationsInOrder.set(sortLocations(locationsArray, $currentLatLng));
	selectedLocation.set($locationsInOrder[0].id);
	pageId.set(data.id);

	onMount(() => {
		menuOpen.subscribe((value) => {
			if (value) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		});
	});
</script>

<div class="overflow-x-hidden">
	<div
		class="fixed left-0 z-50 flex w-full items-center justify-center bg-black text-white duration-500 {$transitionOn
			? 'top-0 h-full'
			: 'bottom-0 h-0'}"
	>
		<div
			class="flex flex-col items-center justify-center duration-300 {$transitionOn
				? 'opacity-100'
				: 'opacity-0'}"
		>
			<img class="-mb-6 h-32" src={Logo} alt="" />
			<span class="sm:text-lg">Korean fried chicken & beyond</span>
		</div>
	</div>

	<Header />

	<main>
		{#if $pageId}
			<svelte:component this={pages[$pageId]} />
		{/if}
		<slot />
	</main>

	<footer class="flex justify-center bg-brown py-4 text-center text-white">
		Copyright 2023 &copy; {texts[$lang].layout.copyright}
	</footer>
</div>
