import {faDownload, faEye, faFileImage, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react"
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import styles from "../css/AddForm.module.scss"

export default function UserForm ({ reduxFunction }) {
  const titleRef = useRef();
  const contentRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const imageUrlRef = useRef();
  const prevImageUrlRef = useRef();
  const prevImageRef = useRef();
  const addPopupPosition = useRef();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  useEffect(() => {
    reduxFunction.addPopupPosition(addPopupPosition.current)
  })

  const preViewImage = () =>  {
    if (imageUrlRef.current.files[0] !== undefined && imageUrlRef.current.files[0].value !== "") {
      prevImageUrlRef.current.parentElement.children[3].style.visibility = "hidden"
      const imageurl = URL.createObjectURL(imageUrlRef.current.files[0])
      prevImageUrlRef.current.src = imageurl;
      prevImageUrlRef.current.style.display = "inline"
    } else {
      alert("이미지를 넣어주세요")
    }
  }

  const upload = () => {
    const titleValue = titleRef.current.value;
    const contentValue = contentRef.current.value;
    const startDateValue = startDateRef.current.input.value;
    const endDateValue = endDateRef.current.input.value;
    let imageurl;
    if (imageUrlRef.current.files[0] !== undefined && imageUrlRef.current.files[0].value !== "") {
      imageurl = URL.createObjectURL(imageUrlRef.current.files[0]);
    } else {
      imageurl = null
    }
    reduxFunction.add(titleValue, contentValue, startDateValue, endDateValue, imageurl);
    reset();
  }

  const reset = () => {
    titleRef.current.value = null;
    contentRef.current.value = null;
    setStartDate(null);
    setEndDate(null);
    imageUrlRef.current.files[0].value = "";
    prevImageUrlRef.current.parentElement.children[3].style.visibility = "visible"
    prevImageUrlRef.current.style.display = "none"
  }

  return (
    <div className={styles.popup} ref={addPopupPosition}>
      <div className={styles.head}>
        <div>
          <FontAwesomeIcon 
            icon={faDownload} 
            onClick={upload}
            className={styles.saveBtn}
          />
        </div>
        <span className={styles.head__text}>Add The List</span>
      </div>
      {/* 제목 */}
      <div className={styles.body}>
        <div className={styles.body__title}>
          <span className={styles.body__text}>Title</span>
            <Form.Control 
              type="text"
              className={styles.title__form}
              placeholder="제목"
              ref={titleRef}
            />
        </div>
        {/* 내용 */}
        <div className={styles.body__content}>
          <span className={styles.body__text}>Content</span>
          <Form.Control 
            as="textarea"
            className={styles.content__form}
            placeholder="내용"
            ref={contentRef}
          />
        </div>
        {/* 날짜 */}
        <div className={styles.body__date}>
          <span className={styles.date__text}>Start Date</span>
          <span className={styles.date__text}>~</span> 
          <span className={styles.date__text}>End Date</span> 
          <div className='d-flex'>
            <DatePicker
              selected={startDate}
              className='date-start-text'
              dateFormat="yyyy년 MM월 dd일"
              minDate={new Date()}
              ref={startDateRef}
              onChange={(date) => {setStartDate(date)}}
            />
            <DatePicker
              selected={endDate}
              className='date-end-text'
              dateFormat="yyyy년 MM월 dd일"
              minDate={new Date()}
              ref={endDateRef}
              onChange={(date) => {setEndDate(date)}}
            />
          </div>
        </div>
        {/* 이미지 업로드 */}
        <div className={styles.body__image}>
          <label for={styles.inputFile}>
            <FontAwesomeIcon 
              icon={faFileImage} 
              className={styles.image__upload}
            />
          </label>
          <FontAwesomeIcon
            icon={faEye}
            className={styles.image__previewBtn}
            onClick={preViewImage}
          />
          <input 
              type='file'
              id={styles.inputFile}
              ref={imageUrlRef}
          />
          <FontAwesomeIcon
            icon={faImage}
            className={styles.image__basicImage}
            ref={prevImageRef}
          />
          <img 
            src="./images/image.png"
            className={styles.image__previewImage}
            ref={prevImageUrlRef}
            alt="미리보기" />
        </div>
      </div>
    </div>
  );
}