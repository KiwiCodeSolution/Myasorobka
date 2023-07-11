import axios from "axios";
import { baseServerURL } from "../config/url";

export const axiosToken = {
  set(token) {axios.defaults.headers.common.Authorization = `Bearer ${token}`},
  unset() {axios.defaults.headers.common.Authorization = ''},
};
const testData = {
  username: "admin",
  password: "123456"
}
const login = async () => {
  const {data} = await axios.post(`${baseServerURL}auth/login`, { ...testData});
  if (data.token) axiosToken.set(data.token);
  return data;
};

export default login;
