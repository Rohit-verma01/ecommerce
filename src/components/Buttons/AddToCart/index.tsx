import { updateDoc, doc } from "firebase/firestore";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { cartActions } from "../../../features/Cart/slice";
import { db } from "../../../firebase";
import { addToCart } from "../../../features/Cart/helper";
import { useNavigate } from "react-router";
import { AddButton } from "../style";

interface ProductType {
  id: number;
  title: string;
  description: string;
  url: string;
  price: number;
}
const Add = (props: {
  data: ProductType;
  disable: boolean;
  children: ReactNode;
}) => {
  const cart = useSelector((state: RootState) => state.cartReducer.cart);
  const id = localStorage.getItem("id")
    ? JSON.parse(localStorage.getItem("id")!)
    : "";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = async (
    product: ProductType,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (id === "") {
      navigate("/login");
    } else {
      const updatedCart = addToCart(cart, { ...product, quantity: 1 });
      dispatch(cartActions.updateCart(updatedCart));

      await updateDoc(doc(db, "users", id), {
        cart: updatedCart,
      });
      console.log(updatedCart, "updated cart");
    }
  };

  return (
    <AddButton
      onClick={(event) => handleAddToCart(props.data, event)}
      disabled={props.disable}
    >
      {props.children}
    </AddButton>
  );
};

export default Add;
