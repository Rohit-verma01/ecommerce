import Navbar from "../Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { cartActions } from "../Cart/slice";
import { Button } from "./style";
import { wishlistActions } from "../WishList/slice";
import { authActions } from "../Authentication/slice";
import * as constant from "../../constants";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: constant.SMOOTH,
    });
  };

  let id: string = "";
  onAuthStateChanged(auth, (user) => {
    if (user) {
      id = user.uid;
      fetchData();
      dispatch(authActions.login(user.displayName));
    }
    setLoading(true);
  });

  const fetchData = async () => {
    const wholeCart = (await getDoc(doc(db, constant.USERS, id))).data();
    const cartList = wholeCart?.cart;
    const wishlist = wholeCart?.wishlist;
    if (cartList !== undefined) dispatch(cartActions.updateCart(cartList));
    if (wishlist !== undefined)
      dispatch(wishlistActions.updatedWishlist(wishlist));
  };

  return (
    <div>
      {loading && (
        <div style={{ height: "100%" }}>
          <Navbar />
          <Outlet />
          <Button onClick={goToTop}>Back to top &#8593;</Button>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
