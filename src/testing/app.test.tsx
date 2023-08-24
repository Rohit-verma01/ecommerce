import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("App component is rendered or not", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  const linkElement = screen.getByTitle("app");
  await waitFor(() => expect(linkElement).toBeInTheDocument());
});
