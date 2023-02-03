import React from "react";
import { Provider } from "react-redux";
import SetupRouter from "./routers/SetupRouter";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <SetupRouter />
    </Provider>
  );
}

export default App;
