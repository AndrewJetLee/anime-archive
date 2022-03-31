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

  const [animes, setAnimes] = useState(location.state.anime?.data);
  const [animePagination, setAnimePagination] = useState(location.state.anime);
  const [currentPage, setCurrentPage] = useState(1);

  const [mangas, setMangas] = useState(location.state.manga?.data);
  const [mangaPagination, setMangaPagination] = useState(location.state.manga);

  const [characters, setCharacters] = useState(location.state.characters?.data);
  const [charactersPagination, setCharactersPagination] = useState(
    location.state.characters
  );

  const [type, setType] = useState(location.state.type);
  const [activeMedia, setActiveMedia] = useState("");

  useEffect(() => {
    setAnimes(location.state.anime?.data);
    setAnimePagination(location.state.anime?.pagination);
    setMangas(location.state.manga?.data);
    setMangaPagination(location.state.manga?.pagination);
    setCharacters(location.state.characters?.data);
    setCharactersPagination(location.state.characters?.pagination);
    setType(location.state.type);
    setActiveMedia("");
  }, [location.state]);


  const getNextPage = async () => {
    try {
      if (activeMedia === "anime") {
        if (animePagination.has_next_page) {
          let page = currentPage + 1;
          const res = await jikanRequest.get(
            `/${activeMedia}${location.search}&page=${page}`
          );
          setAnimes((prevList) => [...prevList, ...res.data.data]);
          setAnimePagination(res.data.pagination);
          setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
        }
      } else if (activeMedia === "manga") {
        if (mangaPagination.has_next_page) {
          let page = currentPage + 1;
          const res = await jikanRequest.get(
            `/${activeMedia}${location.search}&page=${page}`
          );
          setMangas((prevList) => [...prevList, ...res.data.data]);
          setMangaPagination(res.data.pagination);
          setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
        }
      } else if (activeMedia === "characters") {
        if (charactersPagination.has_next_page) {
          let page = currentPage + 1;
          const res = await jikanRequest.get(
            `/${activeMedia}${location.search}&page=${page}`
          );
          setCharacters((prevList) => [...prevList, ...res.data.data]);
          setCharactersPagination(res.data.pagination);
          setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
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
            {activeMedia === "anime" ? (
              <>
                <List
                  items={animes}
                  getNextPage={getNextPage}
                  pagination={animePagination}
                />
              </>
            ) : (
              <>
                <List items={animes} type="search" />
                {animePagination.has_next_page && (
                  <More
                    onClick={() => {
                      setType("animeSearch");
                      setActiveMedia("anime");
                    }}
                  >
                    Search More Anime
                  </More>
                )}
              </>
            )}
          </>
        )}

        {(type === "mangaSearch" || type === "all") && (
          <>
            <Title>Manga</Title>
            {activeMedia === "manga" ? (
              <>
                <List
                  items={mangas}
                  getNextPage={getNextPage}
                  pagination={mangaPagination}
                />
              </>
            ) : (
              <>
                <List items={mangas} type="search" />
                {mangaPagination.has_next_page && (
                  <More
                    onClick={() => {
                      setType("mangaSearch");
                      setActiveMedia("manga");
                    }}
                  >
                    Search More Manga
                  </More>
                )}
              </>
            )}
          </>
        )}

        {(type === "charactersSearch" || type === "all") && (
          <>
            <Title>Characters</Title>
            {activeMedia === "characters" ? (
              <>
                <List
                  items={characters}
                  getNextPage={getNextPage}
                  pagination={charactersPagination}
                />
              </>
            ) : (
              <>
                <List items={characters} type="search" />
                {charactersPagination.has_next_page && (
                  <More onClick={() => {
                    setType("charactersSearch");
                    setActiveMedia("characters");
                  }}>Search More Characters</More>
                )}
              </>
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

export const More = styled.button`
  width: 100%;
  background-color: ${props => props.theme.tertiary};
  padding: 16px;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 20px;
  border-radius: 4px;
  transition: opacity 0.167s ease-in-out;
  color: white;
  cursor: pointer;
  :hover {
    opacity: .8;
  }
`;
