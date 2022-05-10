import AddContainer from "./containers/AddContainer"
import AddFormContainer from "./containers/AddFormContainer"
import Header from "./components/Header"
import MainText from "./components/MainText"
import './css/header.css'
import './css/ModifyPopup.css'
import "react-datepicker/dist/react-datepicker.css"

const App = () => {

  return (
    <div id="wrap">
      <Header />
      <AddContainer />
      <AddFormContainer />
      {/* <MainText users={users} /> */}
    </div>
  );
}

export default App;