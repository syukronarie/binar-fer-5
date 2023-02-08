import { axiosAdminInstance, axiosCustomerInstance } from "../configs/axiosInstance";

const APIOrder = {
  getListOrders: async ({ currentPage, pageSize }) => {
    try {
      const params = {};
      if (currentPage) params["page"] = currentPage;
      if (pageSize) params["pageSize"] = pageSize;
      const response = await axiosAdminInstance.get("/v2/order", { params });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  getOrderReports: async ({ from, until }) => {
    try {
      const params = {};
      if (from) params["from"] = from;
      if (until) params["until"] = until;
      const response = await axiosAdminInstance.get("/order/reports", { params });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  createOrder: async (startDate, endDate, carId) => {
    try {
      const payload = {};
      payload["start_rent_at"] = startDate;
      payload["finish_rent_at"] = endDate;
      payload["car_id"] = carId;
      const response = await axiosCustomerInstance.post("/order", payload);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  uploadPaymentSlip: async (id, fileSlip) => {
    try {
      const form = new FormData();
      form.set("slip", fileSlip);
      const response = await axiosCustomerInstance.put(`/order/${id}/slip`, form);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default APIOrder;
