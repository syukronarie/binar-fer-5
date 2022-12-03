import axios from "axios";
import Auth from "../utils/Auth";
import CONST from "../utils/Constants";

const axiosCustomerInstance = axios.create({
	baseURL: CONST.CUSTOMER_BASE_URL,
});

const axiosAdminInstance = axios.create({
	baseURL: CONST.ADMIN_BASE_URL,
	headers: {
		access_token: Auth.getToken(),
	},
});

export { axiosCustomerInstance, axiosAdminInstance };
