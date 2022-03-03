import Nav from "../components/Nav";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { apiRequest } from "../requestMethods";
import { useEffect, useState } from "react";
import Announcements from "../components/Announcements";

const Home = ({user}) => {
  const [seasonalAnime, setSeasonalAnime] = useState([]);
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [trendingManga, setTrendingManga] = useState([]);

  useEffect(() => {
     getAllMedia()
  }, [])

  const getSeason = (date) => {
    return Math.floor((date.getMonth() / 12 * 4)) % 4;
  }

  //https://kitsu.io/api/edge/site-announcements

  const getAllMedia = async () => {
    try {
      const currentSeason = ['winter', 'spring', 'summer', 'autumn'][getSeason(new Date())];
      const currentYear = new Date().getFullYear();
      const seasonalAnime = await apiRequest.get(`/anime?filter[season]=${currentSeason}&filter[seasonYear]=${currentYear}`);
      const trendingAnime = await apiRequest.get("/trending/anime");
      const trendingManga = await apiRequest.get("/trending/manga");
      console.log(seasonalAnime.data);
      console.log(trendingAnime.data);
      console.log(trendingManga.data);
      setSeasonalAnime(seasonalAnime.data.data);
      setTrendingAnime(trendingAnime.data.data);
      setTrendingManga(trendingManga.data.data);
    } catch (err) {
      console.log(err);
    }
  }
  

  return (
    <Container>
      <Wrapper>
        <Nav user={user}/>
        <Announcements></Announcements>
        <Carousel title={"Trending Anime"} data={trendingAnime}/>
        <Carousel title={"Trending Manga"} data={trendingManga}/>
        <Carousel title={"Seasonal Anime"} data={seasonalAnime}/>
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

