import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../Products";

export interface CartItemType extends ProductType {
  quantity: number;
}
interface CartState {
  cart: CartItemType[];
}

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  } as CartState,

  reducers: {
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const { actions: cartActions } = cartSlice;
export default cartSlice.reducer;
