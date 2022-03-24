import styled, { css } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavItem = ({ title }) => {
  const navigate = useNavigate(); 
  const [open, toggleOpen] = useState(false);
  
  const handleClickAnimeItem = async (e) => {
    let type = e.target.getAttribute("name");
    if (type === "topAnime") {
      navigate(`/browse/top/anime`);
    } else if (type === "genres") {
      navigate(`/anime/genres`)
    } else {
      navigate(`/anime/season/`)
    }
  }

  const handleClickMangaItem = async (e) => {
    let type = e.target.getAttribute("name");
    if (type === "topManga") {
      navigate(`/browse/top/manga`);
    } else if (type === "genres") {
      navigate(`/manga/genres`)
    } 
  }

  return (
    <Container open={open} onMouseEnter={() => toggleOpen(true)} onMouseLeave={() => toggleOpen(false)}>
      <Link>{title}</Link>
      {title === "Anime" ? (
        <Content open={open} onClick={handleClickAnimeItem}>
          <ContentItem name="topAnime">Top {title}</ContentItem>
          <ContentItem name="seasonal">Seasonal {title}</ContentItem>
          <ContentItem name="genres">Anime Search</ContentItem>
        </Content>
      ) : (
        <Content open={open} onClick={handleClickMangaItem}>
          <ContentItem name="topManga">Top {title}</ContentItem>
          <ContentItem name="genres">Manga Search</ContentItem>
        </Content>
      )}
    </Container>
  );
};

export default NavItem;

const Container = styled.div`
  padding: 10px;
  cursor: pointer;
  position: relative;
  z-index: 1000;
  background-color: ${props => props.open && props.theme.secondary};
  color: ${props => props.open ? "black" : "white"};
  text-transform: uppercase; 
  height: 100%;
  display: flex;
  align-items: center;
`;

const Link = styled.a``;

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 100%;
  width: 140px;
  background-color: inherit;
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

const ContentItem = styled.a`
  width: 100%;
  padding: 8px 12px;
  font-weight: 600;
  :hover {
     background-color: ${(props) => props.theme.main};
     color: ${(props => "white")};
  }
`;
