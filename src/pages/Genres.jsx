import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import { Wrapper, Container } from "./Home";
import Footer from "../components/Footer";
import { jikanRequest } from "../requestMethods";
import { HeaderTitle, Header } from "./Login";

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getAnimeGenres();
  }, []);

  const getAnimeGenres = async () => {
    const res = await jikanRequest.get("/genres/anime");
    console.log(res);
    setGenres(res.data.data);
  };

  const handleClickGenre = async (id) => {
    const res = await jikanRequest.get(`/anime?genres=${id}`);
    console.log(res);
    
  };

  return (
    <Container>
      <Nav />
      <Wrapper>
        <Header>
          <HeaderTitle>Genres</HeaderTitle>
        </Header>
        <GenresListWrapper>
          {genres.map((genre, i) => (
            <Genre
              key={i}
              info={genre}
              onClick={() => handleClickGenre(genre.mal_id)}
            >
              {genre.name}
            </Genre>
          ))}
        </GenresListWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Genres;

const GenresListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-flow: row;
  grid-gap: 5px;
`;

const Genre = styled.a`
  padding: 8px 12px;
  background-color: ${(props) => props.theme.tertiary};
  color: white;
  cursor: pointer;
`;
