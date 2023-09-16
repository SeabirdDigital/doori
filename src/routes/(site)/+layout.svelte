<script lang="ts">
	import { invalidate } from "$app/navigation";
	import { page } from "$app/stores";
	import Header from "$lib/components/layout/Header.svelte";
	import pages from "$lib/components/pages";
	import LogoWhite from "$lib/images/logo_white.png";
	import lang from "$lib/stores/lang";
	import menuOpen from "$lib/stores/menuOpen";
	import { pageId } from "$lib/stores/page";
	import transitionOn from "$lib/stores/transitionOn";
	import "@fontsource/indie-flower";
	import "@fontsource/quicksand/500.css";
	import "@fontsource/quicksand/700.css";
	import "@fontsource/space-mono/400.css";
	import "@fontsource/space-mono/700.css";
	import { onMount } from "svelte";
	import "../../app.css";

	export let data;

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
			<img class="mb-6 h-10" src={LogoWhite} alt="" />
			<span class="sm:text-lg">Korean fried chicken & beyond</span>
		</div>
	</div>

	<Header layoutData={data.layoutData} />

	<main>
		{#if $pageId}
			<svelte:component
				this={pages[$pageId]}
				pageData={data.pageData}
				menuData={data.menuData}
				layoutData={data.layoutData}
				lang={data.lang}
			/>
		{/if}
		<slot />
	</main>

	<footer class="flex justify-center bg-brown py-4 text-center text-white">
		Copyright 2023 &copy; {data.layoutData.copyright}
	</footer>
</div>
