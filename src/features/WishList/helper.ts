import { CartItemType } from "../Cart/slice";

export const addWishlist = (
  wishlist: CartItemType[],
  product: CartItemType
): CartItemType[] => {
  const newCart = [...wishlist];
  newCart.push(product);
  return newCart;
};

export const removeWishlist = (
  wishList: CartItemType[],
  product: CartItemType
) => {
  let newCart = [...wishList];
  newCart = newCart.filter((item) => item.id !== product.id);
  return newCart;
};
