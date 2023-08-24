import { CartItemType } from "./slice";

export const addToCart = (
  cart: CartItemType[],
  product: CartItemType
): CartItemType[] => {
  const newCart = [...cart];
  const itemIndex = newCart.findIndex((item) => item.id === product.id);
  if (itemIndex !== -1) {
    const item: CartItemType = {
      id: newCart[itemIndex].id,
      quantity:
        newCart[itemIndex].quantity === 6 ? 6 : newCart[itemIndex].quantity + 1,
      title: newCart[itemIndex].title,
      price: newCart[itemIndex].price,
      description: newCart[itemIndex].description,
      url: newCart[itemIndex].url,
    };
    newCart[itemIndex] = item;
  } else newCart.push(product);
  return newCart;
};

export const decreaseQty = (
  cart: CartItemType[],
  product: CartItemType
): CartItemType[] => {
  const newCart = [...cart];
  const itemIndex = newCart.findIndex((item) => item.id === product.id);
  if (newCart[itemIndex].quantity === 1) {
    console.log("decrease =1 " + JSON.stringify(newCart[itemIndex]));
    newCart.splice(itemIndex, 1);
  } else {
    const item: CartItemType = {
      id: newCart[itemIndex].id,
      quantity: newCart[itemIndex].quantity - 1,
      title: newCart[itemIndex].title,
      price: newCart[itemIndex].price,
      description: newCart[itemIndex].description,
      url: newCart[itemIndex].url,
    };
    newCart[itemIndex] = item;
  }
  return newCart;
};
