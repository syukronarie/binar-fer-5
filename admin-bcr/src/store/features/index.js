import { combineReducers } from "redux";
import rent from "./rentSlice";

const rootReducer = combineReducers({
  rent,
});

export default rootReducer;
