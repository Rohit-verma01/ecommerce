import styled from "styled-components";
export const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const CartTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #a8ffb9;
  letter-spacing: 2px;
`;

export const CartWrapper = styled.div`
  display: flex;
  margin: 0px 20px;
`;

export const MainCart = styled.div`
  width: 70%;
  text-align: center;
`;

export const CartHeading = styled.div`
  width: 100%;
  display: flex;
  font-size: 15px;
  /* margin-bottom: 40px; */
`;

export const Product = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductPrice = styled.div`
  width: 15%;
`;
export const ProductQuantity = styled.div`
  width: 17%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const ProductTotalPrice = styled.div`
  width: 17%;
`;
export const CartDetails = styled.div`
  width: 100%;
`;
export const ProductDetail = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0px;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 70%;
  height: 180px;
  object-fit: contain;
`;

export const CartSummary = styled.div`
  margin-top: 30px;
  width: 25%;
  display: flex;
  flex-direction: column;
  background-color: #dddddd;
  border-radius: 10px;
  height: fit-content;
`;

export const SummaryHeading = styled.div`
  width: 100%;
  text-align: center;
`;
export const SummaryDetail = styled.div`
  width: 100%;
  padding: 10px 20px;
  font-size: 12px;
`;
export const Detail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Line = styled.div`
  width: 90%;
  border: 1px solid gray;
  margin: auto;
`;

export const Total = styled.div`
  width: 100%;
  padding: 10px 20px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  border: 0;
  background-color: #cdffd1;
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

export const QuantityButton = styled.div`
  font-size: 30px;
  height: 30px;
  color: #00ad5f;
  cursor: pointer;
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

export const Button = styled.button`
  border-radius: 5px;
  padding: 10px 0px;
  font-size: 20px;
  font-weight: 600;
  border: 0;
  cursor: pointer;
  color: white;
  background-color: #00ad5f;
  margin: 15px 10px;
`;

export const QuantityWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
