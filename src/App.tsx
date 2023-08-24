import { Route, Routes } from "react-router";
import { SignIn } from "./features/Authentication/SignIn";
import { SignUp } from "./features/Authentication/SignUp";
import Cart from "./features/Cart";
import Home from "./features/Home";
import ProductPage from "./features/ProductPage";
import Products from "./features/Products";
import WishList from "./features/WishList";
import CheckOut from "./features/CheckOut";
import NotFound from "./features/NotFoundPage";
import OrderPlaced from "./features/OrderPlaced";
import React from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Products />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="orderplaced" element={<OrderPlaced />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
