import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../../store/features/todosSlice";

const AddTodo = () => {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const text = formData.get("text");
		const newTodo = {
			id: uuid(),
			text,
		};
		dispatch(addTodo(newTodo));
		e.target.reset();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" name="text" />
				<button>Add Todo</button>
			</form>
		</div>
	);
};

export default AddTodo;
