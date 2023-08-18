<script lang="ts">
	import locations from "$lib/data/locations";
	import texts from "$lib/data/texts";
	import Logo from "$lib/images/logo.webp";
	import lang from "$lib/stores/lang";
	import selectedLocation, { newSelectedLocation } from "$lib/stores/locations";
	import menuOpen from "$lib/stores/menuOpen";
	import { goto } from "$lib/utils";
	import Dialog from "../Dialog/Dialog.svelte";
	import NavItems from "../NavItems.svelte";

	let layout = texts[$lang].layout;
	$: layout = texts[$lang].layout;

	let dialog: HTMLDialogElement;

	const openDialog = (type: "locationSelect") => {
		document.getElementById(type)!.style.display = "block";

		if (type == "locationSelect") newSelectedLocation.set($selectedLocation);

		dialog.showModal();
	};
</script>

<Dialog bind:dialog />

<div class="bg-brown py-2 text-sm text-white">
	<div class="container flex justify-between">
		<div>
			{#if locations[$selectedLocation].onlyDelivery}
				{layout.restaurants.onlyDelivery}
			{:else}
				<span class="hidden sm:block">
					{locations[$selectedLocation].address.replace("<br>", ", ")}
				</span>
			{/if}
		</div>
		<div class="text-left">
			📍
			<button on:click={() => openDialog("locationSelect")} class="link after:!bg-white">
				{locations[$selectedLocation].city}
			</button>
		</div>
	</div>
</div>

<header class="overflow-x-hidden">
	<div class="container flex justify-between py-8">
		<button on:click={() => goto("home")}>
			<img class="aspect-[85/44] h-12" src={Logo} alt="" />
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
						? 'mb-0 mr-0 -rotate-[50deg] fill-white '
						: 'mb-3 mr-1 -rotate-[25deg] fill-brown'}"
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
						? 'ml-0 mt-0 rotate-[35deg] fill-white'
						: 'ml-1 mt-3 -rotate-[12deg] fill-brown'}"
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
					class="fixed left-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-brown text-2xl text-white duration-500 {$menuOpen
						? 'top-0'
						: '-top-[calc(100%+6rem)]'}"
				>
					<NavItems />
				</ul>
			</nav>
		</div>
	</div>
</header>
