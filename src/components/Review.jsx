import { useState } from "react";
import styled from "styled-components";

const Review = ({ review }) => {
  const [readMore, toggleReadMore] = useState(false);

  return (
    <Container>
      <Header>
        <UserImageWrapper>
          <UserImage src={review.user.images.jpg.image_url} />
        </UserImageWrapper>
        <UserInfo>
          <Username>{review.user.username}</Username>
          <HelpfulCount>{review.votes}</HelpfulCount>
        </UserInfo>
        <ReviewInfo></ReviewInfo>
      </Header>
      <Body>
        <ReviewContent>{readMore ? review.review : review.review.slice(0, review.review.indexOf(" ", 500))}...</ReviewContent>
        <ReadMore onClick={() => toggleReadMore(!readMore)}> {!readMore ? "read more" : "show less"}</ReadMore>
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
  
`;
const UserImageWrapper = styled.div`
  height: 60px;
  width: 60px;
`;

const UserImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Username = styled.a``;
const HelpfulCount = styled.span``;

const ReviewInfo = styled.div``;

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
    color: ${props => props.theme.main};
`