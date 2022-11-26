import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoPage from "./pages/TodoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<TodoPage />
	</React.StrictMode>
);
