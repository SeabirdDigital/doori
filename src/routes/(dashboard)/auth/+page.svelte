<!-- // src/routes/auth/+page.svelte -->
<script>
	import { Button, NativeSelect, Space, TextInput, Textarea } from "@svelteuidev/core";

	export let data;
</script>

<form method="post" action="?/signin">
	<TextInput type="email" name="email" />
	<TextInput type="password" name="password" />

	<Space h={24} />

	<Button>Sign in</Button>
</form>
