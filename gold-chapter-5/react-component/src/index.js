import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Homepage from "./pages/Homepage";
// import CountApp from "./pages/CountApp";
// import SimpleCalculator from "./pages/SimpleCalculator";
// import LifeCycleInClass from "./pages/LifeCycleInClass";
import FunctLifeCycle from "./pages/FunctLifeCycle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	// {/* <Homepage /> */}
	// {/* <CountApp /> */}
	// {/* <SimpleCalculator /> */}
	// <LifeCycleInClass />
	<FunctLifeCycle />
	// </React.StrictMode>
);
