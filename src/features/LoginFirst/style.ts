import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 0px;
`;

export const ImageContainer = styled.div`
  height: 50%;
  object-fit: contain;
`;
export const LoginButton = styled.button`
  color: white;
  background-color: #00ad5f;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  width: 150px;
  cursor: pointer;
  :active {
    color: #00ad5f;
    background-color: #fff;
    border: 1px solid #00ad5f;
  }
`;
