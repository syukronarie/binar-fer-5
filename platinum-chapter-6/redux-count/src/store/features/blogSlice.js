import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogAPI from "../../apis/blogAPI";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	try {
		const res = await blogAPI.getAllPosts();
		return res.data;
	} catch (error) {
		throw error;
	}
});

export const fetchPostById = createAsyncThunk(
	"posts/fetchPostById",
	async (id) => {
		try {
			const res = await blogAPI.getPostById(id);
			return res.data;
		} catch (error) {
			throw error;
		}
	}
);

const initialState = {
	data: [],
	dataById: {},
	loading: "idle",
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			if (state.loading === "pending") {
				state.loading = "idle";
				state.data = action.payload;
			}
		});
		builder.addCase(fetchPosts.pending, (state, action) => {
			if (state.loading === "idle") {
				state.loading = "pending";
			}
		});
		builder.addCase(fetchPosts.rejected, (state, action) => {
			if (state.loading === "pending") {
				state.loading = "idle";
				state.error = action.error;
			}
		});
		builder.addCase(fetchPostById.fulfilled, (state, action) => {
			if (state.loading === "pending") {
				state.loading = "idle";
				state.dataById = action.payload;
			}
		});
		builder.addCase(fetchPostById.pending, (state, action) => {
			if (state.loading === "idle") {
				state.loading = "pending";
			}
		});
		builder.addCase(fetchPostById.rejected, (state, action) => {
			if (state.loading === "pending") {
				state.loading = "idle";
				state.error = action.error;
			}
		});
	},
});

export default postsSlice.reducer;
