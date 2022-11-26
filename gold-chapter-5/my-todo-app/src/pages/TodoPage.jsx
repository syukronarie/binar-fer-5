import React, { useState } from "react";

const INITIAL_TODOS = [{ id: 1, text: "Learning js", isCompleted: false }];

const TodoPage = () => {
	const [todos, setTodos] = useState(INITIAL_TODOS);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const newTodo = formData.get("todo");

		if (newTodo.length < 3)
			return alert("New todo should be minimum 3 characters");

		const todo = {
			id: todos.length + 1,
			text: newTodo,
			isCompleted: false,
		};

		setTodos((state) => [...state, todo]);

		// clear form data
		e.target.reset();
	};

	const handleCompleted = (id) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isCompleted = !todo.isCompleted;
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const handleDeleteTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	return (
		<div className="container">
			<h1>My Todo App</h1>
			<form onSubmit={handleOnSubmit}>
				<input type="text" name="todo" id="todo" className="input" />
				<button className="button" type="submit">
					Add Todo
				</button>
			</form>

			<div className="todos">
				{todos.map((todo) => (
					<div className="todos-item" key={todo.id}>
						<p
							onClick={() => handleCompleted(todo.id)}
							className={`${
								todo.isCompleted ? "todo-completed" : "todo-incompleted"
							}`}
						>
							{todo.text}
						</p>
						<button onClick={() => handleDeleteTodo(todo.id)}>X</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default TodoPage;
