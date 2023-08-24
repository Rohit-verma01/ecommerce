import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  Nav,
  NavItem,
  Logo,
  SearchInput,
  SearchButton,
  RightNavLayout,
  Count,
} from "./style";
import { RootState } from "../../app/store";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBagHeartFill, BsFillCartFill } from "react-icons/bs";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import { CartItemType, cartActions } from "../Cart/slice";
import { wishlistActions } from "../WishList/slice";
import { authActions } from "../Authentication/slice";
import { getTotalQuantity } from "../Category/helper";
import Tootltip from "../../components/ToolTip";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const user = useSelector((state: RootState) => state.authReducer.name);
  const cart = useSelector((state: RootState) => state.cartReducer.cart);
  const wishlist = useSelector(
    (state: RootState) => state.wishlistReducer.wishlist
  );
  const isActive = useSelector(
    (state: RootState) => state.authReducer.isActive
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    localStorage.clear();
    dispatch(cartActions.emptyCart());
    dispatch(wishlistActions.emptyWishlist());
    dispatch(authActions.logout());
    setSearchValue("");
    navigate("/");
  };

  const handleSearch = (searchValue: string) => {
    if (searchValue.trim().length > 0) {
      navigate({
        pathname: "/",
        search: `${createSearchParams({ search: searchValue })}`,
      });
      // setSearchValue("");
    } else navigate("/");
  };

  return (
    <Nav>
      <NavItem>
        <Logo>ShopCart</Logo>
      </NavItem>
      <NavItem>
        <SearchInput
          value={searchValue}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
        ></SearchInput>
        <SearchButton type="submit" onClick={() => handleSearch(searchValue)}>
          Search
        </SearchButton>
      </NavItem>
      <RightNavLayout>
        <NavItem
          data-testid="home"
          className="interactive-element"
          onClick={() => {
            navigate("/");
            setSearchValue("");
          }}
        >
          <Tootltip data-testid="tooltip" content="Home">
            <AiFillHome size={28} />
          </Tootltip>
        </NavItem>

        <NavItem
          data-testid="wishlist"
          className="interactive-element"
          onClick={() => navigate("wishlist")}
        >
          <Count data-testid="quantity">
            {getTotalQuantity(wishlist as CartItemType[])}
          </Count>
          <Tootltip content="Wishlist">
            <BsFillBagHeartFill size={28} />
          </Tootltip>
        </NavItem>
        <NavItem
          data-testid="cart"
          className="interactive-element"
          onClick={() => navigate("cart")}
        >
          <Count>{getTotalQuantity(cart)}</Count>
          <Tootltip content="Cart">
            <BsFillCartFill size={28} />
          </Tootltip>
        </NavItem>
        {isActive ? (
          <NavItem
            data-testid="logout"
            className="interactive-element"
            onClick={handleSignOut}
          >
            <Tootltip content="LogOut">
              <RiLogoutCircleFill size={28} />
            </Tootltip>
          </NavItem>
        ) : null}
        {isActive ? (
          <NavItem className="interactive-element">
            <FaUserAlt size={25} />
            <p>{user}</p>
          </NavItem>
        ) : (
          <NavItem
            data-testid="login"
            className="interactive-element"
            onClick={() => navigate("login")}
          >
            <Tootltip content="LogIn">
              <RiLoginCircleFill size={28} />
            </Tootltip>
          </NavItem>
        )}
      </RightNavLayout>
    </Nav>
  );
};

export default Navbar;
