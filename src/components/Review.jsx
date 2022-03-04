import { useState } from "react";
import styled from "styled-components";

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
          </UserInfo>
        </UserWrapper>
        <ReviewInfo>
          <ReviewDate>{review.date}</ReviewDate>
          <ReviewScores>
              <Score>Animation: {review.scores.animation}</Score>
              <Score>Sound: {review.scores.sound}</Score>
              <Score>Story: {review.scores.story}</Score>
              <Score>Characters: {review.scores.character}</Score>
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
  height: 90px;
  padding: 4px 2px;
`;
const UserImageWrapper = styled.div`
  height: 100%;
  width: 60px;
  display: flex;
  border: solid 1px lightgrey;
`;

const UserImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
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
`;

const Username = styled.a``;
const HelpfulCount = styled.span``;
const EpisodesSeen = styled.span``;

const ReviewInfo = styled.div`
  font-size: 1.2rem;
`;

const ReviewDate = styled.span``;
const ReviewScores = styled.ul`
    
    margin: 0;
`;
const Score = styled.li``;

// Bottom
const Body = styled.div`
  border-top: solid 1px lightgrey;
  border-bottom: solid 1px lightgrey;
  padding-bottom: 20px;
`;

const ReviewContent = styled.p`
  margin-bottom: 0;
`;

const ReadMore = styled.span`
  font-size: 1.2rem;
  color: ${(props) => props.theme.main};
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
