import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/account",
});

const login = async (user) => {
  const { data } = await api.post("login", user);
  if (data.status) {
    throw new Error(data.response.message);
  }
  cacheUser(data);
};

const register = async (user) => {
  const { data } = await api.post("register", user);
  if (data.status) {
    throw new Error(data.response.message);
  }
  cacheUser(data);
};

const cacheUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const logout = () => {
  localStorage.removeItem("user");
};

export const accountApi = { login, register, logout };
