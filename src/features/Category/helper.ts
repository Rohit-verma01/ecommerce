import { CartItemType } from "../Cart/slice";

export const getTotalQuantity = (cart: CartItemType[]) => {
  return cart.length;
};

export const getTotalPrice = (cart: CartItemType[]) => {
  const price = cart.reduce((acc: number, curr: CartItemType) => {
    return (acc = acc + (curr.quantity ? curr.quantity : 0) * curr.price);
  }, 0);
  return price;
};
