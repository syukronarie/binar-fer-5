import axiosInstance from "../configs/axiosInstance";

const APIOrder = {
  getListOrders: async ({ page, pageSize }) => {
    try {
      const params = {};
      if (page) params["page"] = page;
      if (pageSize) params["pageSize"] = pageSize;
      const response = await axiosInstance.get("/v2/order", { params });
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
      const response = await axiosInstance.get("/order/reports", { params });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default APIOrder;
