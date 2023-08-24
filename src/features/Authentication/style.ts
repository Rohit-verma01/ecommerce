import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Information = styled.div`
  width: 50%;
  height: 100%;
  background-color: #a8ffb9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 30px 50px;
  border-radius: 10px;
`;

export const InputFieldContainer = styled.div<{ empty: boolean }>`
  margin-bottom: ${(props) => (!props.empty ? "10px" : "20px")};
  display: flex;
  flex-direction: column;
  width: 80%;
`;
export const FormInput = styled.input<{ empty: boolean }>`
  border: 2px solid #00ad5f;
  border-color: ${(props) => (!props.empty ? "red" : "#00ad5f")};
  font-size: 15px;
  margin-bottom: 0px;
  border-radius: 10px;
  padding: 10px 15px;
  outline: none;
  :focus {
    box-shadow: 1px 1px 3px 1px
      ${(props) => (!props.empty ? "none" : "#00ad5f")};
    background-color: rgb(255 250 244);
  }
`;

export const Button = styled.button`
  border-radius: 20px;
  padding: 10px 0px;
  font-size: 20px;
  font-weight: 600;
  border: 0;
  width: 80%;
  cursor: pointer;
  color: white;
  background-color: #00ad5f;
  margin-top: 10px;
`;

export const InformationContainerButton = styled.button<{ load: boolean }>`
  padding: 8px 40px;
  border: 2px solid #00ad5f;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  margin-top: 30px;
  background-color: ${(props) => (props.load ? "#dbdbdb" : "#fff")};
  color: #00ad5f;
  cursor: pointer;
  :active {
    transform: scale(${(props) => (props.load ? "1" : "0.96")});
  }
`;
export const ErrorMessage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  background-color: #ff3b3b;
  border-radius: 0.5em;
  color: #ffffff;
  padding: 10px 20px;
  margin: 5px;
`;

export const SuccessMessage = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
  padding: 10px 20px;
  background-color: #00b049;
  color: white;
  animation: linear;
  animation-name: run;
  animation-duration: 0.5s;
  @keyframes run {
    0% {
      left: -20%;
    }
    100% {
      left: 0%;
    }
  }
`;
export const Close = styled.div`
  width: 25px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
`;

export const Message = styled.span`
  color: red;
`;
