import axios from "axios";
import CONST from "../utils/constants";

const axiosInstance = axios.create({
	baseURL: CONST.BASE_URL,
});

export default axiosInstance;
