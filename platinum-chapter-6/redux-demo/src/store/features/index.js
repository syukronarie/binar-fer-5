import { combineReducers } from "redux";
import cart from "./cartSlicing";
import products from "./productsSlicing";

const rootReducer = combineReducers({
	cart,
	products,
});

export default rootReducer;
