<script lang="ts">
	import "@fontsource/indie-flower";
	import "@fontsource/space-mono/400.css";
	import "@fontsource/space-mono/700.css";
	import "../app.css";

	const closeMenu = () => {
		(<HTMLInputElement>(
			(<HTMLDivElement>document.getElementById("menuOpen")).firstElementChild
		)).checked = false;
	};
</script>

<div class="overflow-x-hidden">
	<div class="container flex grid-cols-[10%,80%,10%] justify-between py-8 lg:grid">
		<a href="/">
			<img class="h-12" src="/logo_w_bg.png" alt="" />
		</a>

		<nav class="hidden items-center justify-center gap-10 md:flex">
			<a href="/meny">Meny</a>
			<a href="/om-oss">Om oss</a>
			<a href="/#restauranger">Restauranger</a>
			<a href="/franchising">Franchising</a>
		</nav>

		<div class="hidden justify-end lg:flex">{" "}</div>

		<label id="menuOpen" class="cursor-pointer md:hidden">
			<input type="checkbox" class="h-0 w-0 opacity-0" />
			=
		</label>

		<div
			id="menu"
			class="fixed left-0 top-0 z-50 hidden h-screen w-screen flex-col items-center justify-center gap-4 bg-black text-2xl text-background-500"
		>
			<button class="absolute right-12 top-12" on:click={closeMenu}>x</button>
			<a href="/meny">Meny</a>
			<a href="/om-oss">Om oss</a>
			<a href="/#restauranger">Restauranger</a>
			<a href="/franchising">Franchising</a>
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
