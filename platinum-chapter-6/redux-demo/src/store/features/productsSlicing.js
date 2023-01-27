import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	data: null,
	loading: "idle",
};

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
	try {
		const result = await axios.get("https://dummyjson.com/products");
		return result.data;
	} catch (error) {
		throw error;
	}
});

const productsSlice = createSlice({
	name: "products",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			if (state.loading === "pending") {
				state.loading = "idle";
				state.data = action.payload;
			}
		});
		builder.addCase(fetchProducts.pending, (state, action) => {
			if (state.loading === "idle") {
				state.loading = "pending";
			}
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			if (state.loading === "pending") {
				state.loading = "idle";
				state.error = action.error;
			}
		});
	},
});

export default productsSlice.reducer;
