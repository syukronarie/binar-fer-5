import { axiosCustomerInstance } from "../configs/axiosInstance";

const APICar = {
  getCars: async () => {
    try {
      const result = await axiosCustomerInstance.get("/v2/car");
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default APICar;
