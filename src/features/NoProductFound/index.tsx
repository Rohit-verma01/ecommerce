import NoProductBag from "../../assests/Images/NoProductBag.jpg";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
const NoProductFound = () => {
  return (
    <div data-testid="no-product">
      <Image src={NoProductBag} />
    </div>
  );
};

export default NoProductFound;
