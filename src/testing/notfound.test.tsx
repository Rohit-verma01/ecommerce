import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import NotFound from "../features/NotFoundPage";

test("Should check Not found page is present", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("Oops!")).toBeInTheDocument();
});
test("Should navigate to home page on button click", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    </Provider>
  );
  const homeButton = screen.getByTestId("home-btn");
  fireEvent.click(homeButton);
  expect(window.location.href).toBe("http://localhost/");
});
