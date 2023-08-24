import styled from "styled-components";
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const Filter = styled.input`
  color: green;
`;

export const Card = styled.div`
  width: 350px;
  box-shadow: 1px 1px 10px 0px #a8a8a8;
  border-radius: 5px;
  margin: 10px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`;

export const CardImage = styled.img`
  height: 200px;
  width: 80%;
  object-fit: contain;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
`;

export const FilterContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
`;
