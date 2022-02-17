import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AnimeList from "../components/AnimeList";

const Search = () => {
  let location = useLocation();
  console.log(location.state);
  return (
    <Container>
      <AnimeList></AnimeList>
    </Container>
  );
};

export default Search;

const Container = styled.div``;
