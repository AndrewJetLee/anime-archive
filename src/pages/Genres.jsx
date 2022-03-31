import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import { Wrapper, Container } from "./Home";
import Footer from "../components/Footer";
import { jikanRequest } from "../requestMethods";
import { HeaderTitle, Header } from "./Login";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Checkbox } from "@mui/material";
import SearchBar from "../components/SearchBar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Genres = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [clickedFilter, toggleClickedFilter] = useState(false);
  const [genreFilter, toggleGenreFilter] = useState([]);
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    orderBy: "",
    rating: "",
  });

  useEffect(() => {
    if (location.pathname.includes("manga")) {
      setType("manga");
      getMangaGenres();
    } else {
      setType("anime");
      getAnimeGenres();
    }
  }, [location.pathname]);

  const getAnimeGenres = async () => {
    try {
      setLoading(true);
      const res = await jikanRequest.get("/genres/anime");
      console.log(res);
      let uniqueObjArray = [
        ...new Map(
          res.data.data.map((item) => [item["mal_id"], item])
        ).values(),
      ];
      setGenres(uniqueObjArray);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getMangaGenres = async () => {
    try {
      setLoading(true);
      const res = await jikanRequest.get("/genres/manga");
      console.log(res);
      let uniqueObjArray = [
        ...new Map(
          res.data.data.map((item) => [item["mal_id"], item])
        ).values(),
      ];
      setGenres(uniqueObjArray);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickGenre = async (id, name) => {
    try {
      if (type === "anime") {
        setLoading(true);
        const res = await jikanRequest.get(`/anime?genres=${id}`);
        console.log(res);
        navigate(`/anime/genres/${id}/${name}`, {
          state: {
            type: "anime",
          },
        });
        setLoading(false);
      } else {
        setLoading(true);
        const res = await jikanRequest.get(`/manga?genres=${id}`);
        console.log(res);
        navigate(`/manga/genres/${id}/${name}`, {
          state: {
            type: "manga",
          },
        });
        setLoading(false);
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
      <Header>
        <HeaderTitle>Search</HeaderTitle>
      </Header>
      <Wrapper>
        <SearchBar filters={filters} genreFilter={genreFilter} type={type} />
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
            {type === "anime" ? (
              <>
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
              </>
            ) : (
              <>
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
              </>
            )}

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
            <GenreWrapper key={i}>
              {loading ? (
                <SkeletonGenre>
                  <Skeleton baseColor="#FB9935" width="100%" height="100%" />
                </SkeletonGenre>
              ) : (
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
              )}
            </GenreWrapper>
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
  height: 40px;
  cursor: pointer;
  transition: opacity 0.167s ease-in-out;
  :hover {
    opacity: 0.8;
  }
`;

const GenreWrapper = styled.div``;

const SkeletonGenre = styled.div`
  width: 220px;
  height: 35px;
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
