<script>
    import database from "../database";

    export let user;
    let data = database;
    let email = user.email
    let password = user.password
    let userName = user.userName
    let birth = user.birth
    let gender = user.gender

    function modify () {
        for (var i = 0; i < data.length; i++) {
            if (data[i].email == user.email) {
                data.splice(i, 5, 
                    {
                        email : email,
                        pw : password,
                        userName : userName,
                        birth : birth,
                        gender : gender,
                    }
                )
            }
        }
        console.log(data)
    }
</script>

<section>
    <div class="mypage">
        <div class="head">
            <div>이메일</div> 
            <div>비밀번호</div>
            <div>사용자 이름</div> 
            <div>생일</div>
            <div>성별</div>
        </div>
        <div class="body">
            <div class="email body-box">
                <div class="result">{email}</div>
                <div class="result-text"><input type="text" bind:value={email}></div>
            </div>
            <div class="password body-box">
                <div class="result">{password}</div>
                <div class="result-text"><input type="text" bind:value={password}></div>
            </div>
            <div class="userName body-box">
                <div class="result">{userName}</div>  
                <div class="result-text"><input type="text" bind:value={userName}></div>
            </div>
            <div class="birth body-box">
                <div class="result">{birth}</div>
                <div class="result-text"><input type="text" bind:value={birth}></div>
            </div>
            <div class="gender body-box">
                <div class="result">{gender}</div>
                <div class="result-text"><input type="text" bind:value={gender}></div>
            </div>
        </div>
    </div>
    <button on:click={modify}>수정완료</button>
</section>

<style>
    section {
        height: 700px;
        display: flex;
        justify-content: center;
    }
    section .mypage {
        width: 30%;
        height: 500px;
        display: flex;
        margin-top: 50px;
    }
    section .mypage .head {
        width: 30%;
        text-align: center;
    }
    section .mypage .head div{
        height: 20%;
        line-height: 100px;
        border: 1px solid black;
    }
    section .mypage .body {
        width: 70%;
        text-align: center;
    }
    section .mypage .body  .body-box {
        height: 20%;
        line-height: 100px;
        border: 1px solid black;
        display: flex;
    }
    section .mypage .body .result {
        width: 40%;
    }
    section .mypage .body .result-text {
        width: 60%;
    }
    section .mypage .body div input{
        height: 50px;
        margin-top: 20px;
    }
    button {
        width: 200px;
        height: 50px;
        position: absolute;
        top: 670px;
        border-radius: 20px;
        border: 0;
        background-color: rgb(30, 215, 96);
        font-weight: 600;
    }
    button:hover {
        width: 210px;
        height: 60px;
        background-color: rgb(30, 215, 96);
    }
</style>