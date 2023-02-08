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
  searchCars: async (params) => {
    try {
      const response = await axiosCustomerInstance.get("/v2/car", { ...params });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default APICar;
