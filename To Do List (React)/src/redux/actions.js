export const ADD_INPUTS = 'ADD_INPUTS';
export const SET_POSITION_ADDPOPUP = 'SET_POSITION_ADDPOPUP';
export const SET_POSITION_MODIFYPOPUP = 'SET_POSITION_MODIFYPOPUP';
export const SET_POSITION_CARDVIEW = 'SET_POSITION_CARDVIEW';

// {type: ADD_INPUTS, title: "", content: "", startDate: "", endDate: "", image: "" }
export function addInputs(title, content, startDate, endDate, imageUrl) {
  return {
    type: ADD_INPUTS,
    title,
    content,
    startDate,
    endDate,
    imageUrl,
  }
}

export function setAddPopup(addPopup) {
  return {
    type: SET_POSITION_ADDPOPUP,
    addPopup,
  }
}

export function setModifyPopup(modifyPopup) {
  return {
    type: SET_POSITION_MODIFYPOPUP,
    modifyPopup,
  }
}

export function setCardView(cardView) {
  return {
    type: SET_POSITION_CARDVIEW,
    cardView,
  }
}