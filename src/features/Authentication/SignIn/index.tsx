import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import {
  Container,
  FormContainer,
  FormInput,
  Button,
  Information,
  InformationContainerButton,
  InputFieldContainer,
  ErrorMessage,
  Close,
  Message,
} from "../style";
import Loader from "../../../components/Loader";
import { useAppDispatch } from "../../../app/store";
import { authActions } from "../slice";
import * as constant from "../../../constants";

type InputType = {
  email: string;
  password: string;
};

interface ErrorType extends InputType {
  firebase: string;
}

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState<InputType>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<ErrorType>({
    email: "",
    password: "",
    firebase: "",
  });
  const closeMessage = () => {
    setError({ ...error, firebase: "" });
  };

  const handleValidation = () => {
    const err = {
      email: "",
      password: "",
      firebase: "",
    };
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userDetail.email))
      err.email = "Enter valid email";
    if (userDetail.password.trim().length < 6)
      err.password = "Password must contain atleast 6 character";

    setError({ ...err });
    return Object.values(err).filter((value) => value !== "").length === 0;
  };

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setError({ ...error, [name]: "" });
    setUserDetail({ ...userDetail, [name]: value });
  };
  const handleNavigate = () => {
    if (!isLoading) navigate("/signup");
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const isValid = handleValidation();
    if (isValid) {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, userDetail.email, userDetail.password)
        .then((userCrendential) => {
          dispatch(authActions.login(userCrendential.user.displayName));
          localStorage.setItem(
            constant.ID,
            JSON.stringify(userCrendential.user.uid)
          );
          setIsLoading(false);
          navigate("/");
        })
        .catch((error) => {
          setIsLoading(false);
          setError({ email: "", password: "", firebase: error.message });
        });
    }
  };
  return (
    <Container>
      <Information>
        <h1>Hello, Friend!</h1>
        <p>
          If you are new then enter your personal details and start shopping
          with us
        </p>

        <InformationContainerButton
          data-testid="signup"
          type="submit"
          onClick={handleNavigate}
          load={isLoading}
        >
          Sign Up
        </InformationContainerButton>
      </Information>

      <FormContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h1>Log In</h1>
            {error.firebase && (
              <ErrorMessage>
                {error.firebase}
                <Close onClick={closeMessage}>&times;</Close>
              </ErrorMessage>
            )}
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

            <Button data-testid="login" type="submit" onClick={handleSubmit}>
              Log in
            </Button>
          </>
        )}
      </FormContainer>
    </Container>
  );
};
