import Cookies from "js-cookie";
import { axiosAdminInstance } from "../../configs/axiosInstance";

const APIAuth = {
	login: async ({ email, password }) => {
		try {
			const res = await axiosAdminInstance.post("/auth/login", {
				email,
				password,
			});
			Cookies.set("accessToken", res.data.access_token);
		} catch (error) {
			throw Error(error);
		}
	},
};

export default APIAuth;
