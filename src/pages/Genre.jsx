import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, Container } from "./Home";
import { HeaderTitle, Header } from "./Login";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { jikanRequest } from "../requestMethods";
import List from "../components/List"; 

const Genre = () => {
  const { name, id } = useParams();

  const [anime, setAnime] = useState([]);

  useEffect(() => {
    getGenreAnime();
  }, [])

  const getGenreAnime = async () => {
    const res = await jikanRequest.get(`/anime?genres=${id}`);
    console.log(res);
    setAnime(res.data.data);
  }

  return (
    <Container>
      <Nav />
      <Wrapper>
        <Header>
            <HeaderTitle>{name}</HeaderTitle>
        </Header>
        <List items={anime}/>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Genre;
