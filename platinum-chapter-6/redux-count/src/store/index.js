import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./features";

const store = configureStore({
  reducer: rootReducers,
});

export default store;
