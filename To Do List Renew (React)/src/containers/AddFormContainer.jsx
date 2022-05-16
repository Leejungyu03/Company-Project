import { useCallback } from "react";
import { useDispatch } from "react-redux";
import AddForm from "../components/AddForm";
import { addInputs, setAddPopup, setModifyPopup, setCardView } from "../redux/actions";

export default function UserFormConatiner() {
  const dispatch = useDispatch();

  const add = useCallback(
    (title, content, startDate, endDate, imageUrl) => {
      dispatch(addInputs(title, content, startDate, endDate, imageUrl))
    }, [dispatch]
  )

  const addPopupPosition = useCallback(
    (addPopup) => {
      dispatch(setAddPopup(addPopup))
    }, [dispatch]
  );

  const modifyPopupPosition = useCallback(
    (modifyPopup) => {
      dispatch(setModifyPopup(modifyPopup))
    }, [dispatch]
  );

  const cardViewPosition = useCallback(
    (cardView) => {
      dispatch(setCardView(cardView))
    }, [dispatch]
  );
  const reduxFunction = {
    add,
    addPopupPosition,
    modifyPopupPosition,
    cardViewPosition
  };

  return <AddForm reduxFunction={reduxFunction} />
}