import Nav from "../components/Nav";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { jikanRequest } from "../requestMethods";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";

const Home = () => {
  const [seasonalAnime, setSeasonalAnime] = useState([]);
  const [upcomingAnime, setUpcomingAnime] = useState([]);
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [trendingManga, setTrendingManga] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllMedia();
  }, []);

  const getAllMedia = async () => {
    try {
      setLoading(true);
      const seasonalAnime = await jikanRequest.get("/seasons/now");
      const upcomingAnime = await jikanRequest.get("/seasons/upcoming");
      const trendingAnime = await jikanRequest.get("/top/anime");
      const trendingManga = await jikanRequest.get("/top/manga");
      setTrendingManga(trendingManga.data.data);
      setSeasonalAnime(seasonalAnime.data.data);
      setUpcomingAnime(upcomingAnime.data.data);
      setTrendingAnime(trendingAnime.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Nav />
      <Wrapper>
        <Hero />
        <Carousel
          title={"Currently Airing"}
          data={seasonalAnime}
          loading={loading}
        />
        <Carousel
          title={"Upcoming Anime"}
          data={upcomingAnime}
          loading={loading}
        />
        <Carousel
          title={"Popular Anime"}
          data={trendingAnime}
          loading={loading}
        />
        <Carousel
          title={"Popular Manga"}
          data={trendingManga}
          loading={loading}
        />
      </Wrapper>
      <Footer />
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
  min-height: 80vh;
  flex-direction: column;
`;
