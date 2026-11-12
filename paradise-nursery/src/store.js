import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/CartSlice";
export default configureStore({ reducer: { cart: cartReducer } });
