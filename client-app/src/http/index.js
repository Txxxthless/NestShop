import axios from "axios";
import { toast } from "react-toastify";
import { toastConfig } from "./toastConfig";

export const notifySuccess = (message = "Success") => {
  toast.success(message, toastConfig);
};

export const notifyError = (message = "Something went wrong...") => {
  toast.error(message, toastConfig);
};

const authInterceptor = (config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  config.headers.authorization = `Bearer ${user.token}`;
  return config;
};

const errorInterceptor = (error) => {
  notifyError();
  throw new Error(error.response.data.message);
};

export const shopHost = axios.create({
  baseURL: "http://localhost:5000/",
});

shopHost.interceptors.response.use(null, errorInterceptor);

export const basketHost = axios.create({
  baseURL: "http://localhost:5000/basket/",
});

basketHost.interceptors.response.use(null, errorInterceptor);
basketHost.interceptors.request.use(authInterceptor);

export const accountHost = axios.create({
  baseURL: "http://localhost:5000/account",
});

accountHost.interceptors.response.use(null, errorInterceptor);

export const paymentHost = axios.create({
  baseURL: "http://localhost:5000/payment",
});

paymentHost.interceptors.request.use(authInterceptor);
paymentHost.interceptors.response.use(null, errorInterceptor);
