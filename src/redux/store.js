import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import { loadState, saveState } from '../local/localStorage';

const persistedState = loadState();

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  const state = store.getState();
  saveState({
    product: {
      ...state.product,
      loading: false, 
      error: '', 
    },
  });
});

export default store;
