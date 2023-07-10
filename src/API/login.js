import axios from "axios";
import { baseServerURL } from "../config/url";

export const axiosToken = {
  set(token) {axios.defaults.headers.common.Authorization = `Bearer ${token}`},
  unset() {axios.defaults.headers.common.Authorization = ''},
};

const login = async () => {
  const {data} = await axios.get(`${baseServerURL}auth`);
  if (data.token) axiosToken.set(data.token);
  return data;
};

export default login;
