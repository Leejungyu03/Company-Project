<script>
	import Header from "./components/Header.svelte";
	import Main from "./components/Main.svelte"
	import Login from "./components/Login.svelte";
	import Register from './components/Register.svelte';
	import Footer from "./components/Footer.svelte";
	
	let onScreen = '2';

	const onScreenChange = (e) => {
		onScreen = e.detail.onScreen;
	}
</script>

<div id="wrap">
	<Header on:HeaderProps={onScreenChange} />
	{#if (onScreen == 1)}
		<Main />
	{:else if (onScreen == 2)}
		<Register />
	{:else}
		<Login />		
	{/if}
	<Footer />
</div>


<style>
	#wrap {
		width: 1903px;
		margin: 0;
	}
</style>