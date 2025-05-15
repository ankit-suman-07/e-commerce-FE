import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (searchTerm = '', thunkAPI) => {
    
    try {
      const endpoint = searchTerm
        ? `https://e-commerce-backend-iwni.onrender.com/products?search=${encodeURIComponent(searchTerm)}`
        : 'https://e-commerce-backend-iwni.onrender.com/products';

      // Delay to simulate network latency
      // This is just for demonstration purposes.
      //await new Promise(resolve => setTimeout(resolve, 1000));

      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch products');
    }
  }
);

const productSlice = createSlice({
    name: 'product',
    initialState: {
      products: [],
      loading: false,
      error: '',
      selectedProduct: null,
    },
    reducers: {
      selectProduct: (state, action) => {
        state.selectedProduct = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.loading = true;
          state.error = '';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const { selectProduct } = productSlice.actions;
  export default productSlice.reducer;
  