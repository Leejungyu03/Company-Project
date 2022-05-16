import AddContainer from "./containers/AddContainer"
import AddFormContainer from "./containers/AddFormContainer"
import HeaderContainer from "./containers/HeaderContainer"
import styles from "./css/App.module.scss"
import './css/ModifyPopup.css'
import "react-datepicker/dist/react-datepicker.css"

const App = () => {

  return (
    <div id={styles.wrap}>
      <HeaderContainer />
      <AddContainer />
      <AddFormContainer />
    </div>
  );
}

export default App;