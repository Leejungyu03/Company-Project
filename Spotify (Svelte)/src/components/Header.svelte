<script>

</script>
<header>
    <div class="head">
        <div class="image">
            <img src='../images/Logo.png' alt="로고">
        </div>
        <nav>
            <ul>
                <li>프리미엄</li>
                <li>지원</li>
                <li>다운로드하기</li>
                <li>|</li>
                <li>가입하기</li>
                <li>로그인하기</li>
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
    header .head nav ul li:hover {
        color: green;
        cursor: pointer;
    }
</style>