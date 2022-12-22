import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../store/features/todosSlice";
import EditTodo from "./EditTodo";

const Todos = () => {
	const todos = useSelector((state) => state.todos);
	const [editTodo, setEditTodo] = useState(null);
	const [showEdit, setShowEdit] = useState(false);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Todos</h1>
			<div>
				{todos.map((todo) => (
					<div key={todo.id} className="d-flex direction-row">
						<p>{todo.text}</p>
						<button onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
							delete
						</button>
						<button
							onClick={() => {
								setEditTodo(todo);
								setShowEdit(!showEdit);
							}}
						>
							edit
						</button>
					</div>
				))}

				{showEdit && <EditTodo todo={editTodo} setShowEdit={setShowEdit} />}
			</div>
		</div>
	);
};

export default Todos;
