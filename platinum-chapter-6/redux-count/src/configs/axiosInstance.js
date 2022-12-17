import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});

export default axiosInstance;
