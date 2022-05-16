import { createStore } from "redux";
import user from './reducers/reducer'

const store = createStore(user);

export default store;