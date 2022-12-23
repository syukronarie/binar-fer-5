import axiosInstance from "../configs/axiosInstance";

const APIAuth = {
	login: async ({ email, password }) => {
		try {
			const respond = await axiosInstance.post("/auth/login", {
				email,
				password,
			});
			return respond.data;
		} catch (error) {
			throw new Error(error);
		}
	},
};

export default APIAuth;
