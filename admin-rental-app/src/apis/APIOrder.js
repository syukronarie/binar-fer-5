import axiosInstance from "../configs/axiosInstance";

const APIOrder = {
	getListOrders: async ({ page, pageSize }) => {
		// const filter = {
		// 	user_email: asc,
		// 	car_name: asc,
		// 	category: asc,
		// 	price: asc,
		// 	created_at: asc,
		// 	updated_at: asc,
		// 	start_rent_at: asc,
		// 	finish_rent_at: asc,
		// };
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
};

export default APIOrder;
