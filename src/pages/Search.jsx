import { useLocation } from "react-router-dom";
import styled from "styled-components";
import List from "../components/List";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Search = () => {
  let location = useLocation();
  console.log(location.state);
  return (
    <Container>
      <Wrapper>
        <Nav />
        <List />
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  border: solid;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  border: solid;
  width: 70vw;
  flex-direction: column;
  min-height: 100vh;
`;
