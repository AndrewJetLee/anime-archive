import { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { jikanRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ filters, genreFilter, type }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

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
    } else if (filters.status.length > 0) {
      searchQuery += `?status=${filters.status}`;
    }
    if (filters.orderBy.length > 0 && searchQuery.length > 0) {
      searchQuery += `&order_by=${filters.orderBy}&sort=desc`;
    } else if (filters.orderBy.length > 0) {
      searchQuery += `?order_by=${filters.orderBy}&sort=desc`;
    }
    if (filters.rating.length > 0 && searchQuery.length > 0) {
      searchQuery += `&rating=${filters.rating}`;
    } else if (filters.rating.length > 0) {
      searchQuery += `?rating=${filters.rating}`;
    }
    if (genreFilter.length > 0 && searchQuery.length > 0) {
      let genreString = genreFilter.join(",");
      searchQuery += `&genres=${genreString}`;
    } else if (genreFilter.length > 0) {
      let genreString = genreFilter.join(",");
      searchQuery += `?genres=${genreString}`;
    }
    try {
      if (type === "anime") {
        const anime = await jikanRequest.get(`/anime${searchQuery}`);
        navigate(`/search${searchQuery}`, {
          state: {
            anime: anime.data,
            manga: null,
            type: "animeSearch",
          },
        });
      } else {
        const manga = await jikanRequest.get(`/manga${searchQuery}`);
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

  return (
    <Container>
      <InputWrapper>
        <Input
          placeholder={type === "anime" ? "Search Anime" : "Search Manga"}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchIcon className="searchIcon" onClick={handleSearch} />
      </InputWrapper>
    </Container>
  );
};

export default SearchBar;

const Container = styled.form`
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
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
    transition: all 0.167s ease;
    :hover {
      background-color: #f3f3f3;
      color: #797979;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding-left: 10px;
  outline: none;
`;
