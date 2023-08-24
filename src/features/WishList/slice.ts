import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../Cart/slice";

interface WishlistState {
  wishlist: CartItemType[];
}
const wishlistSlice = createSlice({
  name: "Wishlist",
  initialState: {
    wishlist: [],
  } as WishlistState,
  reducers: {
    emptyWishlist: (state) => {
      state.wishlist = [];
    },
    updatedWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export const { actions: wishlistActions } = wishlistSlice;
export default wishlistSlice.reducer;
