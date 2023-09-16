<!-- // src/routes/auth/+page.svelte -->
<script>
	export let data;
</script>

{JSON.stringify(data.session)}

<form method="post" action="?/signin">
	<input name="email" />
	<input type="password" name="password" />
	<button>Sign in</button>
</form>
<form method="post" action="?/logout">
	<button>Logout</button>
</form>
