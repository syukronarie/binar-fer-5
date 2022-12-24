import Auth from "../utils/Auth";

export const isHandlerEnabled = (config) => {
	return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
		? false
		: true;
};

export const requestHandler = async (config) => {
	if (isHandlerEnabled(config)) {
		const token = Auth.getAccessToken();
		if (token) {
			config.headers.access_token = token;
		}
	}
	return config;
};

export const successHandler = (response) => {
	if (isHandlerEnabled(response)) {
		if (response.status === 200) {
			return response;
		}
	}
	return response;
};

export const errorHandler = (error) => {
	return Promise.reject({ ...error });
};
