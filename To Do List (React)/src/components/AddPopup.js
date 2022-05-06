import { useRef, useState } from "react"
import React from 'react';
import DatePicker from "react-datepicker";

const AddPopup = ({inputs, onChange, startDatechange,  endDatechange, onCreate }) => {
    const imgRef = useRef()
    const imgFileRef = useRef()

    // 그림 미리보기
    const view = (e) => {
        let basicImg = e.target.parentElement.children[3];
        basicImg.style.display = 'none'
        const imgUrl = URL.createObjectURL(imgFileRef.current.files[0]);
        imgRef.current.src = imgUrl
    }

    return (
        <div className='popup'>
            <div className='popup-head'>
                <span>Add The List</span>
                <img 
                    src='./images/save_btn.png'
                    alt="추가 버튼"
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
                        value={inputs.title}
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
                        value={inputs.content}
                    ></textarea>
                </div>
                {/* 날짜 */}
                <div className='popup-date'>
                    <span className='popup-text'>Start Date</span>
                    <span className='popup-text'>~</span> 
                    <span className='popup-text'>End Date</span> 
                    <div className='d-flex'>
                        <DatePicker
                            value={inputs.startDate} 
                            className='date-start-text form-control'
                            dateFormat="yyyy년 MM월 dd일"
                            minDate={new Date()}
                            onSelect={startDatechange}
                        />
                        <DatePicker
                            value={inputs.endDate} 
                            className='date-end-text form-control'
                            dateFormat="yyyy년 MM월 dd일"
                            minDate={new Date()}
                            onSelect={endDatechange}
                        />
                    </div>
                </div>
                {/* 이미지 업로드 */}
                <div className='imageLoad'>
                    <label for="inputFile"><img src="./images/file.png" alt="파일 버튼"></img></label>
                    <img onClick={(e) => view(e)} src="./images/preview.png" className="previewBtn"></img>
                    <input 
                        type='file'
                        name='image'
                        id="inputFile"
                        onChange={onChange}
                        ref={imgFileRef}
                    ></input>
                    <img src="./images/image.png" className="image" alt="기본 이미지"></img>
                    <img className='previewImg' ref={imgRef} alt="이미지 미리보기"></img>
                </div>
            </div>
        </div>
    );
}

export default AddPopup;