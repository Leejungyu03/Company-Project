<script>
    import database from "../database";

    let data = database;
    let emailOnScreen = false;
    let emailCheckOnScreen = false;
    let passwordOnScreen = false;
    let userNameOnScreen = false;
    let birthYearOnScreen = false;
    let birthDayOnScreen = false;
    let email = '';
    let emailCheck = '';
    let password = '';
    let userName = '';
    let birthYear = '';
    let birthDay = '';
    let birth = '';
    let gender = '';
    // 이메일이 .com으로 끝나는지 확인
    $ : if (email.endsWith(".com") || email == '') {
        emailOnScreen = false;
    } else {
        emailOnScreen = true;
    }
    // 이메일 재확인
    $ : if (emailCheck == email || emailCheck == '') {
        emailCheckOnScreen = false;
    } else {
        emailCheckOnScreen = true;
    }
    // 비밀번호 확인
    function passwordClick () {
        if (password == '') {
            passwordOnScreen = true;
        } else {
            passwordOnScreen = false;
        }
    }
    // 유저네임 재확인
    function userNameClick () {
        if (userName == '') {
            userNameOnScreen = true;
        } else {
            userNameOnScreen = false;
        }
    }
    // 날짜 확인
    $ : if (isNaN(birthYear)) {
        birthYearOnScreen = true;
    } else {
        birthYearOnScreen = false;
    }
    $ : if (isNaN(birthDay)) {
        birthDayOnScreen = true;
    } else {
        birthDayOnScreen = false;
    }

    // 결과 넣기
    function signUp() {
        let month = document.getElementById('month');
        month = month.options[month.selectedIndex].value;
        birth = birthYear + "-" + month + "-" + birthDay;
        gender = document.querySelector('input[name="gender"]:checked').value;
        if (!emailOnScreen 
            // && !emailCheckOnScreen
            // && !passwordOnScreen 
            // && !userNameOnScreen 
            // && !birthYearOnScreen 
            // && !birthDayOnScreen 
            // && email != '' 
            // && emailCheck != '' 
            // && password != '' 
            // && userName != '' 
            // && birthYear != '' 
            // && birthDay != '' 
            // && userName != ''
        ) {
            data.push(
                {
                    email : email,
                    pw : password,
                    userName : userName,
                    birth : birth,
                    gender : gender,
                }
            )
            clear();

        }
        console.log(data)
    }
    function clear () {
        document.getElementById('email').value = '';
        document.getElementById('emailCheck').value = '';
        document.getElementById('password').value = '';
        document.getElementById('userName').value = '';
        document.getElementById('year-text').value = '';
        document.getElementById('day-text').value = '';
        document.getElementById('defualt').checked = true;
        document.getElementById("month").value = '01';
    }
</script>

<section>
    <div class="register">
        <div class="head">
            <img src="../images/Logo_register.png" alt="로고" class="logo-img">
            <h2>무료로 가입하고 들어보세요</h2>
            <hr>
            <p>이메일 주소로 가입하기</p>
        </div>
        <div class="body">
            <div><label for="email">이메일이 어떻게 되시나요?</label></div>
            <input type="email" id="email" class="text-box" placeholder="이메일을 입력하세요." bind:value={email}>
            {#if emailOnScreen}
                <svg><path d="M2.343 2.343a8 8 0 1111.314 11.314A8 8 0 012.343 2.343zm5.099 8.738a.773.773 0 00-.228.558.752.752 0 00.228.552.75.75 0 00.552.229.773.773 0 00.558-.229.743.743 0 00.234-.552.76.76 0 00-.234-.558.763.763 0 00-.558-.234.743.743 0 00-.552.234zm-.156-7.23l.312 6.072h.804l.3-6.072H7.286z"></path></svg>
                <span>잘못된 이메일 주소입니다. example@email.com 형식으로 입력되었는지 확인하세요.</span>
            {/if}

            <div><label for="emailCheck">이메일을 확인하세요.</label></div>
            <input type="email" id="emailCheck" class="text-box" placeholder="이메일을 다시 입력하세요." bind:value={emailCheck}>
            {#if emailCheckOnScreen}
                <svg><path d="M2.343 2.343a8 8 0 1111.314 11.314A8 8 0 012.343 2.343zm5.099 8.738a.773.773 0 00-.228.558.752.752 0 00.228.552.75.75 0 00.552.229.773.773 0 00.558-.229.743.743 0 00.234-.552.76.76 0 00-.234-.558.763.763 0 00-.558-.234.743.743 0 00-.552.234zm-.156-7.23l.312 6.072h.804l.3-6.072H7.286z"></path></svg>
                <span>이메일 주소가 일치하지 않습니다.</span>
            {/if}

            <div><label for="password">비밀번호를 만드세요.</label></div>
            <input type="password" id="password" class="text-box" placeholder="비밀번호를 만드세요." bind:value={password} on:keyup={passwordClick}> 
            {#if passwordOnScreen}
                <svg><path d="M2.343 2.343a8 8 0 1111.314 11.314A8 8 0 012.343 2.343zm5.099 8.738a.773.773 0 00-.228.558.752.752 0 00.228.552.75.75 0 00.552.229.773.773 0 00.558-.229.743.743 0 00.234-.552.76.76 0 00-.234-.558.763.763 0 00-.558-.234.743.743 0 00-.552.234zm-.156-7.23l.312 6.072h.804l.3-6.072H7.286z"></path></svg>
                <span>비밀번호를 입력해야 합니다.</span>
            {/if}

            <div><label for="userName">어떤 사용자 이름을 사용하시겠어요?</label></div>
            <input type="text" id="userName" class="text-box-last" placeholder="프로필 이름을 입력하세요." bind:value={userName} on:keyup={userNameClick}>
            {#if userNameOnScreen}
                <svg><path d="M2.343 2.343a8 8 0 1111.314 11.314A8 8 0 012.343 2.343zm5.099 8.738a.773.773 0 00-.228.558.752.752 0 00.228.552.75.75 0 00.552.229.773.773 0 00.558-.229.743.743 0 00.234-.552.76.76 0 00-.234-.558.763.763 0 00-.558-.234.743.743 0 00-.552.234zm-.156-7.23l.312 6.072h.804l.3-6.072H7.286z"></path></svg>
                <span>프로필에 쓰일 이름을 입력하세요.</span>
            {/if}

            <div class="birth-text">생년월일이 어떻게 되시나요?</div>
            <div class="birth">
                <div class="year">
                    <label for="year-text">연도</label>
                    <input type="text" id="year-text" placeholder="YYYY" maxlength="4" bind:value={birthYear}>
                </div>
                <div class="year">
                    <label for="month">월</label>
                    <select name="month" id="month">
                        <option value="01">1월</option>
                        <option value="02">2월</option>
                        <option value="03">3월</option>
                        <option value="04">4월</option>
                        <option value="05">5월</option>
                        <option value="06">6월</option>
                        <option value="07">7월</option>
                        <option value="08">8월</option>
                        <option value="09">9월</option>
                        <option value="10">10월</option>
                        <option value="11">11월</option>
                        <option value="12">12월</option>
                    </select>
                </div> 
                <div class="day">
                    <label for="day-text">일</label>
                    <input type="text" id="day-text" placeholder="DD" maxlength="2" bind:value={birthDay}>
                </div>
            </div>
            {#if birthYearOnScreen}
                <svg><path d="M2.343 2.343a8 8 0 1111.314 11.314A8 8 0 012.343 2.343zm5.099 8.738a.773.773 0 00-.228.558.752.752 0 00.228.552.75.75 0 00.552.229.773.773 0 00.558-.229.743.743 0 00.234-.552.76.76 0 00-.234-.558.763.763 0 00-.558-.234.743.743 0 00-.552.234zm-.156-7.23l.312 6.072h.804l.3-6.072H7.286z"></path></svg>
                <span>유효한 연도를 입력하세요.</span> <br>
            {/if}
            {#if birthDayOnScreen}
                <svg><path d="M2.343 2.343a8 8 0 1111.314 11.314A8 8 0 012.343 2.343zm5.099 8.738a.773.773 0 00-.228.558.752.752 0 00.228.552.75.75 0 00.552.229.773.773 0 00.558-.229.743.743 0 00.234-.552.76.76 0 00-.234-.558.763.763 0 00-.558-.234.743.743 0 00-.552.234zm-.156-7.23l.312 6.072h.804l.3-6.072H7.286z"></path></svg>
                <span>해당 월 중 유효한 날짜를 입력하세요</span>
            {/if}
            <div class="gender-text">성별이 무엇인가요?</div>
            <div class="gender">
                <label><input type="radio" name="gender" value="male" class="gender-radio" id="defualt" checked>남성</label>
                <label><input type="radio" name="gender" value="female" class="gender-radio">여성</label>
                <label><input type="radio" name="gender" value="none" class="gender-radio">논바이너리</label>
            </div>
            <label><input type="checkbox"> Spotify 마케팅 메시지 수신 동의</label> <br>
            <label class="emphasis"><input type="checkbox"> 제 3자 데이터 제공</label> <br>
            <label class="emphasis"><input type="checkbox"> 필수 개인 정보 수집 및 이용</label> <br>
            <label class="emphasis"><input type="checkbox"> Spotify 사용 약관</label> <br>

            <div class="clause">당사가 귀하에 대해 처리 할 데이터에 대한 자세한 정보는 당사 <span>개인정보처리방침</span>을 참조하십시오.</div>
            <div class="register-button"><button on:click={signUp}>가입하기</button></div>
        </div>
    </div>
</section>

<style>
    section {
        height: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
    }
    section .register {
        width: 22%;
        /* background-color: antiquewhite; */
    }
    section .register .head {
        text-align: center;
    }
    section .register .head .logo-img {
        width: 170px;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    section .register .head h2 {
        font-weight: 600;
    }
    section .register .head hr {
        margin-top: 30px;
        margin-bottom: 20px;
    }
    section .register .head p {
        font-size: 20px;
        font-weight: 600;
    }
    section .register .body svg {
        width: 20px;
        height: 20px;
        font-size: 10px;
        color: red;   
    }
    section .register span {
        font-size: 14px;
        color: red;
    }
    section .register .body div label {
        font-weight: 600;
        font-size: 15px;
        margin-top: 30px;
    }
    section .register .body .text-box {
        width: 100%;
        height: 52px;
        font-size: 16px;
        margin-top: 10px;
        padding-left: 10px;
        padding-bottom: 5px;
    }
    section .register .body .text-box-last {
        width: 100%;
        height: 52px;
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 10px;
        padding-bottom: 5px;
    }

    section .register .body .birth-text {
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: 5px;
        position: relative;
        top: 20px;
    }
    section .register .body .birth {
        display: inline-flex;
    }
    section .register .body .birth #year-text {
        width: 90px;
        height: 52px;
        margin-top: 5px;
        font-size: 18px;
        padding-left: 6px;
    }
    section .register .body .birth #month {
        width: 170px;
        height: 52px;
        margin-top: 5px;
        font-size: 18px;
        padding-left: 6px;
    }
    section .register .body .birth #day-text {
        width: 90px;
        height: 52px;
        margin-top: 5px;
        font-size: 18px;
        padding-left: 6px;
    }
    section .register .body .gender-text {
        font-weight: 600;
        margin-top: 30px;
        position: relative;
        top: 15px;
    }
    section .register .body .gender label {
        font-size: 17px;
        font-weight: 400;
    }
    section .register .body .gender input[type=radio] {
        margin-right: 10px;
        margin-bottom: 20px;
    }
    section .register .body label input[type=checkbox] {
        margin-top: 30px;
        margin-right: 10px;
    }
    section .register .body .emphasis {
        font-weight: 600;
        text-decoration: underline;
        color: rgb(30, 215, 96);
    }
    section .register .body .clause {
        margin-top: 30px;
        text-align: center;
        font-size: 11px;
    }
    section .register .body .clause span {
        text-decoration: underline;
        color: rgb(30, 215, 96);
        font-size: 11.8px;
        cursor: pointer;
    }
    section .register .body .register-button {
        text-align: center;
        margin-top: 50px;
        margin-bottom: 100px;
    }
    section .register .body .register-button button {
        width: 160px;
        height: 56px;
        background-color: rgb(30, 215, 96);
        font-weight: 600;
        border: 0;
        border-radius: 50px;
    }
    section .register .body .register-button button:hover {
        width: 170px;
        height: 60px;
        background-color: rgb(30, 215, 96);
    }
     
</style>