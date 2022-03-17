import { useParams } from "react-router-dom";
import styled from "styled-components";
import List from "../components/List";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { HeaderTitle, Header } from "./Login";
import { useState, useEffect } from "react";
import { jikanRequest } from "../requestMethods";

const Browse = () => {
  const { filter, type } = useParams();

  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getList();
  }, [filter, type]);

  const getList = async () => {
    try {
      setLoading(true);
      const res = await jikanRequest.get(`/${filter}/${type}`);
      console.log(res);
      setList(res.data.data);
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
        const res = await jikanRequest.get(`/${filter}/${type}?page=${page}`);
        setList((prevList) => [...prevList, ...res.data.data]);
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
        <HeaderTitle>Browse</HeaderTitle>
      </Header>
      <Wrapper>
        <List items={list} getNextPage={getNextPage} pagination={pagination} loading={loading}/>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Browse;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  min-height: 100vh;
`;

const More = styled.button``;
