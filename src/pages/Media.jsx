import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Media = () => {
  const location = useLocation();
  const item = location.state;
  console.log(location.state);

  const handleAddToList = async () => {
    const res = await publicRequest.put("/user/list", item);
    console.log(res);
  };

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
          <AddToList onClick={handleAddToList}>Add To List</AddToList>
          <Information>
            <SideBarList>
              <li>
                <strong>Type:</strong> {item.attributes.showType}
              </li>
              <li>
                <strong>Episodes:</strong> {item.attributes.episodeCount}
              </li>
              <li>
                <strong>Status: </strong>
                {item.attributes.status}
              </li>
              <li>
                <strong>Aired: </strong>
                {item.attributes.startDate} to {item.attributes.endDate}
              </li>
              <li>
                <strong>Rating: </strong>
                {item.attributes.ageRating} - {item.attributes.ageRatingGuide}
              </li>
            </SideBarList>
          </Information>
          <Statistics>
            <SideBarList>
              <li>
                <strong>Score:</strong> {item.attributes.averageRating}
              </li>
              <li>
                <strong>Ranked:</strong> #{item.attributes.ratingRank}
              </li>
              <li>
                <strong>Popularity: </strong>#{item.attributes.popularityRank}
              </li>
              <li>
                <strong>Members: </strong>
                {item.attributes.userCount}
              </li>
              <li>
                <strong>Favorites: </strong>
                {item.attributes.favoritesCount}
              </li>
            </SideBarList>
          </Statistics>
        </Left>
        <Right>
          <h3>Details</h3>
          <Details>
            <ScoreWrapper>
              <Title>SCORE</Title>
              <Score>9.15</Score>
              <Users>100,000 users</Users>
            </ScoreWrapper>
            <Data>
              <ScoreData>
                <span>
                  Ranked <strong>#{item.attributes.ratingRank}</strong>
                </span>
                <span>
                  Popularity <strong>#{item.attributes.popularityRank}</strong>
                </span>
                <span>
                  Members <strong>{item.attributes.userCount}</strong>
                </span>
              </ScoreData>
              <OtherData>
                <span>Summer 2019</span>
                <span>TV</span>
                <span>gigity</span>
              </OtherData>
            </Data>
          </Details>
          <Synopsis>
            <h5>Synopsis</h5>
            <p>{item.attributes.synopsis}</p>
          </Synopsis>
          <VideoWrapper>
              <h5>Trailer</h5>
              <iframe
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${item.attributes.youtubeVideoId}`}
              ></iframe>
            </VideoWrapper>
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
  background-color: ${(props) => props.theme.secondary};
  width: 70vw;
  line-height: 0;
`;
const Titles = styled.div``;
const CanonTitle = styled.h3``;
const EnglishTitle = styled.h4`
  color: #858585;
`;

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
const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const AddToList = styled.a`
  cursor: pointer;
`;

const Information = styled.div``;
const Statistics = styled.div``;

const SideBarList = styled.ul`
  font-size: 1.2rem;
  li {
    margin-top: 8px;
  }
`;

// Right Column
const Right = styled.div`
  flex: 4;
  margin-left: 4px;
  border-left: solid 1px rgb(190, 190, 190);
`;
const Details = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.secondary};
  min-height: 80px;
  margin-bottom: 20px;
`;

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;
const Title = styled.div`
  background-color: ${props => props.theme.main};
  color: white;
  text-align: center;
  font-size: 1.2rem;
  width: 80px;
`;
const Score = styled.h2`
  margin: 5px 0;
`;
const Users = styled.span`
  font-size: 1.1rem;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ScoreData = styled.div`
  display: flex;
  align-items: center;
  span {
    margin: 0 20px;
  }
`;
const OtherData = styled.div`
  font-size: 1.2rem;
  margin-left: 10px;
  color: ${props => props.theme.main};
  span {
    margin: 0 10px;
    border-right: 1px solid lightgray;
    padding-right: 18px;
    :last-of-type {
      border-right: 0;
    }
  }
`;


const Synopsis = styled.div`
  padding: 4px;
  h5 {
    margin: 0;
    border-bottom: solid 1px rgb(190, 190, 190);
    padding-bottom: 4px;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-top: 4px;
  }
`;


const VideoWrapper = styled(Synopsis)``;