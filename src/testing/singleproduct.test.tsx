import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store, RootState } from "../app/store";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SingleProductPage from "../features/ProductPage";

test("Should loader is present in single product page", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SingleProductPage />
      </BrowserRouter>
    </Provider>
  );
  const loaderComponent = screen.queryByTestId("loader");
  expect(loaderComponent).not.toBeInTheDocument();
});
test("Should product page render", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SingleProductPage />
      </BrowserRouter>
    </Provider>
  );
  const productComponent = screen.queryByTestId("product-container");
  expect(productComponent).not.toBeInTheDocument();
});

test("should have authReducer, cartReducer, and wishlistReducer", () => {
  const state = store.getState();
  expect(state.authReducer).toBeDefined();
  expect(state.cartReducer).toBeDefined();
  expect(state.wishlistReducer).toBeDefined();
});

test("should return correct RootState", () => {
  const state: RootState = store.getState();
  expect(typeof state.authReducer).toBe("object");
  expect(typeof state.cartReducer).toBe("object");
  expect(typeof state.wishlistReducer).toBe("object");
});
