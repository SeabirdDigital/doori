<script lang="ts">
	import { menuOpen } from "$lib/stores/menuOpen";
	import { transitionOn } from "$lib/stores/transitionOn";
	import { goto } from "$lib/utils";
	import "@fontsource/indie-flower";
	import "@fontsource/space-mono/400.css";
	import "@fontsource/space-mono/700.css";
	import { onMount } from "svelte";
	import "../app.css";

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

<div
	class="fixed left-0 z-50 w-full bg-yellow-500 duration-500 {$transitionOn
		? 'top-0 h-full'
		: 'bottom-0 h-0'}"
/>

<div class="overflow-x-hidden">
	<div class="container flex justify-between py-8">
		<button on:click={() => goto("/")}>
			<img class="h-12" src="/logo_w_bg.png" alt="" />
		</button>

		<nav class="hidden items-center justify-center gap-10 md:flex">
			<button on:click={() => goto("/meny")}>Meny</button>
			<button on:click={() => goto("/om-oss")}>Om oss</button>
			<button on:click={() => goto("/#restauranger")}>Restauranger</button>
			<button on:click={() => goto("/franchising")}>Franchising</button>
		</nav>

		<label id="menuOpen" class="flex cursor-pointer items-center md:hidden">
			<input
				type="checkbox"
				class="h-0 w-0 opacity-0"
				checked={$menuOpen}
				on:change={(e) => menuOpen.set(!!e.currentTarget?.value ?? $menuOpen)}
			/>
			<img class="h-6" src="/Menu.svg" alt="" />
		</label>

		<div
			id="menu"
			class="fixed left-0 z-40 h-screen w-screen flex-col items-center justify-center gap-4 bg-black text-2xl text-background-500 duration-500 {$menuOpen
				? 'top-0'
				: '-top-full'}"
		>
			<button
				class="absolute right-12 top-12"
				on:click={() => {
					menuOpen.set(false);
					console.log("click", $menuOpen);
				}}
			>
				<img class="h-6" src="/CloseMenu.svg" alt="" />
			</button>
			<button on:click={() => goto("/meny")}>Meny</button>
			<button on:click={() => goto("/om-oss")}>Om oss</button>
			<button on:click={() => goto("/#restauranger")}>Restauranger</button>
			<button on:click={() => goto("/franchising")}>Franchising</button>
		</div>
	</div>

	<slot />

	<footer class="flex justify-center bg-black py-4 text-center text-background-500">
		Copyright 2023 &copy; Seabird Digital UD. Alla rättigheter förbehållna.
	</footer>
</div>

<style>
	#menuOpen:has(> input:checked) + #menu {
		display: flex;
	}
</style>
