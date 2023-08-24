import React from "react";
import { CartItemType, cartActions } from "../../slice";
import { QuantityButton, QuantityWrapper } from "../../style";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { addToCart, decreaseQty } from "../../helper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase";

const Quantity = (props: { data: CartItemType }) => {
  const cartList = useSelector((state: RootState) => state.cartReducer.cart);
  const id = localStorage.getItem("id")
    ? JSON.parse(localStorage.getItem("id")!)
    : "";
  const quantity = cartList
    .filter((x) => x.id === props.data.id)
    .map((item) => item.quantity)[0];
  const dispatch = useDispatch();

  const decreaseQuantity = async (
    item: CartItemType,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const newCart = decreaseQty(cartList, item);
    dispatch(cartActions.updateCart(newCart));
    await updateDoc(doc(db, "users", id), {
      cart: newCart,
    });
  };

  const increaseQuantity = async (
    item: CartItemType,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const newCart = addToCart(cartList, item);
    dispatch(cartActions.updateCart(newCart));
    await updateDoc(doc(db, "users", id), {
      cart: newCart,
    });
  };

  return (
    <QuantityWrapper>
      <QuantityButton
        data-testid="decrease-btn"
        onClick={(e) => decreaseQuantity(props.data, e)}
      >
        <HiMinusCircle />
      </QuantityButton>
      <h3>{quantity}</h3>
      <QuantityButton
        data-testid="increase-btn"
        onClick={(e) => increaseQuantity(props.data, e)}
      >
        <HiPlusCircle />
      </QuantityButton>
    </QuantityWrapper>
  );
};

export default Quantity;
