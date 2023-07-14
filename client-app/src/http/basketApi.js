import { basketHost, notifySuccess } from ".";

const addProduct = async (productId) => {
  try {
    await basketHost.post(`add?productId=${productId}`);
    notifySuccess("Product added");
  } catch (error) {
    console.log(error);
  }
};

const removeProduct = async (productId) => {
  try {
    await basketHost.post(`remove?productId=${productId}`);
    notifySuccess("Product removed");
  } catch (error) {
    console.log(error);
  }
};

const getBasket = async () => {
  const { data } = await basketHost.get("");
  return data;
};

export const basketApi = { addProduct, removeProduct, getBasket };
