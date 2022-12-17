import { combineReducers } from "redux";
import count from "./countSlice";
import todos from "./todosSlice";
import posts from "./blogSlice";

const rootReducers = combineReducers({
	count,
	todos,
	posts,
});

export default rootReducers;
