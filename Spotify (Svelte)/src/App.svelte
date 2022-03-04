<script>
	import Header from "./components/Header.svelte";
	import Main from "./components/Main.svelte"
	import Login from "./components/Login.svelte";
	import Register from './components/Register.svelte';
	import Mypage from './components/Mypage.svelte';
	import Footer from "./components/Footer.svelte";
	
	let onScreen = '1';
	let isLogin = false;
	let user = {};

	const onScreenChange = (e) => {
		onScreen = e.detail.onScreen;
	}
	const loginInfo = (e) => {
		onScreen = e.detail.onScreen;
		user = {
			isLogin : e.detail.isLogin,
			email : e.detail.emailResult,
			password : e.detail.passwordResult,
			birth : e.detail.birthResult,
			userName : e.detail.userNameResult,
			gender : e.detail.genderResult,
		}	
	}
</script>

<div id="wrap">
	<Header on:HeaderProps={onScreenChange} user={user}/>
	{#if (onScreen == 1)}
		<Main />
	{:else if (onScreen == 2)}
		<Register />
	{:else if (onScreen == 3)}
		<Login on:LoginProps={loginInfo} />
	{:else}
		<Mypage user={user} />
	{/if}
	<Footer />
</div>


<style>
	#wrap {
		width: 1903px;
		margin: 0;
	}
</style>