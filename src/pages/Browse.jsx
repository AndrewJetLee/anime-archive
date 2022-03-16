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
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    getList();
  }, [filter, type]);

  const getList = async () => {
    const res = await jikanRequest.get(`/${filter}/${type}`);
    console.log(res);
    setList(res.data.data);
    setMetaData(res.data.meta);
  };

  return (
    <Container>
      <Nav />
      <Header>
        <HeaderTitle>Browse</HeaderTitle>
      </Header>
      <Wrapper>
        <List items={list}/>
        {/* <More onClick={handleClick}>More</More> */}
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
