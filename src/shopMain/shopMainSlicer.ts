import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { fetchProducts } from './shopMainAPI';

export interface ProductState {
  products: Product[];
  status: 'idle' | 'loading' | 'failed';
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: any;
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
};

// Define your dummy data
const dummyProducts: Product[] = [
  { id: 1, name: 'Product 1', price: 50, image: 'product1.jpg' },
  { id: 2, name: 'Product 2', price: 15, image: 'product2.jpg' },
  { id: 3, name: 'Product 3', price: 20, image: 'product3.jpg' },
];

export const fetchProductsAsync = createAsyncThunk(
  'shopMain/fetchProducts',
  async () => {
    try {
      // Simulate an API call or fetch operation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Return the dummy data
      return dummyProducts;
    } catch (error) {
      throw new Error('Failed to fetch products.');
    }
  }
);

// export const fetchProductsAsync = createAsyncThunk(
//   'shopMain/fetchProducts',
//   async () => {
//     try {
//       const response = await fetchProducts();
//       return response.data;
//     } catch (error) {
//       throw new Error('Failed to fetch products.');
//     }
//   }
// );

export const shopMainSlice = createSlice({
  name: 'shopMain',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectProducts = (state: RootState) => state.shopMain.products;

export default shopMainSlice.reducer;
