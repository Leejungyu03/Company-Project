<script>
    import { createEventDispatcher } from 'svelte';
    export let user;

    const dispatch = createEventDispatcher();

    let onScreen = '';

    function main () {
        onScreen = 1;
    }
    function register () {
        onScreen = 2;
    }
    function login() {
        onScreen = 3;
    }
    function logout () {
        alert("로그아웃 되었습니다.");
        user.isLogin = false;
        onScreen = 1;
    }
    function mypage() {
        onScreen = 4;
    }

    $: (() => {
        dispatch('HeaderProps', {
            onScreen
        })
    })();
</script>
<header>
    <div class="head">
        <div class="image">
            <img src='../images/Logo.png' alt="로고" on:click={main}>
        </div>
        <nav>
            <ul>
                <li>프리미엄</li>
                <li>지원</li>
                <li>다운로드하기</li>
                <li class="line">|</li>
                {#if user.isLogin}
                    <li class="line">{user.userName}님 환영합니다</li>
                    <li on:click={mypage}>마이페이지</li>
                    <li on:click={logout}>로그아웃</li>
                {:else }
                    <li on:click={register}>가입하기</li>
                    <li on:click={login}>로그인하기</li>
                {/if}
            </ul>
        </nav>
    </div>
</header>

<style>
    header {
        width: 100%;
        height: 80px;
        background-color: black;
        justify-content: center;
        display: flex;
    }
    header .head {
        width: 60%;
        height: 100%;
        display: flex;
    }
    header .head .image {
        width: 12%;
    }
    header .head .image img {
        width: 132px;
        margin-top: 10px;
        cursor: pointer;
    }
    header .head nav {
        width: 88%;
        position: relative;
        right: 0;
    }
    header .head nav ul {
        display: flex;
        justify-content: end;
        line-height: 75px;
    }
    header .head nav ul li {
        color: white;
        list-style: none;
        margin-right: 30px;
    }
    header .head nav ul li:last-child {
        margin-right: 20px;
    }
    header .head nav ul li:hover:not(.line) {
        color: green;
        cursor: pointer;
    }
</style>