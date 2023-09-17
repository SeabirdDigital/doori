<script lang="ts">
	import Egg from "$lib/images/egg.webp";
	import Happy from "$lib/images/franchise.jpg";
	import KFC from "$lib/images/kfc.webp";
	import lang from "$lib/stores/lang";

	export let pageData: PageData;

	let franchising = pageData.franchising[$lang];
	$: franchising = pageData.franchising[$lang];
</script>

<svelte:head>
	<title>{franchising.title}</title>
</svelte:head>

<div class="container grid-cols-2 pb-24 pt-14 lg:grid">
	<div class="flex items-center">
		<form
			class=" h-fit rotate-[1deg] bg-brown px-6 py-10 text-white"
			action="https://api.staticforms.xyz/submit"
			method="post"
		>
			<div class="-rotate-[1deg]">
				<!-- TODO: Add own accessKey from https://www.staticforms.xyz/ -->
				<input type="hidden" name="accessKey" value="e44fc5d0-0b52-4cb1-9f79-fefc3800d89c" />

				<h1 class="mb-4">{@html franchising.formHeading}</h1>

				<div class="grid grid-cols-2 gap-x-8 gap-y-2">
					<div>
						<label for="name">{@html franchising.name}</label>
						<input type="text" placeholder="Anders Andersson" name="name" id="name" required />
					</div>

					<div>
						<label for="email">{@html franchising.email}</label>
						<input
							type="text"
							placeholder="anders.andersson@aol.com"
							name="email"
							id="email"
							required
						/>
					</div>

					<div>
						<label for="phone">{@html franchising.phone}</label>
						<input type="text" placeholder="1234567890" name="phone" id="phone" required />
					</div>

					<div>
						<label for="$stad">{@html franchising.city}</label>
						<input type="text" placeholder="Helsingborg" name="$stad" id="$stad" required />
					</div>

					<div>
						<label for="$typ">{@html franchising.type}</label>
						<select name="$typ" id="$typ" required>
							<option value="">{franchising.choose}</option>
							{#each Object.keys(franchising.types) as typeId}
								<option value={JSON.parse(pageData.franchising.en.types)[typeId]}>
									{JSON.parse(franchising.types)[typeId]}
								</option>
							{/each}
						</select>
					</div>
				</div>

				<input type="hidden" name="subject" value="Ny franchisetagningsansökan." />
				<input type="hidden" name="replyTo" value="@" />
				<input type="hidden" name="redirectTo" value="https://example.com/contact/success" />
				<input type="text" name="honeypot" style="display: none;" />

				<input class="mt-6 bg-black py-8 !text-white" type="submit" value={franchising.submit} />
			</div>
		</form>
	</div>

	<div class="relative hidden items-center justify-center lg:flex">
		<div
			class="absolute flex rotate-6 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square h-72 object-cover" src={Egg} alt="" />
			<span class="py-6 font-indie text-3xl">Bibimbap</span>
		</div>
		<div
			class="absolute flex -rotate-12 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square h-72 object-cover" src={KFC} alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div
			class="relative flex h-fit w-fit flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square h-72 object-cover" src={Happy} alt="" />
			<span class="py-4 text-center font-indie text-2xl leading-none"
				>How Doori<br />Malmö Started</span
			>
		</div>
	</div>
</div>

<style>
	input,
	select {
		@apply block w-full p-2 text-black outline-none;
	}
</style>
