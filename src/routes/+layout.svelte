<script lang="ts">
	import NavItems from "$lib/components/NavItems.svelte";
	import { lang } from "$lib/stores/lang";
	import { locations, selectedLocation } from "$lib/stores/locations";
	import { menuOpen } from "$lib/stores/menuOpen";
	import { transitionOn } from "$lib/stores/transitionOn";
	import texts, { langs } from "$lib/texts";
	import { goto, latLng2LngLat } from "$lib/utils";
	import "@fontsource/indie-flower";
	import "@fontsource/space-mono/400.css";
	import "@fontsource/space-mono/700.css";
	import { onMount } from "svelte";
	import { MapLibre, Marker, Popup } from "svelte-maplibre";
	import "../app.css";

	export let data;
	let dialog: HTMLDialogElement;

	lang.set(data.lang);
	if (data.nearestLocation) selectedLocation.set(data.nearestLocation);

	let layout = texts[$lang].layout;
	$: layout = texts[$lang].layout;

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

	let newSelectedLocation = $selectedLocation;

	const openDialog = (type: "locationSelect") => {
		document.getElementById(type)!.style.display = "block";

		if (type == "locationSelect") newSelectedLocation = $selectedLocation;

		dialog.showModal();
	};

	const onDialogClick = (e: MouseEvent) => {
		var rect = dialog.getBoundingClientRect();
		var isInDialog =
			rect.top <= e.clientY &&
			e.clientY <= rect.top + rect.height &&
			rect.left <= e.clientX &&
			e.clientX <= rect.left + rect.width;
		if (!isInDialog) {
			dialog.close();
		}
	};

	const onCloseDialog = () => {
		for (const child of dialog.children) {
			(child as HTMLElement).style.display = "block";
		}
	};

	let center: [number, number] = latLng2LngLat(locations[$selectedLocation].latLng);
	let zoom = 5.5;

	const switchLocation = (location: string) => {
		newSelectedLocation = location;
		center = latLng2LngLat(locations[location].latLng);
	};
</script>

<!-- onclick event is for close on click on bg -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	on:close={onCloseDialog}
	on:click={onDialogClick}
	class="border-2 border-black bg-background-500 p-0 outline-none"
	bind:this={dialog}
>
	<div id="locationSelect" class="">
		<div class="grid-cols-2 sm:grid">
			<div aria-hidden="true" class="relative hidden sm:block">
				<MapLibre
					class="relative aspect-[5/7] w-64"
					style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
					standardControls
					{center}
					{zoom}
				>
					{#each Object.keys(locations) as location}
						<Marker
							lngLat={[locations[location].latLng[1], locations[location].latLng[0]]}
							on:click={() => switchLocation(location)}
						>
							<div
								class="absolute right-1/2 top-1/2 grid aspect-square h-8 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full duration-200 {newSelectedLocation ==
								location
									? 'z-30 scale-110 bg-black'
									: 'z-10 scale-100 bg-background-900 hover:scale-110'}"
							>
								<span>
									<img src="/doori-d.png" class="h-4" alt="" />
								</span>
							</div>

							<Popup openOn="hover" offset={[0, -10]}>
								<div class="-my-2">
									{locations[location].city}
								</div>
							</Popup>
						</Marker>
					{/each}
				</MapLibre>
			</div>
			<div class="flex flex-col justify-between border-black sm:border-l-2">
				<ul>
					{#each Object.keys(locations) as location}
						<li class="item mt-2 px-4 {newSelectedLocation === location ? 'font-bold' : ''}">
							<label class="flex cursor-pointer">
								<input
									type="radio"
									name="location"
									value={location}
									checked={newSelectedLocation === location}
									class="h-0 w-0 opacity-0"
									on:change={() => switchLocation(location)}
								/>
								<span class="flex flex-1 justify-between">
									{locations[location].city}

									{#if newSelectedLocation == location}
										<img src="/star.svg" width="16px" alt="" />
									{/if}
								</span>
							</label>
						</li>
					{/each}
				</ul>
				<form method="dialog" class="m-4">
					<button
						on:click={() => selectedLocation.set(newSelectedLocation)}
						class="full to-borders flex w-full justify-center">Välj</button
					>
				</form>
			</div>
		</div>
	</div>
</dialog>

<div
	class="fixed left-0 z-50 w-full bg-yellow-500 duration-500 {$transitionOn
		? 'top-0 h-full'
		: 'bottom-0 h-0'}"
/>

<div class="bg-black py-2 text-sm text-white">
	<div class="container flex justify-between">
		<div>
			{#if locations[$selectedLocation].onlyDelivery}
				{layout.restaurants.onlyDelivery}
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
		Copyright 2023 &copy; {layout.copyright}
	</footer>
</header>

<style>
	#menuOpen:has(> input:checked) + nav > #menu {
		display: flex;
	}

	#locationSelect .item:focus {
		font-weight: bold;
	}
</style>
