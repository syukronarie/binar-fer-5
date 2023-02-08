import { combineReducers } from "redux";
import rent from "./rentSlice";
import searchCars from "./searchCarsSlice";

const rootReducer = combineReducers({
  rent,
  searchCars,
});

export default rootReducer;
