import React, { ReactNode } from "react";
import { ProductType } from "../../../features/Products";
import { createSearchParams, useNavigate } from "react-router-dom";
import { BuyButton } from "../style";

const Buy = (props: { children: ReactNode; data: ProductType }) => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id")
    ? JSON.parse(localStorage.getItem("id")!)
    : "";
  const oneProductCheckOut = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (id === "") navigate("/login");
    else
      navigate({
        pathname: "/checkout",
        search: `${createSearchParams({ id: props.data.id.toString() })}`,
      });
  };

  return <BuyButton onClick={oneProductCheckOut}>{props.children}</BuyButton>;
};

export default Buy;
