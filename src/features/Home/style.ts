import styled from "styled-components";
export const CategorySectionContainer = styled.div`
  width: 100%;
  background-color: #a8ffb9;
  border-bottom: 1px solid #a8ffb9;
  display: flex;
  justify-content: space-around;
  height: 45px;
  margin-top: 60px;
`;

export const Button = styled.button`
  background-color: #00ad5f;
  display: block;
  width: 100%;
  border: 0;
  margin-top: 10px;
  padding: 15px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    background-color: #00ad5fe1;
  }
`;
