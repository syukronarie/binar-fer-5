import { axiosAdminInstance, axiosCustomerInstance } from "../configs/axiosInstance";
import Auth from "../utils/Auth";

const APIAuth = {
  loginAdmin: async ({ email, password }) => {
    try {
      const respond = await axiosAdminInstance.post("/auth/login", {
        email,
        password,
      });
      Auth.storeUserInfoToCookies(respond.data.access_token);
      return respond.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  loginCustomer: async ({ email, password }) => {
    try {
      const respond = await axiosCustomerInstance.post("/auth/login", {
        email,
        password,
      });
      Auth.storeUserInfoToCookies(respond.data.access_token);
      return respond.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default APIAuth;
