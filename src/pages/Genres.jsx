import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import { Wrapper, Container } from "./Home";
import Footer from "../components/Footer";
import { jikanRequest } from "../requestMethods";

const Genres = () => {
 
  useEffect(() => {
    getAnimeGenres()
  }, [])

  const getAnimeGenres = async () => {
    const res = await jikanRequest.get("/genres/anime");
    console.log(res);
  }

  return (
    <Container>
      <Nav/>
      <Wrapper>Genres</Wrapper>
      <Footer />
    </Container>
  );
};

export default Genres;
