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

export const createProduct = async (product) => {
  try {
    const result = await axios.post(`${baseServerURL}product`, product);
    return result; 
  } catch (error) {
    return { error: error.message }
  }
}

export const updateProduct = async (product) => {
  try {
    const result = await axios.put(`${baseServerURL}product/${product._id}`, { ...product });
    return result; 
  } catch (error) {
    return { error: error.message }
  }
}

export const deleteProduct = async (product) => {
  try {
    const result = await axios.delete(`${baseServerURL}product/${product._id}`);
    return result; 
  } catch (error) {
    return { error: error.message }
  }
}