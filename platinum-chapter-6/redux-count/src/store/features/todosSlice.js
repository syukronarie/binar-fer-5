import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todos = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
			return state;
		},
		deleteTodo: (state, action) => {
			const { id } = action.payload;
			return state.filter((val) => val.id !== id);
		},
		editTodo: (state, action) => {
			const { id, text } = action.payload;
			state.map((todo) => {
				if (todo.id === id) {
					return (todo.text = text);
				}
				return todo;
			});
			return state;
		},
	},
});

export const { addTodo, deleteTodo, editTodo } = todos.actions;
export default todos.reducer;
