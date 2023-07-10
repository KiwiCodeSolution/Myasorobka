import axios from "axios";
import { baseServerURL } from "../config/url";

export const getProducts = async () => {
  try {
    const result = await axios.get(`${baseServerURL}product`);
    // if (result.status === 200) return result;
    return result;
  }
  catch (error) {
    return { error: error.message }
  }
};

export const createProducts = async (product) => {
  try {
    const result = await axios.post(`${baseServerURL}product`, product);
    return result; 
  } catch (error) {
    return { error: error.message }
  }
}
