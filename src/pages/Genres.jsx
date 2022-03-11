import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import { Wrapper, Container } from "./Home";
import Footer from "../components/Footer";
import { jikanRequest } from "../requestMethods";
import { HeaderTitle, Header } from "./Login";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Genres = () => {
  const navigate = useNavigate()
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getAnimeGenres();
  }, []);

  const getAnimeGenres = async () => {
    const res = await jikanRequest.get("/genres/anime");
    console.log(res);
    setGenres(res.data.data);
  };

  const handleClickGenre = async (id, name) => {
    const res = await jikanRequest.get(`/anime?genres=${id}`);
    console.log(res);
    navigate(`/anime/genres/${id}/${name}`);
  };

  return (
    <Container>
      <Nav />
      <Wrapper>
        <Header>
          <HeaderTitle>Genres</HeaderTitle>
        </Header>
        <SearchBar>
          <SearchInputWrapper>
            <SearchInput />
          </SearchInputWrapper>
        </SearchBar>
        <AdvancedSearch>
          Advanced Search
        </AdvancedSearch>
        <GenresListWrapper>
          {genres.map((genre, i) => (
            <Genre
              key={i}
              onClick={() => handleClickGenre(genre.mal_id, genre.name)}
            >
              {`${genre.name} `}
              ({genre.count})
              <ArrowForwardIosIcon/>
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

const Genre = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  background-color: ${(props) => props.theme.tertiary};
  color: white;
  cursor: pointer;
  transition: opacity .167s ease-in-out;
  :hover {
    opacity: .8;
  }
`;

const SearchBar = styled.form``

const SearchInputWrapper = styled.div``

const SearchInput = styled.input``

const AdvancedSearch = styled.a``