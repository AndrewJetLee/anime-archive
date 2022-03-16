import { useLocation } from "react-router-dom";
import styled from "styled-components";
import List from "../components/List";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { HeaderTitle, Header } from "./Login";
import { useState, useEffect } from "react";
import { jikanRequest } from "../requestMethods";
import { Title } from "../components/Carousel";

const Search = () => {
  let location = useLocation();
  console.log(location.state);
  const [animes, setAnimes] = useState(location.state.anime?.data);
  const [animePagination, setAnimePagination] = useState(location.state.anime);

  const [mangas, setMangas] = useState(location.state.manga?.data);
  const [mangaPagination, setMangaPagination] = useState(location.state.manga);

  const [characters, setCharacters] = useState(location.state.characters?.data);
  const [charactersPagination, setCharactersPagination] = useState(
    location.state.characters
  );
  
  const [type, setType] = useState(location.state.type);
  const [searchFocus, setSearchFocus] = useState("");

  useEffect(() => {
    setAnimes(location.state.anime?.data);
    setAnimePagination(location.state.anime.pagination);
    setMangas(location.state.manga?.data);
    setMangaPagination(location.state.manga.pagination);
    setCharacters(location.state.characters?.data);
    setCharactersPagination(location.state.characters.pagination);
    setType(location.state.type);
  }, [location.state]);

  const handleClick = async () => {

  };

  return (
    <Container>
      <Nav />
      <Header>
        <HeaderTitle>Search</HeaderTitle>
      </Header>
      <Wrapper>
        {(type === "animeSearch" || type === "all") && (
          <>
            <Title>Anime</Title>
            <List items={animes} type="search"/>
            {animePagination.has_next_page && (
              <More onClick={handleClick}>More</More>
            )}
          </>
        )}

        {(type === "mangaSearch" || type === "all") && (
          <>
            <Title>Manga</Title>
            <List items={mangas}  type="search"/>
            {mangaPagination.has_next_page && (
              <More onClick={handleClick}>More</More>
            )}
          </>
        )}

        {type === "all" && (
          <>
            <Title>Characters</Title>
            <List items={characters}  type="search"/>
            {charactersPagination.has_next_page && (
              <More onClick={handleClick}>More</More>
            )}
          </>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  min-height: 100vh;
`;

const More = styled.button``;
