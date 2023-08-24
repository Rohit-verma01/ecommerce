import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TickContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #00d374;
  color: white;
`;

export const Button = styled.button`
  margin-top: 20px;
  color: white;
  background-color: #00ad5f;
  padding: 15px;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  :active {
    color: #00ad5f;
    background-color: #fff;
    border: 1px solid #00ad5f;
  }
`;
