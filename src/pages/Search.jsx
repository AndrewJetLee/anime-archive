import { useLocation } from "react-router-dom";
import styled from "styled-components";
import List from "../components/List";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Title, Header } from "./Login";
import { useState, useEffect } from "react";
import { apiRequest } from "../requestMethods";

const Search = () => {
  let location = useLocation();
  console.log(location.state);
  const [metaData, setMetaData] = useState(location.state);
  const [items, setItems] = useState(location.state.data);


  useEffect(() => {
    setItems(location.state.data);
  }, [location.state])

  const handleClick = async () => {
    const res = await apiRequest.get(metaData.links.next);
    setMetaData(res.data);
    setItems([...items, ...res.data.data])
  }

  return (
    <Container>
      <Wrapper>
        <Nav />
        <Header >
          <Title>Browse</Title>
        </Header>
        <List items={items}/>
        <More onClick={handleClick}>More</More>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Search;

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

const More = styled.button`
`