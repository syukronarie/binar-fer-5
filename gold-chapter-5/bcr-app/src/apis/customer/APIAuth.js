import Cookies from "js-cookie";
import { axiosCustomerInstance } from "../../configs/axiosInstance";

const APIAuth = {
	login: async ({ email, password }) => {
		try {
			const res = await axiosCustomerInstance.post("/auth/login", {
				email,
				password,
			});
			Cookies.set("accessToken", res.data.access_token);
		} catch (error) {
			throw Error(error);
		}
	},
	signUp: async ({ name, email, password }) => {
		try {
			const res = await axiosCustomerInstance.post("/auth/register", {
				name,
				email,
				password,
			});
			return res;
		} catch (error) {
			throw Error(error);
		}
	},
};

export default APIAuth;
