import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Slices/products-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
