import ModifyPopup from "./ModifyPopup"
import Add from "./Add"
import { useState } from "react"


function MainText({ users }) {
  // 기존 값
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState("");
  const [position, setPosition] = useState("");

  const [inputs, setInputs] = useState({
    setTitle: setTitle,
    setContent: setContent,
    setDate: setDate,
    setImg: setImg,
  });
  
  return (
    <Position.Provider value={{position, setPosition}}>
      <ImageText.Provider value={{inputs, setInputs}}>
            <div>
              <div className='slider'
              onMouseDown={(e) => mouseDown(e)} 
              onMouseMove={(e) => mouseMove(e)}>
                <div className='main-text'>
                  {users.map(user => (<Add user={user} key={user.id}/>))}
                </div>
              </div>
              <ModifyPopup text={{title, content, date, img, position}}/>
            </div>
      </ImageText.Provider>
    </Position.Provider>
  );
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