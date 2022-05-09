import { ADD_INPUTS } from "../actions";

const initialState = [];

export default function inputs(previousState = initialState, action) {
  if (action.type === ADD_INPUTS) {
    return [...previousState, {
      title: action.title,
      content: action.content,
      startDate: action.startDate,
      endDate: action.endDate,
      imageUrl: action.imageUrl
      }
    ] 
  }

  return previousState;
}