import axios from "axios";
import CONST from "../utils/constants";
import { requestHandler } from "./interceptors";

const axiosAdminInstance = axios.create({
  baseURL: CONST.BASE_URL_ADMIN,
});

const axiosCustomerInstance = axios.create({
  baseURL: CONST.BASE_URL_CUSTOMER,
});

axiosAdminInstance.interceptors.request.use(requestHandler);
axiosCustomerInstance.interceptors.request.use(requestHandler);

export { axiosAdminInstance, axiosCustomerInstance };
