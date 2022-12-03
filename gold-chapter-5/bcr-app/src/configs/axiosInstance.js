import axios from "axios";
import CONST from "../utils/Constants";

const axiosInstance = axios.create({
	baseURL: CONST.CUSTOMER_BASE_URL,
});

export default axiosInstance;
