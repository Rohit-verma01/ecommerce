import styled from "styled-components";

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  height: 60px;
  color: #00ad5f;
  border-bottom: 2px solid #00ad5f;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 1;
`;

export const NavItem = styled.li`
  padding: 0px;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  cursor: pointer;
  position: relative;
  /* flex-direction: column; */
`;

export const RightNavLayout = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 20px;
  .interactive-element {
    padding: 0px 20px;
    height: 60px;
    :hover {
      color: black;
    }
    :active {
      background-color: #00ad5f;
      color: white;
      border-bottom: 0;
    }
  }
`;

export const Logo = styled.div`
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 3px;
  font-family: "Signika", sans-serif;
`;

export const SearchInput = styled.input`
  background-color: lightgray;
  border: none;
  padding: 7px 15px;
  width: 300px;
  outline: none;
  font-size: 15px;
`;
export const SearchButton = styled.button`
  background-color: white;
  color: #00ad5f;
  border: none;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: 600;
  border: 2px solid #00ad5f;
  cursor: pointer;
  :active {
    background-color: #00ad5f;
    color: white;
  }
`;

export const Count = styled.div`
  position: absolute;
  right: 10%;
  top: 12%;
  font-size: 15px;
`;

export const HoverMessage = styled.span`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #00ad5f;
  font-size: 13px;
  background-color: white;
  padding: 3px 5px;
  color: #00ad5f;
`;
