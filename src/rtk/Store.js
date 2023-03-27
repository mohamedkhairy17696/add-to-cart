import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cart-slice";
import productsSlice from "./Slices/products-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
