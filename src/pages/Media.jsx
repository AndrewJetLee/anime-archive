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
          <Information>
              <ul>
                  <li><strong>Type:</strong> {item.attributes.showType}</li>
                  <li><strong>Episodes:</strong> {item.attributes.episodeCount}</li>
                  <li><strong>Status: </strong>{item.attributes.status}</li>
                  <li><strong>Aired: </strong>{item.attributes.startDate} to {item.attributes.endDate}</li>
                  <li><strong>Placeholder: </strong>{item.attributes.status}</li>
              </ul>
          </Information>
          <Statistics></Statistics>
        </Left>
        <Right>
          <Details>
              
          </Details>
          <Synopsis>
            <h5>Synopsis</h5>
            <p>{item.attributes.synopsis}</p>
          </Synopsis>
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
    background-color: #f5e1e1;
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
const Information = styled.div`
    font-size: 1.2rem;
    li {
        margin-top: 8px;
    }
    
`;
const Statistics = styled.div``;

// Right Column
const Right = styled.div`
  flex: 4;
  background-color: pink;
  margin-left: 4px;
  border-left: solid 1px rgb(190, 190, 190);
`;
const Details = styled.div``;
const Synopsis = styled.div`
  padding: 4px;
  h5 {
    margin: 0;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    border-bottom: solid 1px rgb(190, 190, 190);
  }
`;
