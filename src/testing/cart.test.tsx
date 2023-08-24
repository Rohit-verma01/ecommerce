import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Cart from "../features/Cart";
import { store } from "../app/store";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import cartReducer, { cartActions } from "../features/Cart/slice";
import CartItem from "../features/Cart/components/CartItem";
import CartHeader from "../features/Cart/components/CartHeader";
import LoginFirst from "../features/LoginFirst";
import { getTotalPrice, getTotalQuantity } from "../features/Category/helper";

test("Check if cart component is render or not", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </Provider>
  );
  const cartElement = screen.getByText("Your Cart");
  expect(cartElement).toBeInTheDocument();
});
test("Should cart product header shown", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CartHeader />
      </BrowserRouter>
    </Provider>
  );
  const cartHeaderElement = screen.getByText("Total");
  expect(cartHeaderElement).toBeInTheDocument();
});
test("Check if particular product cart component in cart is render or not", () => {
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
        <CartItem {...item} />
      </BrowserRouter>
    </Provider>
  );
  const productElement = screen.getByText(`${item.title}`);
  expect(productElement).toBeInTheDocument();
});
test("should product image will appear or not", () => {
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
        <CartItem {...item} />
      </BrowserRouter>
    </Provider>
  );
  const productImage = screen.getByTestId("product-img");
  expect(productImage).toBeInTheDocument();
});
test("Check if particular product cart total price  is shown correct or not", () => {
  const item = {
    id: 1,
    title: "test",
    description: "test is going on",
    price: 1000,
    quantity: 2,
    url: "testurl",
  };
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CartItem {...item} />
      </BrowserRouter>
    </Provider>
  );
  const productElement = screen.getByText(`Rs.${item.price * item.quantity}`);
  expect(productElement).toBeInTheDocument();
});

test("should cart updated", async () => {
  const item = {
    id: 1,
    title: "test",
    description: "test is going on",
    price: 1000,
    quantity: 1,
    url: "testurl",
  };
  const previousState = {
    cart: [item],
  };
  await waitFor(() =>
    expect(
      cartReducer(previousState, cartActions.updateCart([{ item }]))
    ).toEqual({
      cart: [{ item }],
    })
  );
});
test("should cart empty", async () => {
  const item = {
    id: 1,
    title: "test",
    description: "test is going on",
    price: 1000,
    quantity: 1,
    url: "testurl",
  };
  const previousState = {
    cart: [item],
  };
  await waitFor(() =>
    expect(cartReducer(previousState, cartActions.emptyCart())).toEqual({
      cart: [],
    })
  );
});

test("Should empty page render", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </Provider>
  );
  const productComponent = screen.queryByTestId("empty-container");
  expect(productComponent).not.toBeInTheDocument();
});
test("Should main cart page render", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </Provider>
  );
  const productComponent = screen.queryByTestId("main-cart");
  expect(productComponent).not.toBeInTheDocument();
});
test("should get the correct id from local storage", () => {
  localStorage.setItem("ID", JSON.stringify(1));
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </Provider>
  );

  expect(localStorage.getItem("ID")).toBe("1");
});

test("check if user is not login then there is login button appears", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginFirst />
      </BrowserRouter>
    </Provider>
  );

  const loginText = screen.getByText("Login First");
  const loginButton = screen.getByText("LogIn");
  expect(loginButton).toBeInTheDocument();
  expect(loginText).toBeInTheDocument();
  fireEvent.click(loginButton);
  expect(window.location.href).toBe("http://localhost/login");
  // expect(localStorage.getItem("ID")).toBe("1");
});

describe("getTotalQuantity", () => {
  it("should return 0 for an empty cart", () => {
    const cart: any = [];
    expect(getTotalQuantity(cart)).toEqual(0);
  });

  it("should return the correct total quantity for a non-empty cart", () => {
    const cart: any = [
      { id: 1, name: "Item 1", price: 10, quantity: 2 },
      { id: 2, name: "Item 2", price: 5, quantity: 1 },
      { id: 3, name: "Item 3", price: 20, quantity: 3 },
    ];
    expect(getTotalQuantity(cart)).toEqual(3);
  });
});

describe("getTotalPrice", () => {
  it("should return 0 for an empty cart", () => {
    const cart: any = [];
    expect(getTotalPrice(cart)).toEqual(0);
  });

  it("should return the correct total price for a non-empty cart", () => {
    const cart: any = [
      { id: 1, name: "Item 1", price: 10, quantity: 2 },
      { id: 2, name: "Item 2", price: 5, quantity: 1 },
      { id: 3, name: "Item 3", price: 20, quantity: 3 },
    ];
    expect(getTotalPrice(cart)).toEqual(85);
  });
});
