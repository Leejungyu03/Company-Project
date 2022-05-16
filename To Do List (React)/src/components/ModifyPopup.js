const ModifyPopup = (text) => {
    let startDate = text.text.date.slice(0, 10);
    let endDate = text.text.date.slice(13);
    let position = text.text.position;

    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let todayValue = year + "-0" + month + "-" + date; // xxxx-xx-xx
    return (
        <div>
            <div className='modifyPopup'>
                <div className='popup-head'>
                    <span>Modify The List</span>
                    <img 
                        src='./images/upload.png' 
                        className='btn-save'
                        onClick={(e) => modifyUpload(e ,position)}
                    ></img>
                </div>
                {/* 제목 */}
                <div className='popup-body'>
                    <div className='popup-title'>
                        <span className='popup-text'>Title</span>
                        <input 
                            type='text'
                            className='title-text form-control' 
                            name='title' 
                            placeholder={text.text.title}
                        ></input>
                    </div>
                    {/* 내용 */}
                    <div className='popup-content'>
                        <span className='popup-text'>Content</span>
                        <textarea 
                            className='content-text form-control'
                            name="content"
                            placeholder={text.text.content}
                        ></textarea>
                    </div>
                    {/* 날짜 */}
                    <div className='popup-date'>
                        <span className='popup-text'>Start Date</span>
                        <span className='popup-text'>~</span> 
                        <span className='popup-text'>End Date</span> 
                        <div className='d-flex'>
                            <input
                                type='date'
                                name='startDate'
                                className='date-start-text form-control'
                                min={todayValue}
                            ></input>
                            <input
                                type='date'
                                name='endDate'
                                className='date-end-text form-control'
                                min={todayValue}
                            ></input>
                        </div>
                    </div>
                    {/* 이미지 업로드 */}
                    <div className='imageLoad'>
                        <label for="inputFile2"><img src="./images/file.png"></img></label>
                        <img src="./images/preview.png" className="previewBtn" onClick={(e) => view(e)}></img>
                        <input 
                            type='file'
                            name='image'
                            id="inputFile2"
                        ></input>
                        <img src={text.text.img} className="previewImg"></img>
                    </div>
                </div>
            </div>
            <div className='modifyBackground' onClick={(e) => close(e)}></div>
        </div>
    );
}
// 수정 팝업 닫기
function close (e) { 
    let modifyPopup = e.target.parentElement.children[0];
    modifyPopup.style.visibility = 'hidden';
    modifyPopup.style.opacity = '0';

    let background = e.target;
    background.style.visibility = 'hidden';
    background.style.opacity = '0';
}
// 수정 값 업로드
function modifyUpload (e, position) {
    let title = e.target.parentElement.parentElement.children[1].children[0].children[1].value;
    let content = e.target.parentElement.parentElement.children[1].children[1].children[1].value;
    let startDate = e.target.parentElement.parentElement.children[1].children[2].children[3].children[0].value;
    let endDate = e.target.parentElement.parentElement.children[1].children[2].children[3].children[1].value;
    let date = startDate + " ~ " + endDate;
    
    if (e.target.parentElement.parentElement.children[1].children[3].children[2].files.length === 1) {
        let img = e.target.parentElement.parentElement.children[1].children[3].children[2].files[0];
        img = URL.createObjectURL(img);
        position.target.parentElement.parentElement.children[0].innerHTML = '<img src=' + img + '>';
    }

    let titlePosition = position.target.parentElement.parentElement.parentElement.children[1].children[0];
    let contentPosition = position.target.parentElement.parentElement.parentElement.children[1].children[1];
    let datePosition = position.target.parentElement.parentElement.parentElement.children[1].children[2];

    titlePosition.innerHTML= "<span class=\"list-head\">-------------- Title --------------</span> <br>" + title;         
    contentPosition.innerHTML = "<span class=\"list-head\">------------ Content ------------</span> <br>" + content;
    datePosition.innerHTML = "<span class=\"list-head\">-------------- Date --------------</span> <br><span class=\"date-text\">" + date + "</span>";

    uploadClose(e);
}
// 수정하고 닫기
function uploadClose (e) {
    e.target.parentElement.parentElement.children[1].children[0].children[1].value = "";
    e.target.parentElement.parentElement.children[1].children[1].children[1].value = "";
    e.target.parentElement.parentElement.children[1].children[2].children[3].children[0].value = "";
    e.target.parentElement.parentElement.children[1].children[2].children[3].children[1].value = "";

    e.target.parentElement.parentElement.style.visibility = "hidden";
    e.target.parentElement.parentElement.style.opacity = "0";
    e.target.parentElement.parentElement.parentElement.children[1].style.visibility = "hidden";
    e.target.parentElement.parentElement.parentElement.children[1].style.opacity = "0";
}
// 이미지 미리보기
function view(e) {
    let img = e.target.parentElement.children[2].files[0];
    img = URL.createObjectURL(img);
    
    e.target.parentElement.children[3].src = img;
}



export default ModifyPopup;