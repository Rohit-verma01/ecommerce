import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../../firebase";
import * as constant from "../../../constants";
import {
  Container,
  FormContainer,
  FormInput,
  Button,
  Information,
  InformationContainerButton,
  ErrorMessage,
  Close,
  Message,
  InputFieldContainer,
  SuccessMessage,
} from "../style";
import { doc, setDoc } from "firebase/firestore";
import Loader from "../../../components/Loader";

type input = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultValue: input = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const SignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [userDetail, setUserDetail] = useState<input>(defaultValue);
  const [isUserCreated, setIsUserCreated] = useState<boolean>(false);
  const [error, setError] = useState<input>(defaultValue);
  const resetValues = () => {
    setUserDetail({
      ...defaultValue,
    });
  };
  const closeMessage = () => {
    setIsError(false);
  };
  const showUserCreated = () => {
    setIsUserCreated(true);
    setTimeout(() => {
      setIsUserCreated(false);
    }, 1200);
  };
  const handleNavigate = () => {
    if (!isLoading) navigate("/login");
  };
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setError({ ...error, [name]: "" });
    setUserDetail({ ...userDetail, [name]: value });
  };
  const handleValidation = () => {
    const emptyErrorMessage = {
      ...defaultValue,
    };
    let isEmpty = false;
    if (userDetail.username.trim().length === 0 && (isEmpty = true)) {
      emptyErrorMessage.username = "Username Required !";
    }
    if (userDetail.email.trim().length === 0 && (isEmpty = true)) {
      emptyErrorMessage.email = "Email Required !";
    }
    if (userDetail.password.trim().length < 6 && (isEmpty = true)) {
      emptyErrorMessage.password = "Password must contain atleast 6 character";
    }
    if (userDetail.confirmPassword.trim().length === 0 && (isEmpty = true)) {
      emptyErrorMessage.confirmPassword = "Confirm Password Required !";
    }
    if (isEmpty === false) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userDetail.email)) {
        isEmpty = true;
        setIsError(true);
        setErrorMessage("Enter valid email");
      } else if (userDetail.password !== userDetail.confirmPassword) {
        isEmpty = true;
        setIsError(true);
        setErrorMessage("password not matched");
      }
    }
    setError({ ...emptyErrorMessage });
    return (
      Object.values(emptyErrorMessage).filter((value) => value !== "")
        .length === 0 && !isEmpty
    );
  };

  const handleSignUp = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const isValid = handleValidation();
    if (isValid) {
      setIsLoading(true);
      const userCrendential = createUserWithEmailAndPassword(
        auth,
        userDetail.email,
        userDetail.password
      );
      showUserCreated();
      const user = (await userCrendential).user;
      await updateProfile(user, { displayName: userDetail.username });
      await setDoc(doc(db, constant.USERS, user.uid), {
        id: user.uid,
        name: user.displayName,
        email: user.email,
      });
      setIsLoading(false);
      navigate("/login");
      resetValues();
    }
  };
  return (
    <>
      {isUserCreated && (
        <SuccessMessage>Your Account Created Successfully</SuccessMessage>
      )}
      <Container>
        <Information>
          <h1>Welcome Back !</h1>
          <p>
            To start your shopping with us please login with you personal
            information
          </p>
          <InformationContainerButton
            data-testid="login"
            type="submit"
            onClick={handleNavigate}
            load={isLoading}
          >
            Log In
          </InformationContainerButton>
        </Information>
        <FormContainer>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <h1>Create Account</h1>
              {isError && (
                <ErrorMessage>
                  {errorMessage} <Close onClick={closeMessage}>&times;</Close>
                </ErrorMessage>
              )}
              <InputFieldContainer empty={error.username === ""}>
                <FormInput
                  name="username"
                  type="text"
                  placeholder="Enter Username"
                  value={userDetail.username}
                  onChange={handleOnchange}
                  empty={error.username === ""}
                  autoComplete="off"
                />
                <Message>{error.username}</Message>
              </InputFieldContainer>

              <InputFieldContainer empty={error.email === ""}>
                <FormInput
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={userDetail.email}
                  onChange={handleOnchange}
                  empty={error.email === ""}
                  autoComplete="off"
                />
                <Message>{error.email}</Message>
              </InputFieldContainer>
              <InputFieldContainer empty={error.password === ""}>
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  value={userDetail.password}
                  onChange={handleOnchange}
                  empty={error.password === ""}
                  autoComplete="off"
                />
                <Message>{error.password}</Message>
              </InputFieldContainer>
              <InputFieldContainer empty={error.confirmPassword === ""}>
                <FormInput
                  name="confirmPassword"
                  type="password"
                  placeholder="Comfirm Password"
                  value={userDetail.confirmPassword}
                  onChange={handleOnchange}
                  empty={error.confirmPassword === ""}
                  autoComplete="off"
                />
                <Message>{error.confirmPassword}</Message>
              </InputFieldContainer>

              <Button data-testid="signup" type="submit" onClick={handleSignUp}>
                Sign Up
              </Button>
            </>
          )}
        </FormContainer>
      </Container>
    </>
  );
};
