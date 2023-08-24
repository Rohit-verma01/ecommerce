import styled from "styled-components";
import BackgroundImage from "../../assests/Images/Background404.jpg";
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fefaff;
  text-align: center;
  @media (max-width: 450px) {
    h1 {
      transition: 0.3s;
      font-size: 1.5em;
    }
  }
  @media (max-width: 350px) {
    h1 {
      transition: 0.3s;
      font-size: 1em;
    }
  }
`;
const SimpleText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 7rem;
  font-weight: 900;
  letter-spacing: 20px;
  background-image: url(${BackgroundImage});
  background-size: cover;
  color: transparent;
  margin-top: 60px;
  margin-bottom: 0;
  background-clip: text;
  -webkit-background-clip: text;

  @media (max-width: 450px) {
    font-size: 5rem;
    transition: 0.3s;
    letter-spacing: 10px;
  }
  @media (max-width: 350px) {
    font-size: 3.5rem;
    letter-spacing: 5px;
    transition: 0.3s;
  }
`;

const HomescreenButton = styled.button`
  margin-top: 30px;
  color: white;
  background-color: #00ad5f;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  :active {
    color: #00ad5f;
    background-color: #fff;
    border: 1px solid #00ad5f;
  }
`;

export { MessageContainer, SimpleText, HomescreenButton };
