<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import { invalidate } from "$app/navigation";
	import {
		AppShell,
		Button,
		Center,
		Flex,
		Group,
		Header,
		Navbar,
		ShellSection,
		SvelteUIProvider
	} from "@svelteuidev/core";
	import { onMount } from "svelte";

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate("supabase:auth");
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles>
	<AppShell>
		<Header
			height={64}
			style="position:absolute;display:flex;align-items:center;justify-content:space-between;"
			slot="header"
		>
			<div />
			<div />
			<div />
		</Header>

		<slot />
	</AppShell>
</SvelteUIProvider>
