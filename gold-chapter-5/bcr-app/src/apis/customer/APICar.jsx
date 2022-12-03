import axiosInstance from "../../configs/axiosInstance";

const APICar = {
	searchCar: async ({ name, category, isRented, minPrice, maxPrice }) => {
		const params = {};

		if (name) params["name"] = name;
		if (category) params["category"] = category;
		if (isRented) params["isRented"] = isRented;
		if (minPrice) params["minPrice"] = minPrice;
		if (maxPrice) params["maxPrice"] = maxPrice;

		const res = await axiosInstance.get("/car", { params });
		return res;
	},
};

export default APICar;
