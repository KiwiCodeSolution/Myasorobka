import axios from "axios";

export const axiosToken = {
  set(token) {axios.defaults.headers.common.Authorization = `Bearer ${token}`},
  unset() {axios.defaults.headers.common.Authorization = ''},
};

const login = async () => {
  const {data} = await axios.get("http://localhost:5000/auth");
  if (data.token) axiosToken.set(data.token);
  return data;
};

export default login;
