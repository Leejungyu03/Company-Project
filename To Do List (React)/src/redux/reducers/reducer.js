import { combineReducers } from "redux";
import inputs from "./inputs";
import positions from "./position";


const reducer = combineReducers({
  inputs,
  positions,
});

export default reducer;