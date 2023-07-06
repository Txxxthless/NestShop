import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

const getProducts = async (brand, search) => {
  const params = {};
  if (brand) {
    params.brand = brand;
  }

  if (search) {
    params.search = search;
  }

  const { data } = await api.get("products", { params });
  return data;
};

const getBrands = async () => {
  const { data } = await api.get("brands");
  return data;
};

export const shopApi = { getProducts, getBrands };
