<script lang="ts">
	import { locationsArray } from "$lib/data/locations";
	import texts from "$lib/data/texts";
	import { currentLatLng } from "$lib/stores/currentLatLng";
	import lang from "$lib/stores/lang";
	import { locationsInOrder } from "$lib/stores/locations";
	import { sortLocations } from "$lib/utils";

	let work = texts[$lang].work;
	$: work = texts[$lang].work;
</script>

<svelte:head>
	<title>{work.title}</title>
</svelte:head>

<div class="container grid-cols-2 pb-24 pt-14 lg:grid">
	<div class="flex items-center">
		<form
			class=" h-fit rotate-[1deg] bg-black px-6 py-10 text-background-500"
			action="https://api.staticforms.xyz/submit"
			method="post"
		>
			<div class="-rotate-[1deg]">
				<!-- TODO: Add own accessKey from https://www.staticforms.xyz/ -->
				<input type="hidden" name="accessKey" value="e44fc5d0-0b52-4cb1-9f79-fefc3800d89c" />

				<h1 class="mb-4">{@html work.form.heading}<span class="text-purple-500">.</span></h1>

				<div class="grid grid-cols-2 gap-x-8 gap-y-2">
					<div>
						<label for="name">{@html work.form.name}</label>
						<input type="text" name="name" id="name" required />
					</div>

					<div>
						<label for="email">{@html work.form.email}</label>
						<input type="text" name="email" id="email" required />
					</div>

					<div>
						<label for="phone">{@html work.form.phone}</label>
						<input type="text" name="phone" id="phone" required />
					</div>

					<div>
						<label for="$where">{@html work.form.where}</label>
						<select name="$where" id="$where" required>
							<option value="">{work.form.choose}</option>
							{#each $locationsInOrder as location}
								<option value={location.city}>
									{location.city}
								</option>
							{/each}
						</select>
					</div>

					<div>
						<label for="cv">{@html work.form.cv}</label>
						<input type="file" name="cv" id="cv" required />
					</div>
				</div>

				<input type="hidden" name="subject" value="Ny franchisetagningsansökan." />
				<input type="hidden" name="replyTo" value="@" />
				<input type="hidden" name="redirectTo" value="https://example.com/contact/success" />
				<input type="text" name="honeypot" style="display: none;" />

				<input class="mt-6 bg-purple-500 py-8" type="submit" value={work.form.submit} />
			</div>
		</form>
	</div>

	<div class="relative hidden items-center justify-center lg:flex">
		<div
			class="absolute flex rotate-6 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square h-72 object-cover" src="/kfc.webp" alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div
			class="absolute flex -rotate-12 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square h-72 object-cover" src="/kfc.webp" alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div
			class="relative flex h-fit w-fit flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square h-72 object-cover" src="/kfc.webp" alt="" />
			<span class="py-6 font-indie text-3xl">K-bowl</span>
		</div>
	</div>
</div>

<style>
	input,
	select {
		@apply block w-full p-2 text-black outline-none;
	}
</style>
