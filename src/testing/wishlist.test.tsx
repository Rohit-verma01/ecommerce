import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import WishList from "../features/WishList";
import wishlistReducer, { wishlistActions } from "../features/WishList/slice";
import WishlistItem from "../features/WishList/WishlistItem";
import WishlistButton from "../components/Buttons/WishlistButton";
test("Should order placed page is present", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <WishList />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("Your WishList")).toBeInTheDocument();
});

test("should wishlist updated", async () => {
  const item = {
    id: 1,
    title: "test",
    description: "test is going on",
    price: 1000,
    quantity: 1,
    url: "testurl",
  };
  const previousState = {
    wishlist: [item],
  };
  await waitFor(() =>
    expect(
      wishlistReducer(
        previousState,
        wishlistActions.updatedWishlist([{ item }])
      )
    ).toEqual({
      wishlist: [{ item }],
    })
  );
});

test("should wishlist empty", async () => {
  const item = {
    id: 1,
    title: "test",
    description: "test is going on",
    price: 1000,
    quantity: 1,
    url: "testurl",
  };
  const previousState = {
    wishlist: [item],
  };
  await waitFor(() =>
    expect(
      wishlistReducer(previousState, wishlistActions.emptyWishlist())
    ).toEqual({
      wishlist: [],
    })
  );
});

test("renders product details and buttons correctly", () => {
  const item = {
    id: 1,
    title: "test",
    description: "test is going on",
    price: 1000,
    quantity: 1,
    url: "testurl",
  };
  render(
    <Provider store={store}>
      <WishlistItem product={item} key="2" />
    </Provider>
  );

  expect(screen.getByTestId("item")).toBeInTheDocument();
  expect(screen.getByTestId("move-btn")).toBeInTheDocument();
  expect(screen.getByAltText("product image")).toBeInTheDocument();
  expect(screen.getByText(item.title)).toBeInTheDocument();
  expect(screen.getByText(`Rs.${item.price}`)).toBeInTheDocument();

  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(2);
  expect(buttons[0]).toHaveTextContent("Move to cart");
  expect(buttons[1]).toHaveTextContent("Remove item");
});
test("clicking the wishlist button toggles the heart icon", async () => {
  const product = {
    id: 1,
    title: "test",
    description: "test is going on",
    price: 1000,
    quantity: 1,
    url: "testurl",
  };
  render(
    <Provider store={store}>
      <BrowserRouter>
        <WishlistButton data={product} add={false} />
      </BrowserRouter>
    </Provider>
  );
  const wishlistBtn = screen.getByTestId("wishlist-btn");

  expect(wishlistBtn).toBeInTheDocument();

  fireEvent.click(wishlistBtn);
  expect(window.location.href).toBe("http://localhost/login");
});
