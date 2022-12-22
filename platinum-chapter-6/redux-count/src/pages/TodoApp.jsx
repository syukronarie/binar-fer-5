import React from "react";
import AddTodo from "../components/Todo/AddTodo";
import Todos from "../components/Todo/Todos";

const TodoApp = () => {
	return (
		<>
			<AddTodo />
			<Todos />
		</>
	);
};

export default TodoApp;
