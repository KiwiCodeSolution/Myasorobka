import axios from "axios";
import { baseServerURL } from "../config/url";

const testData = {
  username: "admin",
  password: "123456"
}

export const axiosToken = {
  set(token) {axios.defaults.headers.common.Authorization = `Bearer ${token}`},
  unset() {axios.defaults.headers.common.Authorization = ''},
};

        // Auth OPERATIONS

export const login = async (credentials = testData) => {
  const {data} = await axios.post(`${baseServerURL}auth/login`, { ...credentials});
  if (data.token) axiosToken.set(data.token);
  return data;
};

export const logout = async () => {
  console.log("logout")
  const result = await axios.get(`${baseServerURL}auth/logout`);
  console.log("result:", result)
  if (result.status === 200) axiosToken.unset();
  return result;
}

