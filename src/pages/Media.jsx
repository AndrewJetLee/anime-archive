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
          <CanonTitle>{item.title}</CanonTitle>
          {item.title !== item.title_english ? (
            <EnglishTitle>{item.title_english}</EnglishTitle>
          ) : null}
        </Titles>
      </Header>
      <Wrapper>
        <Left>
          <ImageWrapper>
            <Image src={item.images.jpg.image_url} />
          </ImageWrapper>
          <AddToListWrapper>
            <StatusWrapper>
              <label for="status">Status: </label>
              <StatusDropdown name="status">
                <option value="">Plan to Watch</option>
                <option value="">Completed</option>
                <option value="">Currently Watching</option>
                <option value="">On Hold</option>
                <option value="">Dropped</option>
              </StatusDropdown>
            </StatusWrapper>
            <RatingWrapper>
              <label for="rating">Rating: </label>
              <RatingDropdown name="rating">
                
              </RatingDropdown>
            </RatingWrapper>
            <Inputs>
              <AddButton></AddButton>
              
            </Inputs>
          </AddToListWrapper>
          <Information>
            <SideBarList>
              <li>
                <strong>Type:</strong> {item.type}
              </li>
              <li>
                <strong>Episodes:</strong> {item.episodes}
              </li>
              <li>
                <strong>Status: </strong>
                {item.status}
              </li>
              {item.aired.string ? (
                <li>
                  <strong>Aired: </strong>
                  {item.aired.string}
                </li>
              ) : null}
              <li>
                <strong>Genres: </strong>
                {item.genres.map((genre) => (
                  <a href="#">{genre.name} </a>
                ))}
              </li>
              <li>
                <strong>Rating: </strong>
                {item.rating}
              </li>
            </SideBarList>
          </Information>
          <Statistics>
            <SideBarList>
              <li>
                <strong>Score:</strong> {item.score}
              </li>
              <li>
                <strong>Ranked:</strong> #{item.rank}
              </li>
              <li>
                <strong>Popularity: </strong>#{item.popularity}
              </li>
              <li>
                <strong>Members: </strong>
                {item.members}
              </li>
              <li>
                <strong>Favorites: </strong>
                {item.favorites}
              </li>
            </SideBarList>
          </Statistics>
        </Left>
        <Right>
          <h3>Details</h3>
          <Details>
            <ScoreWrapper>
              <Title>SCORE</Title>
              <Score>{item.score}</Score>
              <Users>{item.scored_by} users</Users>
            </ScoreWrapper>
            <Data>
              <ScoreData>
                <span>
                  Ranked <strong>#{item.rank}</strong>
                </span>
                <span>
                  Popularity <strong>#{item.popularity}</strong>
                </span>
                <span>
                  Members <strong>{item.members}</strong>
                </span>
              </ScoreData>
              <OtherData>
                <span>
                  {item.season} {item.year}
                </span>
                <span>{item.type}</span>
                <span>{item.studios[0].name}</span>
              </OtherData>
            </Data>
          </Details>
          <Synopsis>
            <h5>Synopsis</h5>
            <p>{item.synopsis}</p>
          </Synopsis>
          {item.trailer ? (
            <VideoWrapper>
              <h5>Trailer</h5>
              <iframe
                title="trailer"
                width="100%"
                height="550px"
                src={`https://www.youtube.com/embed/${item.trailer.youtube_id}`}
              ></iframe>
            </VideoWrapper>
          ) : null}
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
  border: solid 1px rgb(190, 190, 190);
`;

const Header = styled.div`
  background-color: ${(props) => props.theme.secondary};
  width: 70vw;
  line-height: 0;
`;
const Titles = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.main};
`;
const CanonTitle = styled.h3``;
const EnglishTitle = styled.h4`
  color: #858585;
`;

const Wrapper = styled.div`
  display: flex;
  width: 70vw;
  min-height: 100vh;
  border-left: solid 1px ${(props) => props.theme.secondary};
  border-right: solid 1px ${(props) => props.theme.secondary};
`;

//Left Column
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4px;
`;
const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const AddToListWrapper = styled.form`
  margin-top: 15px;
  font-size: 1.3rem;
  color: ${(props) => props.theme.main};
  cursor: pointer;
  font-weight: 600;
`;

const StatusWrapper = styled.div`
  display: flex;
`

const StatusDropdown = styled.select``;

const RatingWrapper = styled(StatusWrapper)``;
const RatingDropdown = styled.select``;

const Inputs = styled.div``;
const AddButton = styled.a``;



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
  border-left: solid 1px ${(props) => props.theme.secondary};
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
  background-color: ${(props) => props.theme.main};
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
  color: ${(props) => props.theme.main};
  span {
    margin: 0 10px;
    border-right: 1px solid lightgray;
    padding-right: 18px;
    :first-child {
      text-transform: capitalize;
    }
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
    margin-top: 10px;
  }
`;

const VideoWrapper = styled(Synopsis)`
  h5 {
    margin-bottom: 5px;
  }
`;
