import axiosInstance from "../configs/axiosInstance";

const blogAPI = {
	getAllPosts: async () => {
		try {
			const posts = await axiosInstance.get("/posts");
			return posts;
		} catch (err) {
			throw new Error(err);
		}
	},
	getPostById: async (id) => {
		try {
			const posts = await axiosInstance.get(`/posts/${id}`);
			return posts;
		} catch (err) {
			throw new Error(err);
		}
	},
};

export default blogAPI;
