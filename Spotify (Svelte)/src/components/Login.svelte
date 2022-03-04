<script>
    import database from "../database";
    import { createEventDispatcher } from 'svelte';

    
    let data = database;
    const dispatch = createEventDispatcher();
    let onScreen = '';

    function login() { 
        let email = document.getElementById('emailCheck').value;
        let password = document.getElementById('passwordCheck').value;
        console.log(data)
        let cc = false;
        let dd = false;
        cc = emailCheck();
        dd = passwordCheck();
        if (cc) {
            if (dd) {
                login();
            } else {
                alert("비밀번호가 틀립니다.");
            }
        } else {
            alert("등록된 이메일이 없습니다.");
        }

        function emailCheck () {
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].email)
                if (data[i].email == email) { 
                    return true;
                }
            }
        }
        function passwordCheck () {
            for (var i = 0; i < data.length; i++) {
                if (data[i].pw == password) { 
                    return true;
                }
            }
        }
        function login () {
            let userNumber;
            for (var i = 0; i < data.length; i++) {
                if (data[i].email == email) {
                    userNumber = i;
                    break;
                }
            }
            let emailResult = data[userNumber].email;
            let passwordResult = data[userNumber].pw;
            let birthResult = data[userNumber].birth;
            let userNameResult = data[userNumber].userName;
            let genderResult = data[userNumber].gender;
            alert("로그인 되었습니다.")
            onScreen = 1;
            let isLogin = true;
            dispatch('LoginProps', {
                onScreen,
                isLogin,
                emailResult,
                passwordResult,
                birthResult,
                userNameResult,
                genderResult
            });
        }
    }
</script>

<section>
    <div class="head">
        <img src="../images/Logo_register.png" alt="로고" class="logo-img">
        <hr>
    </div>
    <div class="body">
        <div class="login">
            <div><label for="emailCheck">이메일이 어떻게 되시나요?</label></div>
            <input type="email" id="emailCheck" class="text-box" placeholder="이메일 주소 또는 사용자 이름.">

            <div><label for="passwordCheck">비밀번호</label></div>
            <input type="password" id="passwordCheck" class="text-box" placeholder="비밀번호">
            <div class="login-button"><button on:click={login}>로그인하기</button></div>
        </div>
    </div>
</section>

<style>
    section {
        height: 600px;
        background-color: white;
    }
    section .head {
        width: 100%;
        text-align: center;
    }
    section .head hr {
        margin-bottom: 50px;
    }
    section .head img {
        width: 200px;
        margin-top: 20px;
    }
    section .body {
        display: flex;
        justify-content: center;
    }
    section .body .login {
        width: 24%;
    }
    section .body .login div label {
        font-weight: 600;
        font-size: 15px;
    }
    section .body .login .text-box {
        width: 100%;
        height: 52px;
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 30px;
        padding-left: 10px;
        padding-bottom: 5px;
    }
    section .body .login .login-button {
        text-align: center;
        margin-top: 30px;
    }
    section .body .login .login-button button {
        width: 160px;
        height: 56px;
        background-color: rgb(30, 215, 96);
        font-weight: 600;
        border: 0;
        border-radius: 50px;
    }
    section .body .login .login-button button:hover {
        width: 170px;
        height: 60px;
        background-color: rgb(30, 215, 96);
    }
</style>