import styled, { css } from "styled-components";
import { useState } from "react";

const NavItem = ({ title }) => {
  const [open, toggleOpen] = useState(false);

  return (
    <Container onClick={() => toggleOpen(!open)}>
      <Link >{title}</Link>
       <Content open={open}>Dropdown Content</Content>
    </Container>
  );
};

export default NavItem;

const Container = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.main};
  position: relative;
`;

const Link = styled.a``;

const Content = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  background-color: ${(props) => props.theme.main};
  padding: 0.75rem;
  transition-property: opacity; 
  transition-duration: .167s;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  ${ props => props.open ? css`
    opacity: 1;
  ` : css`
    opacity: 0;
  `}
`;
