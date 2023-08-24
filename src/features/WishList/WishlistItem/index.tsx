import { CartItemType, cartActions } from "../../Cart/slice";
import {
  Product,
  ProductImage,
  ProductDetail,
  ButtonWrapper,
  WishlistButton,
} from "../style";
import { removeWishlist } from "../helper";
import { wishlistActions } from "../slice";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import * as constant from "../../../constants";
import { RootState } from "../../../app/store";
import { addToCart } from "../../Cart/helper";

const WishlistItem = (props: { product: CartItemType; key: string }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(
    (state: RootState) => state.wishlistReducer.wishlist
  );
  const cart = useSelector((state: RootState) => state.cartReducer.cart);
  const id = localStorage.getItem(constant.ID)
    ? JSON.parse(localStorage.getItem(constant.ID)!)
    : "";

  const moveToCart = async (product: CartItemType) => {
    const newCart = addToCart(cart, product);
    dispatch(cartActions.updateCart(newCart));
    const newWish = removeWishlist(wishlist, product);
    dispatch(wishlistActions.updatedWishlist(newWish));
    await updateDoc(doc(db, constant.USERS, id), {
      wishlist: newWish,
      cart: newCart,
    });
  };

  const remove = async (product: CartItemType) => {
    const newWishlist = removeWishlist(wishlist, product);
    dispatch(wishlistActions.updatedWishlist(newWishlist));
    await updateDoc(doc(db, constant.USERS, id), {
      wishlist: newWishlist,
    });
  };
  return (
    <Product data-testid="item" key={props.key}>
      <ProductImage src={props.product.url} alt="product image" />
      <ProductDetail>
        <h2>{props.product.title}</h2>
        <h3>Rs.{props.product.price}</h3>
      </ProductDetail>
      <ButtonWrapper data-testid="buttons">
        <WishlistButton
          data-testid="move-btn"
          onClick={() => moveToCart(props.product)}
        >
          Move to cart
        </WishlistButton>

        <WishlistButton onClick={() => remove(props.product)}>
          Remove item
        </WishlistButton>
      </ButtonWrapper>
    </Product>
  );
};

export default WishlistItem;
