import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import { Wrapper, Container } from "./Home";
import Footer from "../components/Footer";
import { jikanRequest } from "../requestMethods";
import { HeaderTitle, Header } from "./Login";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import { Checkbox } from "@mui/material";

const Genres = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [genres, setGenres] = useState([]);
  const [type, setType] = useState("");
  const [clickedFilter, toggleClickedFilter] = useState(false);
  const [query, setQuery] = useState("");
  const [genreFilter, toggleGenreFilter] = useState([]);
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    orderBy: "",
    rating: "",
  });

  useEffect(() => {
    if (location.pathname.includes("manga")) {
      setType("manga")
      getMangaGenres()
    } else {
      setType("anime")
      getAnimeGenres();
    } 
  }, []);

  const getAnimeGenres = async () => {
    const res = await jikanRequest.get("/genres/anime");
    console.log(res);
    setGenres(res.data.data);
  };

  const getMangaGenres = async () => {
    const res = await jikanRequest.get("/genres/manga");
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
    let searchQuery = "";
    if (query.length > 0) {
      searchQuery += `?q=${query}`;
    }
    if (filters.type.length > 0 && searchQuery.length > 0) {
      searchQuery += `&type=${filters.type}`;
    } else if (filters.type.length > 0) {
      searchQuery += `?type=${filters.type}`;
    }
    if (filters.status.length > 0 && searchQuery.length > 0) {
      searchQuery += `&status=${filters.status}`;
    } else if (filters.type.length > 0) {
      searchQuery += `?status=${filters.status}`;
    }
    if (filters.orderBy.length > 0 && searchQuery.length > 0) {
      searchQuery += `&order_by=${filters.orderBy}`;
    } else if (filters.orderBy.length > 0) {
      searchQuery += `?order_by=${filters.orderBy}`;
    }
    if (filters.rating.length > 0 && searchQuery.length > 0) {
      searchQuery += `&rating=${filters.rating}`;
    } else if (filters.orderBy.length > 0) {
      searchQuery += `?rating=${filters.rating}`;
    }
    if (genreFilter.length > 0 && searchQuery.length > 0) {
      let genreString = genreFilter.join(",");
      console.log(genreString);
      searchQuery += `&genres=${genreString}`;
    } else if (genreFilter.length > 0) {
      let genreString = genreFilter.join(",");
      searchQuery += `?genres=${genreString}`;
    }
    console.log(searchQuery);
    try {
      const anime = await jikanRequest.get(`/anime${searchQuery}`);
      const manga = await jikanRequest.get(`/manga${searchQuery}`);
      console.log(anime);
      console.log(manga);
      if (type === "anime") {
        navigate(`/search${searchQuery}`, {
          state: {
            anime: anime.data,
            manga: null,
            type: "animeSearch",
          },
        });
      } else {
        navigate(`/search${searchQuery}`, {
          state: {
            anime: null,
            manga: manga.data,
            type: "mangaSearch",
          },
        });
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const clearState = () => {
    toggleGenreFilter([]);
    setFilters({
      type: "",
      status: "",
      orderBy: "",
      rating: "",
    });
  };

  return (
    <Container>
      <Nav />
      <Wrapper>
        <Header>
          <HeaderTitle>Genres</HeaderTitle>
        </Header>
        <SearchBar onSubmit={handleSearch}>
          <SearchInputWrapper>
            <SearchInput
              placeholder={type === "anime" ? "Search Anime" : "Search Manga"}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchIcon className="searchIcon" onClick={handleSearch} />
          </SearchInputWrapper>
        </SearchBar>
        <AdvancedSearchWrapper>
          <AdvancedSearch
            onClick={() => {
              if (clickedFilter) {
                clearState();
              }
              toggleClickedFilter(!clickedFilter);
            }}
          >
            Advanced Search
          </AdvancedSearch>
        </AdvancedSearchWrapper>
        {clickedFilter && (
          <FiltersWrapper>
            <FiltersTitle>Filters</FiltersTitle>
            { type === "anime" ? <>
            <Filter>
              Type:
              <Type name="type" onChange={handleChange}>
                <option value="">Select</option>
                <option value="tv">TV</option>
                <option value="movie">Movie</option>
                <option value="ova">OVA</option>
                <option value="special">Special</option>
                <option value="ona">ONA</option>
                <option value="music">Music</option>
              </Type>
            </Filter>
            <Filter>
              Status:
              <Status name="status" onChange={handleChange}>
                <option value="">Select</option>
                <option value="airing">Airing</option>
                <option value="complete">Complete</option>
                <option value="upcoming">Upcoming</option>
              </Status>
            </Filter>
            <Filter>
              Rating:
              <Rating name="rating" onChange={handleChange}>
                <option value="">Select</option>
                <option value="g">G</option>
                <option value="pg">PG</option>
                <option value="pg13">PG-13</option>
                <option value="r17">R - 17+</option>
                <option value="r">R+</option>
                <option value="rx">Rx</option>
              </Rating>
            </Filter>
            </> : <>
            <Filter>
              Type:
              <Type name="type" onChange={handleChange}>
                <option value="">Select</option>
                <option value="manga">Manga</option>
                <option value="novel">Novel</option>
                <option value="lightnovel">Lightnovel</option>
                <option value="oneshot">Oneshot</option>
                <option value="doujin">Doujin</option>
                <option value="manhwa">Manhwa</option>
                <option value="manhua">Manhua</option>
              </Type>
            </Filter>
            <Filter>
              Status:
              <Status name="status" onChange={handleChange}>
                <option value="">Select</option>
                <option value="publishing">Publishing</option>
                <option value="complete">Complete</option>
                <option value="hiatus">Hiatus</option>
                <option value="discontinued">Discontinued</option>
                <option value="upcoming">Upcoming</option>
              </Status>
            </Filter>
            </>}
            
            <Filter>
              Order By:
              <OrderBy name="orderBy" onChange={handleChange}>
                <option value="">Select</option>
                <option value="score">Score</option>
                <option value="popularity">Popularity</option>
                <option value="title">Title</option>
                <option value="rank">Rank</option>
              </OrderBy>
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
                <Checkbox
                  value={genre.mal_id}
                  sx={{
                    backgroundColor: "#FB9935",
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                    "& .MuiSvgIcon-root": { fontSize: 24 },
                  }}
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
    cursor: pointer;
    transition: all .167s ease;
    :hover {
      background-color: #f3f3f3;
      color: #797979;
    }
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding-left: 10px;
  outline: none;
`;

const AdvancedSearchWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`;

const AdvancedSearch = styled.span`
  display: inline-block;
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

const FiltersTitle = styled.h3`
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
  margin: 0;
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

const Filter = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  font-size: 1.4rem;
`;

const Type = styled.select`
  justify-self: start;
  height: 35px;
  width: 100px;
`;

const Status = styled(Type)``;

const OrderBy = styled(Type)``;

const Rating = styled(Type)``;