import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getTotalPrice, getTotalQuantity } from "../Category/helper";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import * as constant from "../../constants";
import {
  Container,
  Header,
  DeatilsContainer,
  CheckOutForm,
  FormHeading,
  FormInput,
  Button,
  CartSummary,
  SummaryHeading,
  Line,
  SummaryDetail,
  Detail,
  Total,
  Message,
} from "./style";

type input = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  state: string;
  zip: string;
  ccno: string;
  exp: string;
  cvv: string;
};

const defaultInput = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  state: "",
  zip: "",
  ccno: "",
  exp: "",
  cvv: "",
};

const CheckOut = () => {
  const [price, setPrice] = useState<number>(0);
  const [details, setDetails] = useState<input>(defaultInput);
  const [error, setError] = useState<input>(defaultInput);
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const id = Number(searchParam.get(constant.ID));

  useEffect(() => {
    const fetchData = async () => {
      if (id != null) {
        const product = await getDocs(
          query(
            collection(db, constant.PRODUCTS),
            where("product_id", "==", id)
          )
        );
        product.forEach((doc) => {
          setPrice(doc.data().price);
        });
      }
    };
    fetchData();
  }, [id]);

  const cart = useSelector((state: RootState) => state.cartReducer.cart);

  const quantity = id === 0 ? getTotalQuantity(cart) : 1;
  const amount = id === 0 ? getTotalPrice(cart) : price;

  const validator = () => {
    const error = { ...defaultInput };
    if (details.firstName.trim().length === 0)
      error.firstName = "Enter valid first name";
    if (details.lastName.trim().length === 0)
      error.lastName = "Enter valid last name";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(details.email))
      error.email = "Enter valid email";
    if (details.address.trim().length === 0)
      error.address = "Enter valid address";
    if (details.state.trim().length === 0) error.state = "Enter valid state";
    if (!/^[1-9]\d{5}$/.test(details.zip)) {
      error.zip = "Enter valid zip code";
    }
    if (
      !/^(?:(4\d{12}(?:\d{3})?)|(5[1-5]\d{14})|(6(?:011|5\d{2})\d{12})|(3[47]\d{13})|(3(?:0[0-5]|[68]\d)\d{11})|((?:2131|1800|35\d{3})\d{11}))$/.test(
        details.ccno
      )
    )
      error.ccno = "Enter valid credit card number";
    if (!/^(0[1-9]|1[0-2])\/?(\d{4}|\d{2})$/.test(details.exp))
      error.exp = "Enter valid expiry";
    if (!/^\d{3,4}$/.test(details.cvv)) error.cvv = "Enter valid CVV";
    setError({ ...error });
    return Object.values(error).filter((value) => value !== "").length === 0;
  };
  const handleCheckOutSubmit = () => {
    if (validator()) navigate("/orderplaced");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
    setError({ ...error, [name]: "" });
  };
  return (
    <Container>
      <Header>
        <h1>CheckOut</h1>
      </Header>
      <DeatilsContainer>
        <CheckOutForm>
          <FormHeading>
            <h2>Shipping details</h2>
          </FormHeading>

          <FormInput
            type="text"
            name="firstName"
            placeholder="First Name"
            value={details.firstName}
            onChange={handleChange}
            empty={error.firstName === ""}
          />
          <Message>{error.firstName} </Message>
          <FormInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={details.lastName}
            onChange={handleChange}
            empty={error.lastName === ""}
          />

          <Message>{error.lastName}</Message>

          <FormInput
            type="email"
            name="email"
            placeholder="Email Address"
            value={details.email}
            onChange={handleChange}
            empty={error.email === ""}
          />
          <Message>{error.email}</Message>

          <FormInput
            type="text"
            name="address"
            placeholder="Street Address"
            value={details.address}
            onChange={handleChange}
            empty={error.address === ""}
          />
          <Message>{error.address}</Message>

          <FormInput
            type="text"
            name="state"
            placeholder=" State"
            value={details.state}
            onChange={handleChange}
            empty={error.state === ""}
          />
          <Message>{error.state}</Message>

          <FormInput
            type="text"
            name="zip"
            placeholder="Zip"
            value={details.zip}
            onChange={handleChange}
            empty={error.zip === ""}
          />
          <Message>{error.zip}</Message>

          <FormHeading>
            <h2>Payment details</h2>
          </FormHeading>
          <FormInput
            type="text"
            name="ccno"
            placeholder="Credit Card Number"
            value={details.ccno}
            onChange={handleChange}
            empty={error.ccno === ""}
          />
          <Message>{error.ccno}</Message>

          <FormInput
            type="text"
            name="exp"
            placeholder="Exp"
            value={details.exp}
            onChange={handleChange}
            empty={error.exp === ""}
          />

          <Message>{error.exp}</Message>

          <FormInput
            type="text"
            name="cvv"
            placeholder="CVV"
            value={details.cvv}
            onChange={handleChange}
            empty={error.cvv === ""}
          />
          <Message>{error.cvv}</Message>

          <Button
            data-testid="place-order"
            type="submit"
            onClick={handleCheckOutSubmit}
          >
            Place Order
          </Button>
        </CheckOutForm>
        <CartSummary>
          <SummaryHeading>
            <h2>Order Summary</h2>
          </SummaryHeading>
          <Line />
          <SummaryDetail>
            <Detail>
              <h2>Total Items</h2>
              <h2>{quantity}</h2>
            </Detail>
            <Detail>
              <h2>Sub Total</h2>
              <h2>Rs.{amount}</h2>
            </Detail>
            <Detail>
              <h2>Shipping</h2>
              <h2>Free</h2>
            </Detail>
          </SummaryDetail>
          <Line />
          <Total>
            <Detail>
              <h2>Total</h2>
              <h2>Rs.{amount}</h2>
            </Detail>
          </Total>
          {id === 0 ? (
            <Button onClick={() => navigate("/cart")}>Back to Cart</Button>
          ) : (
            <Button data-testid="home-btn" onClick={() => navigate("/")}>
              Back to Main Page
            </Button>
          )}
        </CartSummary>
      </DeatilsContainer>
    </Container>
  );
};

export default CheckOut;
