import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import OrderPlaced from "../features/OrderPlaced";

test("displays TiTick component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <OrderPlaced />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.queryByRole("img")).not.toBeInTheDocument();
});

test("Should thank you text is present", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <OrderPlaced />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("Thank You")).toBeInTheDocument();
});
test("Should order place page is render or not", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <OrderPlaced />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("orderplaced-container")).toBeInTheDocument();
});

test("Should explore more button navigate to home page", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <OrderPlaced />
      </BrowserRouter>
    </Provider>
  );
  const exploreMoreButton = screen.getByText("Explore More");
  fireEvent.click(exploreMoreButton);
  expect(window.location.href).toBe("http://localhost/");
});

test("displays order success message", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <OrderPlaced />
      </BrowserRouter>
    </Provider>
  );
  const orderSuccessMessage = screen.getByText("Order Successfully Placed");
  expect(orderSuccessMessage).toBeInTheDocument();
});
