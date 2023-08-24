import styled from "styled-components";

export const AddButton = styled.button`
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
  :disabled {
    background-color: #00ad5fb7;
    color: #ebebeb;
    cursor: default;
  }
`;

export const BuyButton = styled.button`
  background-color: #fff;
  color: #00ad5f;
  padding: 10px;
  border: 1px solid #00ad5f;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  :active {
    color: white;
    background-color: #00ad5f;
  }
`;
export const WishListIcon = styled.div<{ add: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 30px;
  width: 33px;
  font-size: 25px;
  color: ${(props) => (props.add ? "red" : "white")};
  position: relative;
  right: -140px;
  background-color: #b8b8b8;
`;
