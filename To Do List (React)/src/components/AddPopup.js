import { useState } from "react"
import React from 'react';

const AddPopup = ({ title, content, startDate, endDate, image, onChange, onCreate }) => {
    var [img, setImg] = useState(null);
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let todayValue = year + "-0" + month + "-" + date; // xxxx-xx-xx
    // 그림 미리보기
    function view (e) {
        let basicImg = e.target.parentElement.children[3];
        basicImg.style.display = 'none'
        let img = e.target.parentElement.children[2].files[0];
        img = URL.createObjectURL(img);
        setImg(img);
    }
    return (
        <div className='popup'>
            <div className='popup-head'>
                <span>Add The List</span>
                <img 
                    src='./images/save_btn.png' 
                    className='btn-save'
                    onClick={onCreate}
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
                        placeholder="제목"
                        value={title}
                        onChange={onChange}
                    ></input>
                </div>
                {/* 내용 */}
                <div className='popup-content'>
                    <span className='popup-text'>Content</span>
                    <textarea 
                        className='content-text form-control'
                        name="content"
                        placeholder="내용"
                        onChange={onChange}
                        value={content}
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
                            onChange={onChange}
                            value={startDate}
                            min={todayValue}
                        ></input>
                        <input
                            type='date'
                            name='endDate'
                            className='date-end-text form-control'
                            onChange={onChange}
                            value={endDate}
                            min={todayValue}
                        ></input>
                    </div>
                </div>
                {/* 이미지 업로드 */}
                <div className='imageLoad'>
                    <label for="inputFile"><img src="./images/file.png"></img></label>
                    <img onClick={(e) => view(e)} src="./images/preview.png" className="previewBtn"></img>
                    <input 
                        type='file'
                        name='image'
                        id="inputFile"
                        onChange={onChange}
                    ></input>
                    <img src="./images/image.png" className="image"></img>
                    <img src={img} className='previewImg'></img>
                </div>
            </div>
        </div>
    );
}

export default AddPopup;