import styled from "styled-components";
export const WishlistContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;
export const WishlistTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #a8ffb9;
  letter-spacing: 2px;
`;
export const WishlistProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 50px 0px;
  padding: 0px 100px;
`;

export const Product = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0px;
  border-bottom: 2px solid gray;
`;
export const ProductImage = styled.img`
  width: 30%;
  height: 200px;
  object-fit: contain;
  padding-bottom: 40px;
`;
export const ProductDetail = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;
export const ButtonWrapper = styled.div`
  padding-bottom: 40px;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const WishlistButton = styled.button`
  width: 140px;
  background-color: #00ad5f;
  padding: 10px 15px;
  font-size: 15px;
  border: 0;
  color: white;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  border: 0;
  background-color: #a8ffb9;
  border-radius: 10px;
  padding: 0px 10px;
  font-size: 20px;
  font-weight: 1000;
  color: #006638;
  cursor: pointer;
  margin-left: 50px;
  margin-top: 30px;
`;

export const Arrow = styled.div`
  font-size: 40px;
  margin-right: 10px;
`;
export const EmptyCartImage = styled.img`
  height: 250px;
  object-fit: contain;
`;
export const EmptyImageContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyCartContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;
