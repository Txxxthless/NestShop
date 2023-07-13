import { accountHost, notifySuccess } from ".";

const login = async (user) => {
  try {
    const { data } = await accountHost.post("login", user);
    cacheUser(data);
    notifySuccess("Signed in successfully");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const register = async (user) => {
  try {
    const { data } = await accountHost.post("register", user);
    cacheUser(data);
    notifySuccess("Registered successfully");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const cacheUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const logout = () => {
  notifySuccess("Logged out");
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  const cachedUser = localStorage.getItem("user");
  if (cachedUser) {
    return JSON.parse(cachedUser);
  }
  return null;
};

export const accountApi = { login, register, logout, getCurrentUser };
