import { ReactNode, useState } from "react";
import { HoverMessage } from "../../features/Navbar/style";
import styled from "styled-components";

const Icon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tootltip = (props: { content: string; children: ReactNode }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const onHover = () => {
    setIsActive(true);
  };
  const onLeave = () => {
    setIsActive(false);
  };
  return (
    <Icon onMouseEnter={onHover} onMouseLeave={onLeave}>
      {props.children}
      {isActive && <HoverMessage>{props.content}</HoverMessage>}
    </Icon>
  );
};

export default Tootltip;
