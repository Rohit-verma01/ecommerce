import LockImage from "../../assests/Images/LockImage.png";
import { useNavigate } from "react-router";
import { ImageContainer, Container, LoginButton } from "./style";

const LoginFirst = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Container>
      <ImageContainer>
        <img src={LockImage} alt="Lock " />
      </ImageContainer>
      <h1>Login First</h1>
      <LoginButton onClick={handleClick}>LogIn</LoginButton>
    </Container>
  );
};

export default LoginFirst;
