import {
  FooterContainer,
  FooterDivision,
  FooterHeading,
  FooterContent,
  Line,
} from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDivision>
        <FooterHeading>Get to Know Us</FooterHeading>
        <FooterContent>About us</FooterContent>
        <FooterContent>Careers</FooterContent>
        <FooterContent>Press Releases</FooterContent>
      </FooterDivision>
      <Line />
      <FooterDivision>
        <FooterHeading>Connect with Us</FooterHeading>
        <FooterContent>Facebook</FooterContent>
        <FooterContent>Twitter</FooterContent>
        <FooterContent>Instagram</FooterContent>
      </FooterDivision>
      <Line />
      <FooterDivision>
        <FooterHeading>Registered Office Address</FooterHeading>
        <FooterContent>
          Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
          Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
          Bengaluru, 560103, Karnataka, India
        </FooterContent>
      </FooterDivision>
    </FooterContainer>
  );
};

export default Footer;
