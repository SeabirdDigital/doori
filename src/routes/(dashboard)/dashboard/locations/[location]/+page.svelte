<script lang="ts">
	export let data;

	let l = data.location;

	const save = async () => {
		console.log(l);
		const t = await data.supabase.from("doori_locations").update(l).eq("id", l.id);
		console.log(t);
	};
</script>

<div>
	<input type="text" id="city" bind:value={l.city} />
</div>
<div>
	<input type="text" id="address" bind:value={l.address} />
</div>
<div>
	<input type="checkbox" id="onlyDelivery" bind:value={l.onlyDelivery} />
</div>
<div>
	<input type="url" id="orderLink" bind:value={l.orderLink} />
</div>
<div>
	<input type="url" id="maps" bind:value={l.maps} />
</div>
<div>
	<input type="url" id="reservation" bind:value={l.reservation} />
</div>

<div>
	{#each ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as day}
		<div>
			<input type="text" id={day} bind:value={l.openingHours[day]} />
		</div>
	{/each}
</div>

<button on:click={save}>Save</button>
