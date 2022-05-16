import React, { useContext } from 'react';
import ModifyPopup from "./ModifyPopup"
import { useState } from "react"
import { TitleText } from '../context/TitleText';
import { ContentText } from '../context/ContentText';
import { DateText } from '../context/DateText';
import { ImageText } from '../context/ImageText';
import { Position } from '../context/Position';


const User = ({ user }) => {
  const {title, setTitle} = useContext(TitleText);
  const {content, setContent} = useContext(ContentText);
  const {date, setDate} = useContext(DateText);
  const {img, setImg} = useContext(ImageText);
  const {position, setPosition} = useContext(Position);

  // 수정 팝업 열기
  function modify (e) {
    let modifyPopup = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0];
    modifyPopup.style.visibility = 'visible';
    modifyPopup.style.opacity = '1';
    let background = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[1];
    background.style.visibility = 'visible';
    background.style.opacity = '1';

    // 위치와 해당 값 저장
    let position = e;
    setPosition(position);
    let title = e.target.parentElement.parentElement.parentElement.children[1].children[0].innerText.slice(36);
    setTitle(title);
    let content = e.target.parentElement.parentElement.parentElement.children[1].children[1].innerText.slice(34);
    setContent(content);
    let date = e.target.parentElement.parentElement.parentElement.children[1].children[2].innerText.slice(35);
    setDate(date);
    let img = e.target.parentElement.parentElement.children[0].innerHTML.slice(10, -2);
    setImg(img);

  }
  return (
    <div className='list-box'>
      <div className='image-box' onClick={(e) => imageHide(e)}>
        <div className='image'><img src={user.image}></img></div>
        <img src="./images/delete.png" className="delete" onClick={(e) => eliminate(e)}></img>
        <div><img src="./images/modify.png" className="modify" onClick={(e) => modify(e)}></img></div>
      </div>
      <div className='text-box'  onClick={(e) => textHide(e)}>
        <div className='title'>
          <span className='list-head'>-------------- Title --------------</span> <br />
          {user.title}
        </div>
        <div className='content'>
          <span className='list-head'>------------ Content ------------</span> <br />
          {user.content}
        </div>
        <div className='date'>
          <span className='list-head'>-------------- Date --------------</span> <br />
          <span className="date-text">{user.startDate} ~ {user.endDate}</span>
        </div>
      </div>
      <div className='complte'>
        <div>
          <span className='list-head'>----------- Complete -----------</span>
        </div>
        <img src='./images/checkBox.png' className='checkBox' onClick={(e) => check(e)} ></img>
        <img src='./images/checkedBox.png' className='checkedBox' onClick={(e) => unCheck(e)}></img>
      </div>
    </div>
  );
}

function MainText({ users }) {
  // 기존 값
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState("");
  // 위치 값
  const [position, setPosition] = useState("");
  
  return (
    <Position.Provider value={{position, setPosition}}>
      <ImageText.Provider value={{img, setImg}}>
        <DateText.Provider value={{date, setDate}}>
          <ContentText.Provider value={{content, setContent}}>
            <TitleText.Provider value={{title, setTitle}}>
            <div>
              <div className='slider'
              onMouseDown={(e) => mouseDown(e)} 
              onMouseMove={(e) => mouseMove(e)}>
                <div className='main-text'>
                  {users.map(user => (<User user={user} key={user.id}/>))}
                </div>
              </div>
              <ModifyPopup text={{title, content, date, img, position}}/>
            </div>
            </TitleText.Provider>
          </ContentText.Provider>
        </DateText.Provider>
      </ImageText.Provider>
    </Position.Provider>
  );
}

// 텍스트 표지 닫고 이미지 표지 열기
function textHide (e){
  let text = e.target.parentElement.parentElement.children[1];
  text.style.display = 'none';
  let complte = e.target.parentElement.parentElement.children[2];
  complte.style.display = 'none';
  let img = e.target.parentElement.parentElement.children[0];
  img.style.display = 'block';
}
// 이미지 표지 닫고 텍스트 표지 열기
function imageHide (e) {
  let text = e.target.parentElement.children[1];
  text.style.display = 'block';
  let complte = e.target.parentElement.children[2];
  complte.style.display = 'block';
  let img = e.target;
  img.style.display = 'none';
}
// Complete 체크 하기
function check(e) {
  let checkBox = e.target
  checkBox.style.display = 'none';
  let checkedBox = e.target.parentElement.children[2];
  checkedBox.style.display = 'block';
  let list = e.target.parentElement.parentElement;
  list.style.backgroundColor = 'green';
  let image = e.target.parentElement.parentElement.children[0];
  image.style.backgroundColor = 'green';
}
// Complete 체크 해제
function unCheck(e) {
  let checkedBox = e.target;
  checkedBox.style.display = 'none';
  let checkBox = e.target.parentElement.children[1];
  checkBox.style.display = 'block';
  let list = e.target.parentElement.parentElement;
  list.style.backgroundColor = 'white';
  let image = e.target.parentElement.parentElement.children[0];
  image.style.backgroundColor = 'white';
}

// 삭제하기
function eliminate(e) {
  let listBox = e.target.parentElement.parentElement;
  listBox.remove();
}

// 슬라이드
let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".main-text");
let pressed = false;
let startx =[];
let x = [];

function mouseDown (e) {
  startx = e.clientX - innerSlider.offsetLeft;
  slider.style.cursor = "grabbing";
  pressed = true;
}
window.addEventListener("mouseup", () => {
  pressed = false;
})
function mouseMove (e) {
  if (!pressed) return 
  e.preventDefault();
  x = e.clientX;
  innerSlider.style.left = x-startx + `px`;
  checkboundary();
}

function checkboundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
}
  

export default MainText;