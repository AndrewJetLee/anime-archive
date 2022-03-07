import styled from "styled-components";
import { useState } from "react";

const NavItem = ({ title, children }) => {
  const [open, toggleOpen] = useState(false);

  return (
    <Container>
      <Link onClick={() => toggleOpen(!open)}>{title}</Link>
      {open && <Content>Dropdown Content</Content>}
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
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
`;
