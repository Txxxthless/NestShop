import axios from "axios";
import { accountApi } from "./accountApi";

const api = axios.create({
  baseURL: "http://localhost:5000/basket/",
});

const authInterceptor = (config) => {
  const currentUser = accountApi.getCurrentUser();
  config.headers.authorization = `Bearer ${currentUser.token}`;
  return config;
};

api.interceptors.request.use(authInterceptor);

const addProduct = async (productId) => {
  try {
    await api.post(`add?=${productId}`);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const removeProduct = async (productId) => {
  try {
    await api.post(`remove?=${productId}`);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getBasket = async (productId) => {
  const { data } = await api.get("");
  return data;
};

export const basketApi = { addProduct, removeProduct, getBasket };
