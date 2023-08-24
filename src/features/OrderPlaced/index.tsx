import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Cart/slice";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import * as constant from "../../constants";
import { RootState } from "../../app/store";
import { Button, Container, TickContainer } from "./style";

const OrderPlaced = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cartReducer.cart);
  const id = localStorage.getItem(constant.ID)
    ? JSON.parse(localStorage.getItem(constant.ID)!)
    : "";
  useEffect(() => {
    const updateUser = async () => {
      if (id !== "") {
        const orders = (await getDoc(doc(db, constant.USERS, id))).data()!
          .order;
        if (orders) {
          const placedOrders = orders;
          placedOrders.push({
            ...cart,
            id: id,
            date: new Date().toJSON().slice(0, 10),
          });
          await updateDoc(doc(db, constant.USERS, id), {
            orders: [...placedOrders],
          });
        } else {
          await updateDoc(doc(db, constant.USERS, id), {
            orders: [
              { ...cart, id: id, date: new Date().toJSON().slice(0, 10) },
            ],
          });
        }
        dispatch(cartActions.emptyCart());
        updateDoc(doc(db, constant.USERS, id), {
          cart: [],
        });
      }
    };
    updateUser();
  }, []);
  return (
    <Container data-testid="orderplaced-container">
      <TickContainer>
        <TiTick size={100} />
      </TickContainer>
      <h2 style={{ color: "#00ad5f" }}>Thank You</h2>
      <h2>Order Successfully Placed</h2>
      <Button onClick={() => navigate("/")}>Explore More</Button>
    </Container>
  );
};

export default OrderPlaced;
