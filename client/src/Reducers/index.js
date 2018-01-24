import { combineReducers } from "redux";
import currentUserReducer from "./currentUserReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  currentUser: currentUserReducer,
  form: formReducer
});
