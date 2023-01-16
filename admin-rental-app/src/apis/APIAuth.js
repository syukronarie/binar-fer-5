import axiosInstance from "../configs/axiosInstance";
import Auth from "../utils/Auth";

const APIAuth = {
  login: async ({ email, password }) => {
    try {
      const respond = await axiosInstance.post("/auth/login", {
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
