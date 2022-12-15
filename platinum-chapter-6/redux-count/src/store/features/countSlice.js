import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const count = createSlice({
	name: "count",
	initialState,
	reducers: {
		increment: (state, action) => {
			state += action.payload;
			return state;
		},
		decrement: (state, action) => {
			state -= action.payload;
			return state;
		},
	},
});

export const { increment, decrement } = count.actions;
export default count.reducer;
