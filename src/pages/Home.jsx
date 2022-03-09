import Nav from "../components/Nav";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { jikanRequest } from "../requestMethods";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";

const Home = ({ user }) => {
  const [seasonalAnime, setSeasonalAnime] = useState([]);
  const [upcomingAnime, setUpcomingAnime] = useState([]);
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [trendingManga, setTrendingManga] = useState([]);

  useEffect(() => {
    getAllMedia();
  }, []);

  const getAllMedia = async () => {
    try {
      const seasonalAnime = await jikanRequest.get("/seasons/now");
      const upcomingAnime = await jikanRequest.get("/seasons/upcoming");
      setTimeout(async () => {
        const trendingAnime = await jikanRequest.get("/top/anime");
        const trendingManga = await jikanRequest.get("/top/manga");
        setTrendingAnime(trendingAnime.data.data);
        setTrendingManga(trendingManga.data.data);
      }, 1000);
      setSeasonalAnime(seasonalAnime.data.data);
      setUpcomingAnime(upcomingAnime.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Nav user={user} />
      <Wrapper>
        <Hero />
        <Carousel title={"Currently Airing"} data={seasonalAnime} />
        <Carousel title={"Upcoming Anime"} data={upcomingAnime} />
        <Carousel title={"Popular Anime"} data={trendingAnime} />
        <Carousel title={"Popular Manga"} data={trendingManga} />
      </Wrapper>
      <Footer trendingAnime={trendingAnime} trendingManga={trendingManga} />
    </Container>
  );
};

export default Home;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  min-height: 100vh;
`;
