import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Products from "../features/Products";
import WishlistButton from "../components/Buttons/WishlistButton";
import NoProductFound from "../features/NoProductFound";
import NoProductBag from "../assests/Images/NoProductBag.jpg";

test("testing something", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    </Provider>
  );
  await waitFor(() => {
    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
  });
});

test("Should filter is present with inital value 0", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    </Provider>
  );
  const filter: HTMLInputElement = screen.getByTestId("filter");
  expect(filter.value).toBe("0");
});
test("Should product container appear", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    </Provider>
  );
  const productContainer = screen.getByTestId("product-container");
  expect(productContainer).toBeInTheDocument();
});
test("should No product found page render", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NoProductFound />
      </BrowserRouter>
    </Provider>
  );
  const productContainer = screen.getByTestId("no-product");
  expect(productContainer).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-node-access
  const image = screen.getByTestId("no-product").querySelector("img");
  expect(image).toBeInTheDocument();
  expect(image!.getAttribute("src")).toEqual(NoProductBag);
});

test("Should product card will form with wishlist button", () => {
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
      <BrowserRouter>
        <WishlistButton data={item} add={true} />
      </BrowserRouter>
    </Provider>
  );
  const wishlistButton = screen.getByTestId("wishlist-btn");
  expect(wishlistButton).toBeInTheDocument();
});
