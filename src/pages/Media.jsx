import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Media = () => {
  const location = useLocation();
  const item = location.state;
  console.log(location.state);
  return (
    <Container>
      <Nav />
      <Header>
          <Titles>
              <CanonTitle>{item.attributes.canonicalTitle}</CanonTitle>
              <EnglishTitle>{item.attributes.titles.en}</EnglishTitle>
          </Titles>
      </Header>
      <Wrapper>
        <Left>
          <ImageWrapper>
            <Image src={item.attributes.posterImage.medium} />
          </ImageWrapper>
          <Information></Information>
          <Statistics></Statistics>
        </Left>
        <Right>
          <Details></Details>
          <Synopsis></Synopsis>
        </Right>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Media;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Header = styled.div`
    background-color: #e1e7f5;
    width: 70vw;
    line-height: 0;
`
const Titles = styled.div`
    
`
const CanonTitle = styled.h3`
    
`
const EnglishTitle = styled.h4`
    color: #858585;
`


const Wrapper = styled.div`
  display: flex;
  width: 70vw;
  min-height: 100vh;
`;

//Left Column
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const ImageWrapper = styled.div`
    
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const Information = styled.div``;
const Statistics = styled.div``;

// Right Column
const Right = styled.div`
  flex: 4;
  background-color: pink;
`;
const Details = styled.div``;
const Synopsis = styled.div``;
