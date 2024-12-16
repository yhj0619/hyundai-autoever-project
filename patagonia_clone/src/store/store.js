import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/reducer";
import cartReducer from "../redux/cartReducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
