import { useCallback } from "react";
import { useDispatch } from "react-redux";
import AddForm from "../components/AddForm";
import { addInputs } from "../redux/actions";

export default function UserFormConatiner() {
  const dispatch = useDispatch();

  const add = useCallback(
    (title, content, startDate, endDate, imageUrl) => {
      dispatch(addInputs(title, content, startDate, endDate, imageUrl))
    }, [dispatch]
  )

  return <AddForm add={add}/>
}