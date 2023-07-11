<script lang="ts">
	import selectedLocation, { locations, newSelectedLocation } from "$lib/stores/locations";
	import { latLng2LngLat } from "$lib/utils";
	import { MapLibre, Marker, Popup } from "svelte-maplibre";

	let center: [number, number] = latLng2LngLat(locations[$selectedLocation].latLng);
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
				{#each Object.keys(locations) as location}
					<li class="item mt-2 px-4 {$newSelectedLocation === location ? 'font-bold' : ''}">
						<label class="flex cursor-pointer">
							<input
								type="radio"
								name="location"
								value={location}
								checked={$newSelectedLocation === location}
								class="h-0 w-0 opacity-0"
								on:change={() => switchLocation(location)}
							/>
							<span class="flex flex-1 justify-between">
								{locations[location].city}

								{#if $newSelectedLocation == location}
									<img src="/star.svg" width="16px" alt="" />
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
