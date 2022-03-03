<script>
    export let user;

    let email = user.email
    let password = user.password
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
            <div>
                <div class="result">{email}</div>
                <div class="result-text"><input type="text" bind:value={email}></div>
            </div>
            <div>
                <div class="result">{password}</div>
                <input type="text" bind:value={password}>
            </div>
            <div>
                <span class="result">{user.userName}</span>  
                <input type="text" value={user.userName}>
            </div>
            <div>
                <span class="result">{user.birth}</span>
                <input type="text" value={user.birth}>
            </div>
            <div>
                <span class="result">{user.gender}</span>
                <input type="text" value={user.gender}>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        height: 100%;
        display: flex;
        justify-content: center;
    }
    section .mypage {
        width: 30%;
        height: 500px;
        display: flex;
    }
    section .mypage .head {
        width: 30%;
        border: 1px solid black;
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
    section .mypage .body div {
        /* height: 20%; */
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
        margin-left: 30px;
        margin-top: 20px;
    }
    section .mypage .body div span{
        width: 50px;
        margin-left: 30px;
    }
</style>