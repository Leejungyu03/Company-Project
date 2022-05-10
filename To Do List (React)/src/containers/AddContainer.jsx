import { useSelector } from "react-redux";
import Add from "../components/Add";


function AddContainer() {
  const inputs = useSelector((state) => state.inputs);

  return <Add inputs={inputs}/>
}

export default AddContainer;