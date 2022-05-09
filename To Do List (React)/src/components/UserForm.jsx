import { useRef, useState } from "react"
import DatePicker from "react-datepicker";

export default function UserForm ({ add }) {
  const titleRef = useRef();
  const contentRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const imageUrlRef = useRef();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  return (
    <div className='popup'>
      <div className='popup-head'>
        <span>Add The List</span>
        <img 
            src='./images/save_btn.png'
            alt="업로드 버튼"
            className='btn-save'
            onClick={upload}
        ></img>
    </div>
    {/* 제목 */}
    <div className='popup-body'>
      <div className='popup-title'>
        <span className='popup-text'>Title</span>
          <input 
              type='text'
              className='title-text form-control' 
              placeholder="제목"
              ref={titleRef}
          ></input>
      </div>
      {/* 내용 */}
      <div className='popup-content'>
        <span className='popup-text'>Content</span>
          <textarea 
              className='content-text form-control'
              name="content"
              placeholder="내용"
              ref={contentRef}
          ></textarea>
      </div>
      {/* 날짜 */}
      <div className='popup-date'>
          <span className='popup-text'>Start Date</span>
          <span className='popup-text'>~</span> 
          <span className='popup-text'>End Date</span> 
          <div className='d-flex'>
            <DatePicker
              selected={startDate}
              className='date-start-text form-control'
              dateFormat="yyyy년 MM월 dd일"
              minDate={new Date()}
              ref={startDateRef}
              onChange={(date) => {setStartDate(date)}}
            />
            <DatePicker
              selected={endDate}
              className='date-end-text form-control'
              dateFormat="yyyy년 MM월 dd일"
              minDate={new Date()}
              ref={endDateRef}
                onChange={(date) => {setEndDate(date)}}
            />
          </div>
        </div>
        {/* 이미지 업로드 */}
        <div className='imageLoad'>
          <label for="inputFile"><img src="./images/file.png" alt="파일 버튼"></img></label>
          <img 
            src="./images/preview.png"
            className="previewBtn"
            onClick={preViewImage}
            alt="미리보기"></img>
          <input 
              type='file'
              id="inputFile"
              ref={imageUrlRef}
          ></input>
           <img src="./images/image.png" className="image" alt="기본 이미지"></img>
          <img className='previewImg' alt="이미지 미리보기"></img>
        </div>
      </div>
    </div>
  );

  function upload() {
    const titleValue = titleRef.current.value;
    const contentValue = contentRef.current.value;
    const startDateValue = startDateRef.current.input.value;
    const endDateValue = endDateRef.current.input.value;
    let imageurl;
    if (imageUrlRef.current.files[0] !== undefined) {
      imageurl = URL.createObjectURL(imageUrlRef.current.files[0]);
      
    } else {
      imageurl = null
    }
    add(titleValue, contentValue, startDateValue, endDateValue, imageurl);
    reset();

  }

  function preViewImage(e) {
    const imageurl = URL.createObjectURL(imageUrlRef.current.files[0])
    const prevImage = e.target.parentElement.children[3];
    prevImage.src = imageurl
  }

  function reset() {
    titleRef.current.value = ""
    contentRef.current.value = ""
    setStartDate("")
    setEndDate("")
  }
}