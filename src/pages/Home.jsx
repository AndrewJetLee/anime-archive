import Nav from "../components/Nav";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { apiRequest } from "../requestMethods";
import { useEffect, useState } from "react";

const Home = () => {
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [trendingManga, setTrendingManga] = useState([]);

  useEffect(() => {
     getAllMedia()
  }, [])

  const getAllMedia = async () => {
    try {
      const trendingAnime = await apiRequest.get("/trending/anime");
      const trendingManga = await apiRequest.get("/trending/manga");
      console.log(trendingAnime.data);
      console.log(trendingManga.data);
      setTrendingAnime(trendingAnime.data.data);
      setTrendingManga(trendingManga.data.data);
    } catch (err) {
      console.log(err);
    }
  }
  

  return (
    <Container>
      <Wrapper>
        <Nav />
        <Carousel title={"Trending Anime"} data={trendingAnime}/>
        <Carousel title={"Trending Manga"} data={trendingManga}/>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;


const Wrapper = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  min-height: 100vh;
`;

