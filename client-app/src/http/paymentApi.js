import { notifySuccess, paymentHost } from ".";

const processPayment = async () => {
  try {
    const { data } = await paymentHost.post("");
    notifySuccess("Payment succeeded");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const paymentApi = { processPayment };
