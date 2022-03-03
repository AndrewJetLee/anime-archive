import { useLocation } from "react-router-dom";
import styled from "styled-components";
import List from "../components/List";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Title, Header } from "./Login";
import { useState, useEffect } from "react";
import { apiRequest } from "../requestMethods";

const Search = () => {
  let location = useLocation();
  console.log(location.state);

  const [animeMetaData, setAnimeMetaData] = useState(location.state.anime);
  const [mangaMetaData, setMangaMetaData] = useState(location.state.manga);
  const [animes, setAnimes] = useState(location.state.anime.data);
  const [mangas, setMangas] = useState(location.state.manga.data);


  useEffect(() => {
    setAnimes(location.state.anime.data);
  }, [location.state])

  const handleClick = async () => {
    const res = await apiRequest.get(animeMetaData.links.next);
    setAnimeMetaData(res.data);
    setAnimes([...animes, ...res.data.data])
  }

  return (
    <Container>
      <Wrapper>
        <Nav />
        <Header >
          <Title>Browse</Title>
        </Header>
        <List items={animes}/>
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

const More = styled.button`
`