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
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGenreAnime();
  }, []);

  const getGenreAnime = async () => {
    try {
      setLoading(true);
      const res = await jikanRequest.get(`/anime?genres=${id}`);
      console.log(res);
      setAnime(res.data.data);
      setLoading(false);
      setPagination(res.data.pagination);
    } catch (err) {
      console.log(err);
    }
  };

  const getNextPage = async () => {
    try {
      if (pagination.has_next_page) {
        let page = currentPage + 1;
        const res = await jikanRequest.get(`/anime?genres=${id}&page=${page}`);
        setAnime((prevList) => [...prevList, ...res.data.data]);
        setPagination(res.data.pagination);
        setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Nav />
      <Header>
        <HeaderTitle>{name}</HeaderTitle>
      </Header>
      <Wrapper>
        <List items={anime} getNextPage={getNextPage} pagination={pagination} loading={loading}/>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Genre;
