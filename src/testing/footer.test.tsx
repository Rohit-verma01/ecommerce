import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../features/Footer";

test("Should check out header is present or not", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("Get to Know Us")).toBeInTheDocument();
  expect(screen.getByText("Connect with Us")).toBeInTheDocument();
  expect(screen.getByText("Registered Office Address")).toBeInTheDocument();
});
