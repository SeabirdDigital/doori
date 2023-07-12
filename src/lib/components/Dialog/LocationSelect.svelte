<script lang="ts">
	import selectedLocation, {
		currentLocation,
		ipInfo,
		locations,
		locationsInOrder,
		newSelectedLocation
	} from "$lib/stores/locations";
	import { getDistanceFromLatLngInKm, latLng2LngLat } from "$lib/utils";
	import { MapLibre, Marker, Popup } from "svelte-maplibre";

	let center: [number, number] = latLng2LngLat($currentLocation);
	let zoom = 5.5;

	const switchLocation = (location: string) => {
		newSelectedLocation.set(location);
		center = latLng2LngLat(locations[location].latLng);
	};
</script>

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
				<Marker lngLat={latLng2LngLat($currentLocation)}>
					<div
						class="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-blue-400"
					>
						<div class="m-[2px] grid aspect-square h-3 rounded-full bg-blue-400 duration-200" />
					</div>
				</Marker>

				{#each Object.keys(locations) as location}
					<Marker
						lngLat={[locations[location].latLng[1], locations[location].latLng[0]]}
						on:click={() => switchLocation(location)}
					>
						<div
							class="absolute right-1/2 top-1/2 grid aspect-square h-8 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full duration-200 {$newSelectedLocation ==
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
				<li class="item border-b-2 border-black px-4 py-2 text-xs">
					📍 {$ipInfo?.city}
				</li>
				{#each $locationsInOrder as location}
					<li class="item mt-2 px-4 {$newSelectedLocation === location.id ? 'font-bold' : ''}">
						<label class="flex cursor-pointer">
							<input
								type="radio"
								name="location"
								value={location.id}
								checked={$newSelectedLocation === location.id}
								class="h-0 w-0 opacity-0"
								on:change={() => switchLocation(location.id)}
							/>
							<span class="flex min-w-[250px] flex-1 items-end justify-between">
								<span>
									<span class="link reverse">
										{location.city}
									</span>
									<span class="-ml-1 mb-[3px] text-xs font-normal opacity-80">
										{getDistanceFromLatLngInKm(location.latLng, $currentLocation).toFixed(1)}km
									</span>
								</span>

								{#if $newSelectedLocation == location.id}
									<span class="flex h-full items-center">
										<img src="/star.svg" width="16px" alt="" />
									</span>
								{/if}
							</span>
						</label>
					</li>
				{/each}
			</ul>
			<form method="dialog" class="m-4">
				<button
					on:click={() => selectedLocation.set($newSelectedLocation)}
					class="full to-borders flex w-full justify-center"
				>
					Välj
				</button>
			</form>
		</div>
	</div>
</div>
