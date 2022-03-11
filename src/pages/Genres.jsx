import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import { Wrapper, Container } from "./Home";
import Footer from "../components/Footer";
import { jikanRequest } from "../requestMethods";
import { HeaderTitle, Header } from "./Login";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";

const Genres = () => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [query, setQuery] = useState("");
  const [clickedFilter, toggleClickedFilter] = useState(false);
  const [filters, setFilters] = useState({
    type: "",
    status: "",
  });
  const [genreFilter, toggleGenreFilter] = useState([]);

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

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(query);
  };

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
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
            <SearchInput placeholder="Search Anime" />

            <SearchIcon className="searchIcon" />
          </SearchInputWrapper>
        </SearchBar>
        <AdvancedSearch onClick={() => toggleClickedFilter(!clickedFilter)}>
          Advanced Search
        </AdvancedSearch>
        {clickedFilter && (
          <FiltersWrapper>
            <FiltersTitle>Filters</FiltersTitle>
            <Filter>
              Type:
              <Type name="type" onChange={handleChange}>
                <option value="select">Select type</option>
                <option value="tv">TV</option>
                <option value="ova">OVA</option>
              </Type>
            </Filter>
          </FiltersWrapper>
        )}

        <GenresListWrapper>
          {genres.map((genre, i) => (
            <Genre
              key={i}
              onClick={
                !clickedFilter
                  ? () => handleClickGenre(genre.mal_id, genre.name)
                  : (e) => console.log(e.target.value)
              }
            >
              {`${genre.name} `}({genre.count})
              {!clickedFilter ? (
                <ArrowForwardIosIcon />
              ) : (
                <GenreCheckbox
                  type="checkbox"
                  value={genre.mal_id}
                  onChange={(e) =>
                    !genreFilter.includes(e.target.value)
                      ? toggleGenreFilter([...genreFilter, e.target.value])
                      : toggleGenreFilter([
                          ...genreFilter.filter(
                            (value) => value !== e.target.value
                          ),
                        ])
                  }
                />
              )}
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
  transition: opacity 0.167s ease-in-out;
  :hover {
    opacity: 0.8;
  }
`;

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
`;

const SearchInputWrapper = styled.div`
  width: 80%;
  height: 45px;
  overflow: hidden;
  border: solid 1px gray;
  border-radius: 6px;
  display: flex;
  align-items: center;
  :focus-within {
    outline: solid 1px black;
  }
  .searchIcon {
    font-size: 24px;
    border-left: solid 1px gray;
    height: 100%;
    width: 50px;
    padding: 8px;
    color: gray;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding-left: 10px;
  outline: none;
`;

const AdvancedSearch = styled.span`
  margin-left: auto;
  margin-right: 135px;
  text-align: center;
  margin-top: 8px;
  font-size: 1.4rem;
  color: ${(props) => props.theme.main};
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const FiltersWrapper = styled.section``;

const FiltersTitle = styled.h3``;

const Filter = styled.div``;

const Type = styled.select``;

const GenreCheckbox = styled.input``;
