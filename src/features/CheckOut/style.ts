import styled from "styled-components";
export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.div`
  width: 100%;
  background-color: #a8ffb9;
  text-align: center;
  letter-spacing: 3px;
`;
export const DeatilsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const CheckOutForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0px 80px;
`;
export const FormHeading = styled.div`
  width: 100%;
  text-align: center;
  color: #00ad5f;
  font-size: 20px;
`;
export const TwoOnputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const FormInput = styled.input<{ empty: boolean }>`
  position: relative;
  padding: 10px 8px;
  margin: 15px 10px;
  border: 2px solid #00ad5f;
  font-size: 15px;
  border-color: ${(props) => (props.empty ? "#00ad5f" : "red")};
  border-radius: 10px;
  outline: none;
  :focus {
    box-shadow: 1px 1px 3px 1px #00ad5f;
    background-color: rgb(255 250 244);
  }
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

export const Message = styled.span`
  padding: 0;
  margin: 0;
  margin-left: 12px;
  color: red;
`;

export const Mandatory = styled.span`
  color: red;
  position: sticky;
  bottom: 47px;
  left: 93%;
  display: inline-block;
  overflow: hidden;
  font-size: 15px;
  padding: 0;
  margin: 0;
`;
