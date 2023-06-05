import axios from 'axios';

let MY_SERVER = "http://127.0.0.1:8000/products"

export const fetchProducts = async () => {
  try {
    const response = await axios.get(MY_SERVER);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch product');
  }
};
