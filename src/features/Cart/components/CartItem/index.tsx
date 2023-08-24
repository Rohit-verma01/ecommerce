import { CartItemType } from "../../slice";
import {
  Product,
  ProductDetail,
  ProductImage,
  ProductPrice,
  ProductQuantity,
  ProductTotalPrice,
} from "../../style";
import Quantity from "../Qauntity";

const CartItem = (props: CartItemType) => {
  return (
    <ProductDetail data-testid="product">
      <Product>
        <ProductImage data-testid="product-img" src={props.url} alt="phone" />
        <h3>{props.title}</h3>
      </Product>
      <ProductPrice>
        <h3>Rs.{props.price}</h3>
      </ProductPrice>
      <ProductQuantity>
        <Quantity data={props} />
      </ProductQuantity>
      <ProductTotalPrice>
        <h3>Rs.{props.price * props.quantity}</h3>
      </ProductTotalPrice>
    </ProductDetail>
  );
};

export default CartItem;
