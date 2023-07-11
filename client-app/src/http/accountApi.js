import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/account",
});

const login = async (user) => {
  try {
    const { data } = await api.post("login", user);
    cacheUser(data);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const register = async (user) => {
  try {
    const { data } = await api.post("register", user);
    cacheUser(data);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const cacheUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const logout = () => {
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
