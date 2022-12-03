import React, { useState } from "react";

const INITIAL_TODOS = [{ id: 1, text: "Learning js", isCompleted: false }];

const TodoList = ({
	todos,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleted,
}) => {
	return (
		<div className="todos">
			{todos.length > 0 ? (
				todos.map((todo) => (
					<div className="todos-item" key={todo.id}>
						<p
							onClick={() => handleCompleted(todo.id)}
							className={`${
								todo.isCompleted ? "todo-completed" : "todo-incompleted"
							}`}
						>
							{todo.text}
						</p>
						<div>
							<button onClick={() => handleUpdateTodo(todo)}>✍️ Edit</button>
							<button onClick={() => handleDeleteTodo(todo.id)}>
								␡ Delete
							</button>
						</div>
					</div>
				))
			) : (
				<h2>Todo is empty, please create your todo</h2>
			)}
		</div>
	);
};

const ModalUpdateTodo = ({
	showModal,
	handleSubmitUpdateTodo,
	tempUpdateTodo,
	handleChangeTodo,
	handleShowModal,
}) => {
	return (
		showModal && (
			<form className="modal" onSubmit={handleSubmitUpdateTodo}>
				<div className="modal-update">
					<input
						type="text"
						name="todo"
						id="todo"
						className="input"
						value={tempUpdateTodo.text}
						onChange={handleChangeTodo}
					/>
					<button className="button" type="submit">
						Update Todo
					</button>
					<button
						onClick={() => {
							const confirm = window.confirm("Are you want to cancel?");
							if (confirm) handleShowModal();
						}}
						type="reset"
					>
						Cancel
					</button>
				</div>
			</form>
		)
	);
};

const TodoPage = () => {
	const [todos, setTodos] = useState(INITIAL_TODOS);
	const [showModal, setShowModal] = useState(false);
	const [tempUpdateTodo, setTempUpdateTodo] = useState(null);

	const handleOnSubmit = (e, setTodos) => {
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

	const handleUpdateTodo = (todo) => {
		setTempUpdateTodo(todo);
		handleShowModal();
	};

	const handleShowModal = () => {
		setShowModal(!showModal);
	};

	const handleChangeTodo = (e) => {
		const text = e.target.value;
		const { id, isCompleted } = tempUpdateTodo;
		setTempUpdateTodo({ id, text, isCompleted });
	};

	const handleSubmitUpdateTodo = (e) => {
		e.preventDefault();
		setTodos((todos) => {
			return todos.map((todo) => {
				if (todo.id === tempUpdateTodo.id) {
					todo = tempUpdateTodo;
				}
				return todo;
			});
		});
		handleShowModal();
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

			<TodoList
				todos={todos}
				handleCompleted={handleCompleted}
				handleDeleteTodo={handleDeleteTodo}
				handleUpdateTodo={handleUpdateTodo}
			/>

			<ModalUpdateTodo
				showModal={showModal}
				tempUpdateTodo={tempUpdateTodo}
				handleChangeTodo={handleChangeTodo}
				handleShowModal={handleShowModal}
				handleSubmitUpdateTodo={handleSubmitUpdateTodo}
			/>
		</div>
	);
};

export default TodoPage;
