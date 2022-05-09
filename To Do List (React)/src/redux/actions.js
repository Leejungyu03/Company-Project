export const ADD_INPUTS = 'ADD_INPUTS';

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