import { combineReducers } from "redux";
import cart from "./cartSlicing";

const rootReducer = combineReducers({
	cart,
});

export default rootReducer;
