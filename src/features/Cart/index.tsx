import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../app/store";
import emptyCart from "../../assests/Images/EmptyCart.png";
import { getTotalPrice, getTotalQuantity } from "../Category/helper";
import * as constant from "../../constants";
import {
  CartContainer,
  CartTitle,
  EmptyImageContainer,
  EmptyCartImage,
  EmptyCartContent,
  CartWrapper,
  MainCart,
  Line,
  CartDetails,
  CartSummary,
  SummaryHeading,
  SummaryDetail,
  Detail,
  Total,
  Button,
  BackButton,
  Arrow,
} from "./style";
import CartItem from "./components/CartItem";
import CartHeader from "./components/CartHeader";
import LoginFirst from "../LoginFirst";

const Cart = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem(constant.ID)
    ? JSON.parse(localStorage.getItem(constant.ID)!)
    : "";
  const cartList = useSelector((state: RootState) => state.cartReducer.cart);
  return (
    <CartContainer>
      <CartTitle>
        <h1>Your Cart</h1>
      </CartTitle>

      {id !== "" ? (
        cartList.length === 0 ? (
          <>
            <EmptyImageContainer data-testid="empty-container">
              <EmptyCartImage src={emptyCart} alt="emptyCart" />
            </EmptyImageContainer>
            <EmptyCartContent>
              <h2>Your Cart is currently empty</h2>
              <p>Looks like you have not added anything to your cart</p>
              <p>Go ahead by clicking on Continue Shopping button </p>
            </EmptyCartContent>
            <BackButton onClick={() => navigate("/")}>
              <Arrow>&larr;</Arrow>
              <div>Continue Shopping</div>
            </BackButton>
          </>
        ) : (
          <>
            <CartWrapper data-testid="main-cart">
              <MainCart>
                <CartHeader />
                <Line />
                <CartDetails>
                  {cartList &&
                    cartList.map((item: any, index: number) => {
                      return <CartItem {...item} key={`cart-item-${index}`} />;
                    })}
                </CartDetails>
              </MainCart>
              <CartSummary>
                <SummaryHeading>
                  <h2>Order Summary</h2>
                </SummaryHeading>
                <Line />
                <SummaryDetail>
                  <Detail>
                    <h2>Total Items</h2>
                    <h2>{getTotalQuantity(cartList)}</h2>
                  </Detail>
                  <Detail>
                    <h2>Sub Total</h2>
                    <h2>Rs.{getTotalPrice(cartList)}</h2>
                  </Detail>
                  <Detail>
                    <h2>Shipping</h2>
                    <h2>Free</h2>
                  </Detail>
                </SummaryDetail>
                <Line />
                <Total>
                  <Detail>
                    <h2>Total</h2>
                    <h2>Rs.{getTotalPrice(cartList)}</h2>
                  </Detail>
                </Total>
                <Button onClick={() => navigate("/checkout")}>Check Out</Button>
              </CartSummary>
            </CartWrapper>
            <BackButton onClick={() => navigate("/")}>
              <Arrow>&larr;</Arrow>
              <div>Continue Shopping</div>
            </BackButton>
          </>
        )
      ) : (
        <LoginFirst data-testid="login-first" />
      )}
    </CartContainer>
  );
};

export default Cart;
