import Nav from "../components/Nav";
import styled from "styled-components";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <Container>
      <Nav />
      <Carousel />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  border: solid;
  width: 70vw;
  flex-direction: column;
  min-height: 100vh;
`;
