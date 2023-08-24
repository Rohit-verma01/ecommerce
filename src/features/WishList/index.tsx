import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../app/store";
import { CartItemType } from "../Cart/slice";
import emptyCart from "../../assests/Images/EmptyCart.png";
import {
  WishlistContainer,
  WishlistTitle,
  EmptyImageContainer,
  EmptyCartImage,
  EmptyCartContent,
  WishlistProducts,
  BackButton,
  Arrow,
} from "./style";
import LoginFirst from "../LoginFirst";
import * as constant from "../../constants";
import WishlistItem from "./WishlistItem";

const WishList = () => {
  const navigate = useNavigate();
  const wishlist = useSelector(
    (state: RootState) => state.wishlistReducer.wishlist
  );
  const id = localStorage.getItem(constant.ID)
    ? JSON.parse(localStorage.getItem(constant.ID)!)
    : "";

  return (
    <WishlistContainer>
      <WishlistTitle>
        <h1>Your WishList</h1>
      </WishlistTitle>
      {id !== "" ? (
        wishlist.length === 0 ? (
          <>
            <EmptyImageContainer>
              <EmptyCartImage src={emptyCart} alt="emptyCart" />
            </EmptyImageContainer>
            <EmptyCartContent>
              <h2>Your Wishlist is currently empty</h2>
              <p>Seems like you don't have any wishes here</p>
              <p>Explore more and shortlist some items</p>
              <p></p>
            </EmptyCartContent>
            <BackButton onClick={() => navigate("/")}>
              <Arrow>&larr;</Arrow>
              <div>Continue Shopping</div>
            </BackButton>
          </>
        ) : (
          <>
            <WishlistProducts>
              {wishlist.map((product: CartItemType, index: number) => {
                return (
                  <WishlistItem
                    key={`wishlist-item-${index}`}
                    product={product}
                  />
                );
              })}
            </WishlistProducts>
            <BackButton onClick={() => navigate("/")}>
              <Arrow>&larr;</Arrow>
              <div>Continue Shopping</div>
            </BackButton>
          </>
        )
      ) : (
        <LoginFirst />
      )}
    </WishlistContainer>
  );
};

export default WishList;
