<script lang="ts">
	import NavItems from "$lib/components/NavItems.svelte";
	import { lang } from "$lib/stores/lang";
	import { menuOpen } from "$lib/stores/menuOpen";
	import { transitionOn } from "$lib/stores/transitionOn";
	import texts, { langs } from "$lib/texts";
	import { goto } from "$lib/utils";
	import "@fontsource/indie-flower";
	import "@fontsource/space-mono/400.css";
	import "@fontsource/space-mono/700.css";
	import { onMount } from "svelte";
	import "../app.css";

	export let data;
	let dialog: HTMLDialogElement;

	lang.set(data.lang);

	onMount(() => {
		transitionOn.set(false);

		menuOpen.subscribe((value) => {
			if (value) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		});
	});
</script>

<dialog class="border-2 border-black outline-none" bind:this={dialog} />

<div
	class="fixed left-0 z-50 w-full bg-yellow-500 duration-500 {$transitionOn
		? 'top-0 h-full'
		: 'bottom-0 h-0'}"
/>

<header class="overflow-x-hidden">
	<div class="container flex justify-between py-8">
		<button on:click={() => goto("/")}>
			<img class="h-12" src="/logo_w_bg.png" alt="" />
		</button>

		<nav class="flex items-center">
			<ul class="hidden items-center justify-center gap-10 md:flex">
				<NavItems />
			</ul>
		</nav>

		<div class="md:hidden">
			<label id="menuOpen" class="relative flex aspect-square h-12 cursor-pointer items-center">
				<input
					type="checkbox"
					class="h-0 w-0 opacity-0"
					checked={$menuOpen}
					on:change={(e) => menuOpen.set(!!e.currentTarget?.checked ?? !$menuOpen)}
				/>

				<svg
					class="absolute z-[45] h-2 duration-500 {$menuOpen
						? 'mb-0 mr-0 -rotate-[50deg] fill-background-500 '
						: 'mb-3 mr-1 -rotate-[25deg] fill-black'}"
					viewBox="0 0 177 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M175.469 31.1465L172.356 1.3493L144.384 2.24472L147.266 28.6552L175.469 31.1465Z"
					/>
					<path
						d="M1.36517 6.8229L2.38282 15.8565L137.865 27.8247L134.295 2.56766L1.36517 6.8229Z"
					/>
				</svg>
				<svg
					class="absolute z-[45] h-2 duration-500 {$menuOpen
						? 'ml-0 mt-0 rotate-[35deg] fill-background-500'
						: 'ml-1 mt-3 -rotate-[12deg] fill-black'}"
					viewBox="0 0 177 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M175.469 31.1465L172.356 1.3493L144.384 2.24472L147.266 28.6552L175.469 31.1465Z"
					/>
					<path
						d="M1.36517 6.8229L2.38282 15.8565L137.865 27.8247L134.295 2.56766L1.36517 6.8229Z"
					/>
				</svg>
			</label>

			<nav>
				<ul
					id="menu"
					class="fixed left-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-black text-2xl text-background-500 duration-500 {$menuOpen
						? 'top-0'
						: '-top-[calc(100%+6rem)]'}"
				>
					<NavItems />
				</ul>
			</nav>
		</div>
	</div>

	<main>
		<slot />
	</main>

	<footer class="flex justify-center bg-black py-4 text-center text-background-500">
		Copyright 2023 &copy; {texts[$lang].layout.copyright}
	</footer>
</header>

<style>
	#menuOpen:has(> input:checked) + nav > #menu {
		display: flex;
	}
</style>
