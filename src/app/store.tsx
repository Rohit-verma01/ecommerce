import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/Authentication/slice";
import CartSlice from "../features/Cart/slice";
import WishlistSlice from "../features/WishList/slice";
import ProductSlice from "../features/Products/slice";
import { createLogger } from "redux-logger";
import { useDispatch, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    authReducer: AuthSlice,
    cartReducer: CartSlice,
    wishlistReducer: WishlistSlice,
    // productReducer: ProductSlice,
  },
  middleware: (defaultMiddleWare) =>
    defaultMiddleWare().concat(
      createLogger({ collapsed: true, timestamp: true, duration: true })
    ),
});
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = () => useSelector;
