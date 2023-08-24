import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { RootState } from "../../../app/store";
import { addWishlist, removeWishlist } from "../../../features/WishList/helper";
import { wishlistActions } from "../../../features/WishList/slice";
import { useNavigate } from "react-router";
import { ProductType } from "../../../features/Products";
import { WishListIcon } from "../style";

const WishlistButton = (props: { data: ProductType; add: boolean }) => {
  const [add, setAdd] = useState<boolean>(props.add);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = localStorage.getItem("id")
    ? JSON.parse(localStorage.getItem("id")!)
    : "";
  const wishlist = useSelector(
    (state: RootState) => state.wishlistReducer.wishlist
  );
  const addToWishlist = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (id === "") {
      navigate("/login");
    } else {
      setAdd(!add);
      if (!add) {
        const newWish = addWishlist(wishlist, { ...props.data, quantity: 1 });
        dispatch(wishlistActions.updatedWishlist(newWish));
        await updateDoc(doc(db, "users", id), {
          wishlist: newWish,
        });
      } else {
        const newWish = removeWishlist(wishlist, {
          ...props.data,
          quantity: 1,
        });
        dispatch(wishlistActions.updatedWishlist(newWish));
        await updateDoc(doc(db, "users", id), {
          wishlist: newWish,
        });
      }
    }
  };
  return (
    <WishListIcon data-testid="wishlist-btn" onClick={addToWishlist} add={add}>
      <AiFillHeart />
    </WishListIcon>
  );
};

export default WishlistButton;
