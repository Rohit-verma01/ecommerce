import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../features/Navbar";

test("Should check Logo of Navbar is present", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("ShopCart")).toBeInTheDocument();
});
test("Should check search bar is present in Navbar", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const searchInput = screen.getByPlaceholderText("Search...");
  expect(searchInput).toBeInTheDocument();
  fireEvent.change(searchInput, { target: { value: "laptop" } });
  expect(screen.getByPlaceholderText("Search...")).toHaveValue("laptop");
  expect(window.location.pathname).toBe("/");
  expect(window.location.search).toBe("");
});
test("Should home icon  present in Navbar navigate to home page", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const homeIcon = screen.getByTestId("home");
  fireEvent.click(homeIcon);
  expect(window.location.href).toBe("http://localhost/");
});

test("Should wishlist icon  present in Navbar navigate to wishlist page", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const wishlistIcon = screen.getByTestId("wishlist");
  fireEvent.click(wishlistIcon);
  expect(window.location.href).toBe("http://localhost/wishlist");
});
test("Should cart icon  present in Navbar navigate to cart page", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const cartIcon = screen.getByTestId("cart");
  fireEvent.click(cartIcon);
  expect(window.location.href).toBe("http://localhost/cart");
});

test("Should quantity number is present in nvaigation bar", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const quantityNumber = screen.getByTestId("quantity");

  expect(quantityNumber).toBeInTheDocument();
});

test("should navigate to Login page on click of Login icon", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const loginIcon = screen.getByTestId("login");
  fireEvent.click(loginIcon);
  expect(window.location.pathname).toBe("/login");
});
test("displays user name on authenticated state", () => {
  render(
    <Provider
      store={{
        ...store,
        getState: () => ({
          ...store.getState(),
          authReducer: { name: "Test User", isActive: true },
        }),
      }}
    >
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const userElement = screen.getByText(/Test User/i);
  expect(userElement).toBeInTheDocument();
});
