<script lang="ts">
	import selectedLocation, { newSelectedLocation } from "$lib/stores/locations";
	import { latLng2LngLat } from "$lib/utils";
	import { MapLibre, Marker, Popup } from "svelte-maplibre";
	import LocationSelect from "./LocationSelect.svelte";

	let dialog: HTMLDialogElement;
	export { dialog };

	export const openDialog = (type: "locationSelect") => {
		document.getElementById(type)!.style.display = "block";

		if (type == "locationSelect") newSelectedLocation.set($selectedLocation);

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
</script>

<!-- onclick event is for close on click on bg -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	on:close={onCloseDialog}
	on:click={onDialogClick}
	class="border-2 border-black bg-background-500 p-0 outline-none"
	bind:this={dialog}
>
	<LocationSelect />
</dialog>
