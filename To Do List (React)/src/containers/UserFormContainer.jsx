import { useCallback } from "react";
import { useDispatch } from "react-redux";
import UserForm from "../components/UserForm";
import { addInputs } from "../redux/actions";

export default function UserFormConatiner() {
  const dispatch = useDispatch();

  const add = useCallback(
    (title, content, startDate, endDate, imageUrl) => {
      dispatch(addInputs(title, content, startDate, endDate, imageUrl))
    }, [dispatch]
  )

  return <UserForm add={add}/>
}