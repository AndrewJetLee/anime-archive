import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { publicRequest, jikanRequest } from "../requestMethods";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Review from "../components/Review";
import { Title } from "../components/Carousel";
import { Error } from "../components/Nav";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import Alert from "../components/Alert";
import { More } from "./Search";

const Media = () => {
  const location = useLocation();
  const { type, id } = useParams();

  const [reviews, setReviews] = useState([]);
  const [reviewsPagination, setReviewsPagination] = useState({});
  const [voiceActors, setVoiceActors] = useState([]);
  const [alert, toggleAlert] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState("");
  const [ratingDropdown, setRatingDropdown] = useState("");
  const [episodesWatched, setEpisodesWatched] = useState(0);
  const [error, toggleError] = useState(false);

  const isMounted = useRef(true);
  const item = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      if (type === "characters") {
        getVoiceActors();
      } else {
        getReviews();
      }
    }
    return () => {
      isMounted.current = false;
    };
  }, [type, id]);

  const handleError = async () => {
    toggleError(true);
    setTimeout(() => {
      toggleError(false);
    }, 3000);
  };

  const handleAddToList = async () => {
    if (episodesWatched > item.episodes || episodesWatched < 0) {
      handleError();
      console.log("Not a valid episode number");
      return;
    }
    try {
      const payload = {
        ...item,
        userOptions: {
          userStatus: statusDropdown,
          userRating: ratingDropdown,
          userProgress: episodesWatched,
        },
      };
      const res = await publicRequest.put("/user/list", payload);
      console.log(res);
      toggleAlert(true);
      setTimeout(() => toggleAlert(false), 4000);
    } catch (err) {
      console.log(err);
    }
  };

  const getReviews = async (page) => {
    try {
      if (page) {
        const res = await jikanRequest.get(
          `/${type}/${id}/reviews?page=${page}`
        );
        console.log(res);
        setReviews((prevReviews) => [...prevReviews, ...res.data.data]);
        setReviewsPagination(res.data.pagination);
      } else {
        const res = await jikanRequest.get(`/${type}/${id}/reviews`);
        console.log(res);
        setReviews(res.data.data);
        setReviewsPagination(res.data.pagination);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getVoiceActors = async () => {
    try {
      const res = await jikanRequest.get(`/${type}/${id}/voices`);
      setVoiceActors(res.data.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Nav />
      <Header>
        <Titles>
          <CanonTitle>{item.title ? item.title : item.name}</CanonTitle>
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
          {type === "anime" && (
            <AddToListWrapper>
              <AddToListTitle>Add to My List</AddToListTitle>

              <StatusWrapper>
                <label>Status: </label>
                <StatusDropdown
                  name="status"
                  onChange={(e) => setStatusDropdown(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Plan to Watch">Plan to Watch</option>
                  <option value="Completed">Completed</option>
                  <option value="Currently Watching">Currently Watching</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Dropped">Dropped</option>
                </StatusDropdown>
              </StatusWrapper>
              <RatingWrapper>
                <label>Rating: </label>
                <RatingDropdown
                  name="rating"
                  onChange={(e) => setRatingDropdown(e.target.value)}
                >
                  <option value="">Select</option>
                  {new Array(10).fill("").map((item, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </RatingDropdown>
              </RatingWrapper>
              <EpisodesWatchedWrapper>
                <label>Episodes: </label>
                <EpisodesWatched
                  placeholder="0"
                  onChange={(e) => {
                    setEpisodesWatched(e.target.value);
                  }}
                />
                /{item.episodes || "?"}
              </EpisodesWatchedWrapper>
              <Inputs>
                <AddButton onClick={handleAddToList}>Add To List</AddButton>
              </Inputs>
            </AddToListWrapper>
          )}

          <Information>
            <Title size="1.3rem" padding="9px">
              Information
            </Title>
            {/* Anime */}
            {type === "anime" ? (
              <SideBarList>
                <li>
                  <strong>Type:</strong> {item.type}
                </li>

                <li>
                  <strong>Episodes:</strong> {item.episodes || "Unknown"}
                </li>

                <li>
                  <strong>Status: </strong>
                  {item.status}
                </li>

                <li>
                  <strong>Aired: </strong>
                  {item.aired.string}
                </li>

                <li>
                  <strong>Genres: </strong>
                  {item.genres?.map((genre, i) =>
                    i === item.genres.length - 1 ? (
                      <span key={i}>{genre.name} </span>
                    ) : (
                      <span key={i}>{genre.name}, </span>
                    )
                  )}
                </li>
                <li>
                  <strong>Themes: </strong>
                  {item.themes.map((theme, i) =>
                    i === item.themes.length - 1 ? (
                      <span key={i}>{theme.name} </span>
                    ) : (
                      <span key={i}>{theme.name}, </span>
                    )
                  )}
                </li>
                <li>
                  <strong>Demographics: </strong>
                  {item.demographics?.map((demographic, i) =>
                    i === item.demographics.length - 1 ? (
                      <span key={i}>{demographic.name} </span>
                    ) : (
                      <span key={i}>{demographic.name}, </span>
                    )
                  )}
                </li>
                <li>
                  <strong>Rating: </strong>
                  {item.rating ? item.rating : item.scored}
                </li>

                <li>
                  <strong>Premiered: </strong>
                  {item.season} {item.year}
                </li>

                <li>
                  <strong>Producers: </strong>
                  {item.producers?.map((producer, i) =>
                    i === item.producers.length - 1 ? (
                      <span key={i}>{producer.name} </span>
                    ) : (
                      <span key={i}>{producer.name}, </span>
                    )
                  )}
                  {item.producers && item.producers.length === 0 && (
                    <span>Unknown</span>
                  )}
                </li>

                <li>
                  <strong>Studios: </strong>
                  {item.studios[0]?.name}
                  {item.studios && item.studios.length === 0 && (
                    <span>Unknown</span>
                  )}
                </li>
                <li>
                  <strong>Source: </strong>
                  {item.source}
                </li>
              </SideBarList>
            ) : type === "manga" ? (
              // Manga
              <SideBarList>
                <li>
                  <strong>Type:</strong> {item?.type}
                </li>

                <li>
                  <strong>Chapters:</strong> {item.chapters}
                </li>

                <li>
                  <strong>Status: </strong>
                  {item.status}
                </li>

                <li>
                  <strong>Genres: </strong>
                  {item.genres?.map((genre, i) => (
                    <span key={i}>{genre.name} </span>
                  ))}
                </li>
                {
                  <li>
                    <strong>Rating: </strong>
                    {item.scored}
                  </li>
                }
              </SideBarList>
            ) : (
              // Characters
              <SideBarList>
                <li>
                  <strong>Name: </strong>
                  {item.name}
                </li>
                <li>
                  <strong>Kanji: </strong>
                  {item.name_kanji}
                </li>
                <li>
                  <strong>Other names: </strong>
                  {item.nicknames.join(", ")}
                </li>
              </SideBarList>
            )}
          </Information>
          {type === "characters" ? null : (
            <Statistics>
              <Title size="1.3rem" padding="9px">
                Statistics
              </Title>
              <SideBarList>
                <li>
                  <strong>Score:</strong>{" "}
                  {item.score ? item.score : item.scored ? item.scored : "N/A"}
                </li>
                <li>
                  <strong>Ranked:</strong> {item.rank ? "#" + item.rank : "N/A"}
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
          )}
        </Left>
        {type === "characters" ? (
          <Right>
            <Title>Details</Title>
            <Synopsis>
              <p>{item.about}</p>
            </Synopsis>
            <Title>Voice Actors</Title>
            <VoiceActors>
              {voiceActors.map((va, i) => (
                <VoiceActor key={i}>
                  <VAPicture src={va.person.images.jpg.image_url} alt="" />

                  <VAInfo>
                    <VAName>{va.person.name}</VAName>
                    <VALanguage>{va.language}</VALanguage>
                  </VAInfo>
                </VoiceActor>
              ))}
            </VoiceActors>
          </Right>
        ) : (
          <Right>
            <Title>Details</Title>
            <Details>
              <ScoreWrapper>
                <ScoreTitle>SCORE</ScoreTitle>
                <Score>
                  {item.scored ? item.scored : item.score ? item.score : "N/A"}
                </Score>
                <Users>{item.scored_by} users</Users>
              </ScoreWrapper>
              <Data>
                <ScoreData>
                  <span>
                    Ranked{" "}
                    <strong>{item.rank ? "#" + item.rank : "N/A"}</strong>
                  </span>
                  <span>
                    Popularity <strong>#{item.popularity}</strong>
                  </span>
                  <span>
                    Members <strong>{item.members}</strong>
                  </span>
                </ScoreData>
                {type === "anime" ? (
                  <OtherData>
                    <span>
                      {item.season} {item.year}
                    </span>
                    <span>{item?.type}</span>
                    <span>{item.studios[0]?.name || "Unknown"}</span>
                  </OtherData>
                ) : (
                  <OtherData>
                    <span>{item?.type}</span>
                    <span>{item.serializations[0]?.name}</span>
                    <span>{item.authors[0]?.name}</span>
                  </OtherData>
                )}
              </Data>
            </Details>
            <Synopsis>
              <h5>Synopsis</h5>
              <p>{item.synopsis}</p>
            </Synopsis>
            <Background>
              <h5>Background</h5>
              <p>
                {item.background
                  ? item.background
                  : "No background has been provided for this series."}
              </p>
            </Background>
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

            <Reviews>
              <h5>Reviews</h5>
              {reviews.length > 0 ? (
                <>
                  {reviews.map((review, i) => (
                    <Review review={review} key={i}></Review>
                  ))}
                </>
              ) : (
                <p>No reviews have been submitted yet for this title</p>
              )}
            </Reviews>
            {reviewsPagination.has_next_page && (
              <More
                onClick={() =>
                  getReviews(reviewsPagination.last_visible_page + 1)
                }
              >
                More Reviews
              </More>
            )}
          </Right>
        )}
      </Wrapper>
      <Footer />
      {alert ? (
        <Alert
          alertStatus={alert}
          message="Successfully added to list!"
        ></Alert>
      ) : null}
      <Error error={error}>
        <ErrorOutlinedIcon className="errorIcon" /> Invalid episode input
      </Error>
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
  padding-top: 4px;
  padding-left: 10px;
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
const ImageWrapper = styled.div`
  min-width: 200px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const AddToListWrapper = styled.form`
  margin-top: 15px;
  font-size: 1.3rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
  padding: 5px;
`;

const AddToListTitle = styled.span`
  color: ${(props) => props.theme.main};
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 5px;
  border-bottom: 1px solid lightgrey;
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;

export const StatusDropdown = styled.select`
  margin-left: 20px;
  height: 30px;
  border: #cecece 1px solid;
`;

export const RatingWrapper = styled(StatusWrapper)``;
export const RatingDropdown = styled(StatusDropdown)``;

export const EpisodesWatchedWrapper = styled(StatusWrapper)``;
export const EpisodesWatched = styled.input`
  margin-left: 5px;
  height: 25px;
  width: 30px;
  border: #cecece 1px solid;
`;

const Inputs = styled.div`
  display: flex;
  justify-content: center;
`;

const AddButton = styled.a`
  background-color: ${(props) => props.theme.tertiary};
  color: white;
  padding: 8px 18px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.167s ease-in-out;
  :hover {
    opacity: 0.8;
    color: white;
  }
`;

const Information = styled.div``;

const Statistics = styled.div``;

const SideBarList = styled.ul`
  font-size: 1.2rem;
  li {
    text-transform: capitalize;
    margin-top: 8px;
    line-height: 1.3;
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
const ScoreTitle = styled.div`
  background-color: ${(props) => props.theme.tertiary};
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

const Synopsis = styled.section`
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
    white-space: pre-wrap;
  }
`;

//Voice Actor
const VoiceActors = styled(Synopsis)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const VoiceActor = styled.div`
  display: flex;
  padding: 5px;
  border-top: 1px solid ${(props) => props.theme.secondary};
`;

const VAPicture = styled.img`
  width: 100px;
`;

const VAInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  span {
    padding-bottom: 5px;
    font-size: 1.4rem;
  }
`;

const VAName = styled.span`
  color: ${(props) => props.theme.main};
`;

const VALanguage = styled.span``;

const Background = styled(Synopsis)``;

const VideoWrapper = styled(Synopsis)`
  h5 {
    margin-bottom: 5px;
  }
`;

const Reviews = styled(Synopsis)``;
