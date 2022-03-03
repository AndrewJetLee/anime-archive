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

  const [animeMetaData, setAnimeMetaData] = useState(location.state.anime);
  const [mangaMetaData, setMangaMetaData] = useState(location.state.manga);
  const [animes, setAnimes] = useState(location.state.anime.data);
  const [mangas, setMangas] = useState(location.state.manga.data);

  useEffect(() => {
    setAnimes(location.state.anime.data);
    setMangas(location.state.manga.data);
  }, [location.state]);

  const handleClick = async () => {
    const loadedAnime = await jikanRequest.get(animeMetaData.links.next);
    const loadedManga = await jikanRequest.get(mangaMetaData.links.next);
    setAnimeMetaData(loadedAnime.data);
    setAnimes([...animes, ...loadedAnime.data.data]);
    setMangaMetaData(loadedAnime.data);
    setMangas([...mangas, ...loadedManga.data.data]);
  };

  return (
    <Container>
      <Nav />
      <Header>
        <HeaderTitle>Search</HeaderTitle>
      </Header>
      <Wrapper>
        <Title>Anime</Title>
        <List items={animes} />
        <Title>Manga</Title>
        <List items={mangas} />
        <More onClick={handleClick}>More</More>
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