import { combineReducers } from "redux";
import count from "./countSlice";

const rootReducers = combineReducers({
  count,
});

export default rootReducers;
