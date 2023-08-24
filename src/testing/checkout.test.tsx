import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckOut from "../features/CheckOut";
import React from "react";

test("Should check out header is present or not", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CheckOut />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("CheckOut")).toBeInTheDocument();
});
test("Should check out shipping details form is present or not", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CheckOut />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("Shipping details")).toBeInTheDocument();
});
test("Should check out payment details form is present or not", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CheckOut />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("Payment details")).toBeInTheDocument();
});
test("Should check out order summary is present or not", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CheckOut />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("Order Summary")).toBeInTheDocument();
});

test("Should back to cart button navigate to cart page", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CheckOut />
      </BrowserRouter>
    </Provider>
  );
  const cartButton = screen.getByText("Back to Cart");
  fireEvent.click(cartButton);
  expect(window.location.href).toBe("http://localhost/cart");
});
test("Should Form Input is render", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CheckOut />
      </BrowserRouter>
    </Provider>
  );
  const input = screen.getByPlaceholderText("First Name");
  expect(input).toBeInTheDocument();
});
test("Should Back To Cart button is available", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CheckOut />
      </BrowserRouter>
    </Provider>
  );
  const button = screen.getByText("Back to Cart");
  expect(button).toBeInTheDocument();
});

test("should show error message when anything is empty", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CheckOut />
      </BrowserRouter>
    </Provider>
  );

  const firstNameInput = screen.getByPlaceholderText("First Name");
  const lastNameInput = screen.getByPlaceholderText("Last Name");
  const emailInput = screen.getByPlaceholderText("Email Address");
  const CCNInput = screen.getByPlaceholderText("Credit Card Number");
  const CVVInput = screen.getByPlaceholderText("CVV");
  const placeorderButton = screen.getByTestId("place-order");

  fireEvent.change(firstNameInput, { target: { value: " " } });
  fireEvent.change(lastNameInput, { target: { value: "" } });
  fireEvent.change(emailInput, { target: { value: "rohit@gmail" } });
  fireEvent.change(CCNInput, { target: { value: "" } });
  fireEvent.change(CVVInput, { target: { value: "1234" } });
  fireEvent.click(placeorderButton);

  expect(screen.getByText("Enter valid first name")).toBeInTheDocument();
  expect(screen.getByText("Enter valid last name")).toBeInTheDocument();
  expect(screen.getByText("Enter valid email")).toBeInTheDocument();
  expect(
    screen.getByText("Enter valid credit card number")
  ).toBeInTheDocument();
  expect(screen.queryByText("Enter valid CVV")).toBeNull();
});
