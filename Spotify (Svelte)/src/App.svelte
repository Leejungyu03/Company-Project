<script>
	import Header from "./components/Header.svelte";
	import Main from "./components/Main.svelte"
	import Login from "./components/Login.svelte";
	import Register from './components/Register.svelte';
	import Footer from "./components/Footer.svelte";
	import database from "./database";

	let onScreen = '1';

	let data = database;

	const onScreenChange = (e) => {
		onScreen = e.detail.onScreen;
	}

	const add = () => {
		data.push({
			id : 'l1j1g7',
			pw : 'ljg1104'
		})
	}
	const view = () => {
		console.log(data)
	}
</script>

<div id="wrap">
	<Header on:HeaderProps={onScreenChange} />
	{#if (onScreen == 1)}
		<Main />
	{:else if (onScreen == 2)}
		<Login />	
	{:else}
		<Register />	
	{/if}
	<Footer />
	<button on:click={add}>add</button>
	<button on:click={view}>view</button>
	{data[0].id}
</div>

<style>
	#wrap {
		width: 1903px;
		margin: 0;
	}
</style>