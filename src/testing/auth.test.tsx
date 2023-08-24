import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { store } from "../app/store";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { SignIn } from "../features/Authentication/SignIn";
import { BrowserRouter } from "react-router-dom";
import authReducer, { authActions } from "../features/Authentication/slice";
import { SignUp } from "../features/Authentication/SignUp";

test("Check if the Sign in element is present in the Application", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    </Provider>
  );
  const passwordElement = screen.getByPlaceholderText(/Enter Password/i);
  const emailElement = screen.getByPlaceholderText(/Enter Email/i);
  expect(emailElement).toBeInTheDocument();
  expect(passwordElement).toBeInTheDocument();
});
test("Should sign up form render", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </Provider>
  );
  const usernameElement = screen.getByPlaceholderText(/Enter Username/i);
  const passwordElement = screen.getByPlaceholderText(/Enter Password/i);
  expect(usernameElement).toBeInTheDocument();
  expect(passwordElement).toBeInTheDocument();
});

test("should handle a user being login", async () => {
  const previousState = {
    isActive: false,
    name: null,
  };
  await waitFor(() =>
    expect(authReducer(previousState, authActions.login("dummy"))).toEqual({
      isActive: true,
      name: "dummy",
    })
  );
});

test("should handle a user being logout", async () => {
  const previousState = {
    isActive: false,
    name: null,
  };
  await waitFor(() =>
    expect(authReducer(previousState, authActions.logout())).toEqual({
      isActive: false,
      name: null,
    })
  );
});

test("Should navigate to sign up page", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    </Provider>
  );
  const signupButton = screen.getByTestId("signup");
  fireEvent.click(signupButton);

  expect(window.location.href).toBe("http://localhost/signup");
});

test("Should navigate to login  page", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </Provider>
  );
  const loginButton = screen.getByTestId("login");
  fireEvent.click(loginButton);

  expect(window.location.href).toBe("http://localhost/login");
});

test("should show error message when email is invalid", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    </Provider>
  );

  const emailInput = screen.getByPlaceholderText("Enter Email");
  const passwordInput = screen.getByPlaceholderText("Enter Password");
  const loginButton = screen.getByTestId("login");

  fireEvent.change(emailInput, { target: { value: "invalidemail" } });
  fireEvent.change(passwordInput, { target: { value: "validpassword" } });
  fireEvent.click(loginButton);

  expect(screen.getByText("Enter valid email")).toBeInTheDocument();
  expect(
    screen.queryByText("Password must contain atleast 6 character")
  ).toBeNull();
});

test("should show error message when password is too short", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    </Provider>
  );

  const emailInput = screen.getByPlaceholderText("Enter Email");
  const passwordInput = screen.getByPlaceholderText("Enter Password");
  const loginButton = screen.getByTestId("login");

  fireEvent.change(emailInput, { target: { value: "validemail@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "short" } });
  fireEvent.click(loginButton);

  expect(screen.queryByText("Enter valid email")).toBeNull();
  expect(
    screen.getByText("Password must contain atleast 6 character")
  ).toBeInTheDocument();
});
test("should show error message when anything is empty", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </Provider>
  );

  const nameInput = screen.getByPlaceholderText("Enter Username");
  const emailInput = screen.getByPlaceholderText("Enter Email");
  const confirmaPasswordInput = screen.getByPlaceholderText("Comfirm Password");
  const passwordInput = screen.getByPlaceholderText("Enter Password");
  const signupButton = screen.getByTestId("signup");

  fireEvent.change(nameInput, { target: { value: " " } });
  fireEvent.change(emailInput, { target: { value: "" } });
  fireEvent.change(confirmaPasswordInput, { target: { value: "" } });
  fireEvent.change(passwordInput, { target: { value: "123456" } });
  fireEvent.click(signupButton);

  expect(screen.getByText("Email Required !")).toBeInTheDocument();
  expect(screen.getByText("Username Required !")).toBeInTheDocument();
  expect(screen.getByText("Confirm Password Required !")).toBeInTheDocument();
  expect(
    screen.queryByText("Password must contain atleast 6 character")
  ).toBeNull();
});
