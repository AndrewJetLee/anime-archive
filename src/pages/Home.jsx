import Nav from "../components/Nav";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { publicRequest } from "../requestMethods";
import { useEffect, useState } from "react";

const Home = () => {
  const [trendingAnime, setTrendingAnime] = useState([]);

  useEffect(() => {
    getTrendingAnime()
  }, [])

  const getTrendingAnime = async () => {
    try {
      const { data } = await publicRequest.get("/anime/");
      console.log(data);
      setTrendingAnime(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Nav />
        <Carousel title={"Popular Anime"} data={trendingAnime}/>
        <Carousel title={"Popular Manga"} data={trendingAnime}/>
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

