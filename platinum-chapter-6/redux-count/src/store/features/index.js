import { combineReducers } from "redux";
import count from "./countSlice";
import todos from "./todosSlice";

const rootReducers = combineReducers({
	count,
	todos,
});

export default rootReducers;
