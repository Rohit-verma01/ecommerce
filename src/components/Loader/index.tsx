import React from "react";
import styled from "styled-components";
const LoaderIcon = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #34db74;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Loader = () => {
  return <LoaderIcon />;
};

export default Loader;
