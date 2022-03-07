import styled, { css } from "styled-components";
import { jikanRequest } from "../requestMethods";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavItem = ({ title }) => {
  const navigate = useNavigate(); 
  const [open, toggleOpen] = useState(false);
  
  const handleClickAnimeItem = async (e) => {
    let type = e.target.getAttribute("name");
    if (type === "top") {
      navigate(`/top/anime`);
    } else if (type === "genres") {
      navigate(`/anime/genres`)
    }
  }

  return (
    <Container onMouseEnter={() => toggleOpen(true)} onMouseLeave={() => toggleOpen(false)}>
      <Link>{title}</Link>
      {title === "Anime" ? (
        <Content open={open} onClick={handleClickAnimeItem}>
          <ContentItem name="top">Top {title}</ContentItem>
          <ContentItem name="seasonal">Seasonal {title}</ContentItem>
          <ContentItem name="genres">Genres</ContentItem>
        </Content>
      ) : (
        <Content open={open}>
          <ContentItem>Top {title}</ContentItem>
        </Content>
      )}
    </Container>
  );
};

export default NavItem;

const Container = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.main};
  position: relative;
  z-index: 1000;
`;

const Link = styled.a``;

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 100%;
  width: 140px;
  background-color: ${(props) => props.theme.main};
  padding: 0.75rem;
  transition: opacity .167s ease-in-out, transform .167s ease-in-out;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.open
      ? css`
          transform: translateY(0px);
          opacity: 1;
        `
      : css`
          transform: translateY(-10px);
          opacity: 0;
        `}
`;

const ContentItem = styled.a``;
