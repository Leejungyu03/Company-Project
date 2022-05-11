import { SET_POSITION_ADDPOPUP, SET_POSITION_MODIFYPOPUP, SET_POSITION_CARDVIEW } from "../actions";

const initialState = {};

export default function positions(previousState = initialState, action) {
  if (action.type === SET_POSITION_ADDPOPUP) {
    return {
      addPopup: action.addPopup,
      
    } 
  }

  if (action.type === SET_POSITION_MODIFYPOPUP) {
    return {
      modifyPopup: action.modifyPopup,
      
    } 
  }

  if (action.type === SET_POSITION_CARDVIEW) {
    return {
      cardView: action.cardView,
      
    } 
  }

  return previousState;
}