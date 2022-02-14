import Nav from "../components/Nav";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <Carousel title={"Popular Anime"} />
        <Carousel title={"Popular Manga"} />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Home;

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

