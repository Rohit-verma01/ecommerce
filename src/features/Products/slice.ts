import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../Products";

interface ProductState {
  product: ProductType[];
}

const productSlice = createSlice({
  name: "Product",
  initialState: {
    product: [],
  } as ProductState,

  reducers: {
    updateProduct: (state, action) => {
      state.product = action.payload;
    },
    emptyProduct: (state) => {
      state.product = [];
    },
  },
});

export const { actions: productActions } = productSlice;
export default productSlice.reducer;
