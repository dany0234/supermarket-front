import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { fetchProducts } from './cartAPI';
import { Product } from '../shopMain/shopMainSlicer';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CartState = {
  items: [],
  status: 'idle',
};

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (item: CartItem) => {
    // You can perform any necessary API requests here to add the item to the cart
    // For simplicity, let's assume the item is added successfully
    return item;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(addToCart.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
