import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, Container } from "./Home";
import { HeaderTitle, Header } from "./Login";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { jikanRequest } from "../requestMethods";
import List from "../components/List"; 
import styled from "styled-components";

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
        <MoreWrapper>
            <MoreButton>More</MoreButton>
        </MoreWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Genre;

const MoreWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const MoreButton = styled.a`
    padding: 14px 40px;
    background-color: ${props => props.theme.main};
    color: white;
    width: auto;
    text-align: center;
    width: 100%;
    cursor: pointer;
`