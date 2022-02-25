const Header = () => {
    // 추가 팝업 열기
    function open (e) {
        e.target.parentElement.parentElement.parentElement.children[0].children[1].style.visibility = 'visible';
        e.target.parentElement.parentElement.parentElement.children[0].children[1].style.opacity = '1';
        e.target.parentElement.children[3].style.visibility = 'visible';
        e.target.parentElement.children[3].style.opacity = '1';
    }
    // 추가 팝업 닫기
    function close (e) {
        e.target.parentElement.parentElement.children[1].style.visibility = 'hidden';
        e.target.parentElement.parentElement.children[1].style.opacity = '0';
        e.target.style.visibility = 'hidden';
        e.target.style.opacity = '0';
    }
    return (
        <header>
            <img src='./images/background.png' className="bodyBackground"></img>
            <h1>To Do List</h1>
            <img src='./images/add.png' className='addBtn' onClick={(e) => open(e)}></img>
            <div className='background' onClick={(e) => close(e)}></div>
            <span>
                떠든 사람 <br/>
                김ㅁㅁ  <br/>
                이ㅁㅁ
            </span>
        </header>
    );
}

export default Header;