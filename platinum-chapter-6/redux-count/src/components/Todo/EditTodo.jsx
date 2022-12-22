import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../../store/features/todosSlice";

const EditTodo = ({ todo, setShowEdit }) => {
	const dispatch = useDispatch();
	const [textEditTodo, setTextEditTodo] = useState(todo.text);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const text = formData.get("text");
		const { id } = todo;
		dispatch(editTodo({ id, text }));
		setShowEdit(false);
		e.target.reset();
	};

	return (
		<div>
			<h2>EditTodo</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="text"
					value={textEditTodo}
					onChange={(e) => setTextEditTodo(e.target.value)}
				/>
				<button type="submit">Save</button>
			</form>
		</div>
	);
};

export default EditTodo;
