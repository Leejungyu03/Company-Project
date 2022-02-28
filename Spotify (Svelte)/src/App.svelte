<script>
	import Header from "./components/Header.svelte";
	import Main from "./components/Main.svelte"
	import Login from "./components/Login.svelte";
	import Register from './components/Register.svelte';
	import Footer from "./components/Footer.svelte";
</script>

<div id="wrap">
	<Header />
	<Main />
	<Footer />
</div>

<style>
	#wrap {
		width: 1903px;
		margin: 0;
	}
</style>