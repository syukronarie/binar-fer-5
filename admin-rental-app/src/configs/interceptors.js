/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
/* eslint-disable no-prototype-builtins */
import Auth from "../utils/Auth";

export const isHandlerEnabled = (config) => !(config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled);

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

export const errorHandler = (error) => Promise.reject({ ...error });
