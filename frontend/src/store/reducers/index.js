// reducers/index.js
import { combineReducers } from "redux";

import authReducer from "./authReducer";
import tripReducer from "./tripReducer";

export default combineReducers({
  auth: authReducer,
  trips: tripReducer,
});
