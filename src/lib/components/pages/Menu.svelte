<script lang="ts">
	import texts from "$lib/data/texts";
	import lang from "$lib/stores/lang";

	let menu = texts[$lang].menu;
	$: menu = texts[$lang].menu;
</script>

<svelte:head>
	<title>{menu.title}</title>
</svelte:head>

<div class="flex justify-center">
	<h1 class="my-12 text-6xl">
		{menu.heading}
	</h1>
</div>

<div class="container mb-12">
	{#each menu.menu as category}
		<div class="mb-12">
			<h2 class="mb-4 text-3xl">{category.name}</h2>
			<div class="grid gap-8 lg:grid-cols-2">
				{#each category.items as item}
					<div>
						<div class="mb-2 flex items-end justify-between text-lg leading-none sm:text-2xl">
							<h3 class="font-bold">
								{@html item.name}
							</h3>
							<span class="flex-1 border-b border-dashed border-brown" />
							<p class="">{item.price} kr</p>
						</div>
						<p>{@html item.description}</p>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
