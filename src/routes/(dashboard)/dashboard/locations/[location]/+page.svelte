<script lang="ts">
	export let data;

	let l = data.location;

	const save = async () => {
		console.log(l);
		const t = await data.supabase.from("doori_locations").update(l).eq("id", l.id);
		console.log(t);
	};
</script>

<input type="text" id="city" bind:value={l.city} />
<input type="text" id="address" bind:value={l.address} />
<input type="checkbox" id="onlyDelivery" bind:value={l.onlyDelivery} />
<input type="url" id="orderLink" bind:value={l.orderLink} />
<input type="url" id="maps" bind:value={l.maps} />
<input type="url" id="reservation" bind:value={l.reservation} />

<button on:click={save}>Save</button>
