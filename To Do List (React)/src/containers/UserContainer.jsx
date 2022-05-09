import { useSelector } from "react-redux";
import User from "../components/User";


function UserContainer() {
  const inputs = useSelector((state) => state.inputs);

  return <User inputs={inputs}/>
}

export default UserContainer;