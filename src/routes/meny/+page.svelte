<script lang="ts">
	type Menu = Category[];
	type Category = {
		name: string;
		items: Item[];
	};
	type Item = {
		name: string;
		longName?: boolean;
		description: string;
		price: number | string;
	};

	const menu: Menu = [
		{
			name: "Lunch",
			items: [
				{
					name: "K-bowl",
					longName: true,
					description:
						"Dooris friterade kyckling med valfri hemlagad sås, serverad med ris och picklad rättika.",
					price: 139
				},
				{
					name: "Friterade dumplings",
					longName: true,
					description: "Med cream cheese, crab sticks och sweet chili sås.",
					price: 59
				},
				{
					name: "Chikinmayo",
					description:
						"Korean Fried Chicken med ris och scramble ägg, toppad med so sås, teriyakisås och majonnäs. Blanda innan du äter så smakar det bättre.",
					price: 139
				},
				{
					name: "Bibimbap",
					description:
						"Bibimbap är ris som serveras i en skål täckt med kryddade grönsaker, nötkött och toppad med ägg sunny side up. Dooris gochujangsås är serverad vid sidan om.",
					price: 149
				}
			]
		},
		{
			name: "Tillbehör",
			items: [
				{
					name: "Picklad rättika",
					longName: true,
					description: "",
					price: 29
				},
				{
					name: "Kimchi",
					description: "",
					price: 59
				},
				{
					name: "Go sås",
					description:
						"Denna sås är vår mest populära sås och är en förkortning för Gochujang-sås. Go såsen är baserat på chili paste från Korea och trots färgen är den inte så stark.",
					price: 20
				},
				{
					name: "So sås",
					description:
						"Grunden för So såsen är vitlökssoja. Denna sås är populär bland de som gillar mildare smak.",
					price: 20
				},
				{
					name: "He sås",
					description:
						"He såsen är en starkare version av Go såsen för de som uppskattar starkare mat.",
					price: 20
				}
			]
		}
	];
</script>

<div class="flex justify-center">
	<h1 class="my-12 text-6xl">
		Meny<span class="text-purple-500">.</span>
	</h1>
</div>

<div class="container mb-12">
	{#each menu as category}
		<div class="my-4">
			<h2 class="mb-6 text-3xl">{category.name}</h2>
			<div class="grid gap-8 lg:grid-cols-2">
				{#each category.items as item}
					<div>
						<div class="mb-2 flex items-end justify-between text-lg leading-none sm:text-2xl">
							<h3 class="font-bold">
								{@html item.name}
							</h3>
							<span class="flex-1 border-b border-dashed border-black" />
							<p class="">{item.price} kr</p>
						</div>
						<p>{@html item.description}</p>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
