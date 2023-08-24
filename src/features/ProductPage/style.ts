import styled from "styled-components";
export const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 50px;
`;
export const ProductImage = styled.img`
  width: 35%;
  height: 300px;
  object-fit: contain;
  margin-right: 40px;
`;
export const DetailContainer = styled.div`
  width: 40%;
  height: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: center;
`;
