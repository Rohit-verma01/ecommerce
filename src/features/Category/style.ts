import styled from "styled-components";

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: #000;
  padding: 0px 10px;
  position: relative;
  cursor: pointer;
  :hover {
    color: white;
    background-color: #00ad5f;
    border-radius: 2px;
  }
  :focus {
    color: white;
    background-color: #00ad5f;
    border-radius: 2px;
  }
`;

export const SubCategoryContainer = styled.div`
  display: block;
  z-index: 5;
  position: absolute;
  top: 43px;
  left: 0;
  border: 5px;
  height: fit-content;
  width: max-content;
  background-color: #fff;
  box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

export const Item = styled.div`
  padding: 10px;
  color: #535353;
  font-size: 15px;
  font-weight: 500;
  :hover {
    color: #000;
  }
`;
