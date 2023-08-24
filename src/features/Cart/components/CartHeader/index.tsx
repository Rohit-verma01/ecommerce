import {
  CartHeading,
  Product,
  ProductPrice,
  ProductQuantity,
  ProductTotalPrice,
} from "../../style";

const CartHeader = () => {
  return (
    <CartHeading>
      <Product>
        <h2>Product</h2>
      </Product>
      <ProductPrice>
        <h2>Price</h2>
      </ProductPrice>
      <ProductQuantity>
        <h2>Quantity</h2>
      </ProductQuantity>
      <ProductTotalPrice>
        <h2>Total</h2>
      </ProductTotalPrice>
    </CartHeading>
  );
};

export default CartHeader;
