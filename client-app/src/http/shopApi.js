import { shopHost } from ".";

const getProducts = async (brand, search) => {
  const params = {};
  if (brand) {
    params.brand = brand;
  }

  if (search) {
    params.search = search;
  }

  const { data } = await shopHost.get("products", { params });
  return data;
};

const getBrands = async () => {
  const { data } = await shopHost.get("brands");
  return data;
};

export const shopApi = { getProducts, getBrands };
