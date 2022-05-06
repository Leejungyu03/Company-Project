import { useState } from "react"
import Header from "./components/Header"
import AddPopup from "./components/AddPopup"
import MainText from "./components/MainText"
import './css/header.css'
import './css/MainText.css'
import './css/AddPopup.css'
import './css/ModifyPopup.css'
import "react-datepicker/dist/react-datepicker.css"

const App = () => {
  const [inputs, setInputs] = useState({
    title : "",
    content : "",
    startDate : "",
    endDate : "",
    image : "",
  });
  
  // 추가 팝업 값이 바뀔 때
  const onChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'image') {
      const imgUrl = URL.createObjectURL(e.target.files[0]);
      setInputs({
        image: imgUrl
      });
    } else {
      setInputs({
        ...inputs,
        [name]: value
      });
    }
  };
 
  const endDatechange = (e) => {
    let year = e.getFullYear()
      const month = ('0' + (e.getMonth() + 1)).slice(-2);
      const day = ('0' + e.getDate()).slice(-2);
      
      const dateString = year + '-' + month  + '-' + day;
      setInputs({
        ...inputs,
        endDate: dateString
      });
  }

  const startDatechange = (e) => {
    let year = e.getFullYear()
      const month = ('0' + (e.getMonth() + 1)).slice(-2);
      const day = ('0' + e.getDate()).slice(-2);
      
      const dateString = year + '-' + month  + '-' + day;
      setInputs({
        ...inputs,
        startDate: dateString
      });
    console.log(inputs)
  }
  

  // 추가 팝업 업로드 했을 때
  const [users, setUsers] = useState([]);
  const { title, content, startDate, endDate, image } = inputs;
  const onCreate = () => {
    const user = {
      title,
      content,
      startDate,
      endDate,
      image
    };
    setUsers(users.concat(user));

    setInputs({ // inputs 입력후 초기화
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
        inputs = {inputs}
        onChange={onChange}
        onCreate={onCreate}
        startDatechange={startDatechange}
        endDatechange={endDatechange}
        />
      <MainText users={users} />
    </div>
  );
}


export default App;