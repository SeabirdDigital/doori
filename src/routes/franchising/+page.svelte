<div class="container grid-cols-2 pb-24 pt-14 lg:grid">
	<div class="flex items-center">
		<form
			class=" h-fit bg-black px-6 py-10 text-background-500"
			action="https://api.staticforms.xyz/submit"
			method="post"
		>
			<!-- TODO: Add own accessKey from https://www.staticforms.xyz/ -->
			<input type="hidden" name="accessKey" value="e44fc5d0-0b52-4cb1-9f79-fefc3800d89c" />

			<h1 class="mb-4">Bli<br />Franchisetagare<span class="text-purple-500">.</span></h1>

			<div class="grid grid-cols-2 gap-x-8 gap-y-2">
				<div>
					<label for="name">Namn</label>
					<input type="text" name="name" id="name" required />
				</div>

				<div>
					<label for="email">Email</label>
					<input type="text" name="email" id="email" required />
				</div>

				<div>
					<label for="phone">Telefon</label>
					<input type="text" name="phone" id="phone" required />
				</div>

				<div>
					<label for="$stad">Stad</label>
					<input type="text" name="$stad" id="$stad" required />
				</div>

				<div>
					<label for="$typ">Typ</label>
					<select name="$typ" id="$typ" required>
						<option value="">--Välj ett alternativ--</option>
						<option value="Ghost Kitchen">Ghost Kitchen</option>
						<option value="Restaurang">Restaurang</option>
					</select>
				</div>
			</div>

			<input type="hidden" name="subject" value="Ny franchisetagningsansökan." />
			<input type="hidden" name="replyTo" value="@" />
			<input type="hidden" name="redirectTo" value="https://example.com/contact/success" />
			<input type="text" name="honeypot" style="display: none;" />

			<input class="mt-6 bg-purple-500 py-8" type="submit" value="Submit" />
		</form>
	</div>

	<div class="relative hidden items-center justify-center lg:flex">
		<div
			class="absolute flex rotate-6 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square h-72 object-cover" src="/kfc.jpeg" alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div
			class="absolute flex -rotate-12 flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square h-72 object-cover" src="/kfc.jpeg" alt="" />
			<span class="py-6 font-indie text-3xl">Korean Fried Chicken</span>
		</div>
		<div
			class="relative flex h-fit w-fit flex-col items-center bg-white p-4 pb-0 shadow-md shadow-black/25"
		>
			<img class="aspect-square h-72 object-cover" src="/kfc.jpeg" alt="" />
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
