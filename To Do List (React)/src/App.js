import { useState } from "react"
import Header from "./components/Header"
import AddPopup from "./components/AddPopup"
import MainText from "./components/MainText"
import './css/header.css'
import './css/MainText.css'
import './css/AddPopup.css'
import './css/ModifyPopup.css'

const App = () => {
  const [inputs, setInputs] = useState({
    title : "",
    content : "",
    startDate : "",
    endDate : "",
    image : "",
  });
  
  const [users, setUsers] = useState([]);
  const { title, content, startDate, endDate, image } = inputs;
  
  // 추가 팝업 값이 바뀔 때
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'image') {
      let img = e.target.files[0];
      img = URL.createObjectURL(img);
      setInputs({
        ...inputs,
        [name]: img
      });
    } else {
      setInputs({
        ...inputs,
        [name]: value
      });
    }
  };
  // 추가 팝업 업로드 했을 때
  const onCreate = () => {
    const user = {
      title,
      content,
      startDate,
      endDate,
      image
    };
    setUsers(users.concat(user));

    setInputs({
      title : "",
      content : "",
      startDate : "",
      endDate : "",
      image : ""
    });
  };
  return (
    <div id="wrap">
      <Header />
      <AddPopup 
        title={title}
        content={content}
        startDate ={startDate}
        endDate ={endDate}
        image ={image}
        onChange={onChange}
        onCreate={onCreate} />
      <MainText users={users} />
    </div>
  );
}


export default App;