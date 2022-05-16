import { useSelector } from "react-redux";
import Header from "../components/Header";

export default function UserFormConatiner() {
  const positions = useSelector((state) => state.positions)

  return <Header positions={positions}/>
}