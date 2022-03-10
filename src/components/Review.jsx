import { useState } from "react";
import styled from "styled-components";
import moment from "moment";

const Review = ({ review }) => {
  const [readMore, toggleReadMore] = useState(false);

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserImageWrapper>
            <UserImage src={review.user.images.jpg.image_url} />
          </UserImageWrapper>
          <UserInfo>
            <Username>{review.user.username}</Username>
            <HelpfulCount>
              {review.votes} found this review helpful
            </HelpfulCount>
            <EpisodesSeen>
              Episodes watched: {review.episodes_watched}
            </EpisodesSeen>
            <ReviewDate>
              {moment(review.date).format("MMMM Do YYYY")}
            </ReviewDate>
          </UserInfo>
        </UserWrapper>
        <ReviewInfo>
          <ReviewScores>
            <ReviewScoresTitle>Rating</ReviewScoresTitle>
            {review.scores.animation ? (
              <Score>Animation: {review.scores.animation}</Score>
            ) : (
              <Score>Art: {review.scores.art}</Score>
            )}
            <Score>Story: {review.scores.story}</Score>
            <Score>Characters: {review.scores.character}</Score>
            {review.scores.sound ? (
              <Score>Sound: {review.scores.sound}</Score>
            ) : (
              <Score>Enjoyment: {review.scores.enjoyment}</Score>
            )}
            <Score>Overall: {review.scores.overall}</Score>
          </ReviewScores>
        </ReviewInfo>
      </Header>
      <Body>
        <ReviewContent>
          {readMore
            ? review.review
            : review.review.slice(0, review.review.indexOf(" ", 500))}
          ...
        </ReviewContent>
        <ReadMore onClick={() => toggleReadMore(!readMore)}>
          {" "}
          {!readMore ? "read more" : "show less"}
        </ReadMore>
      </Body>
    </Container>
  );
};

export default Review;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
// Top
const Header = styled.div`
  display: flex;
  font-size: 1.3rem;
  justify-content: space-between;
  height: 100px;
  padding: 4px 2px;
`;
const UserImageWrapper = styled.div`
  height: 100%;
  width: 80px;
  display: flex;
  border: solid 1px lightgrey;
`;

const UserImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;
const UserWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.2rem;
  padding: 4px;
`;

const Username = styled.a`
  color: ${(props) => props.theme.main};
`;
const HelpfulCount = styled.span`
  color: gray;
`;
const EpisodesSeen = styled.span``;

const ReviewInfo = styled.div`
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReviewDate = styled.span``;
const ReviewScores = styled.ul`
  height: 100%;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
`;
const ReviewScoresTitle = styled.div`
  border-bottom: 1px solid lightgrey;
  background-color: ${(props) => props.theme.tertiary};
  color: white;
  text-align: center;
  padding: 2px;
`;

const Score = styled.li`
  :last-child {
    color: ${(props) => props.theme.main};
  }
`;

// Bottom
const Body = styled.div`
  border-top: solid 1px lightgrey;
  border-bottom: solid 1px lightgrey;
  padding-bottom: 20px;
`;

const ReviewContent = styled.p`
  margin-bottom: 0;
  white-space: pre-wrap;
`;

const ReadMore = styled.span`
  font-size: 1.2rem;
  color: ${(props) => props.theme.main};
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
