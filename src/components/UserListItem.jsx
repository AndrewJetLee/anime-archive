import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import StarRateIcon from '@mui/icons-material/StarRate';

const UserListItem = ({ item, number, handleDelete }) => {
  const navigate = useNavigate();
  console.log(item);
  return (
    <Container>
      <Left>
        <ImageWrapper>
          <Number>{number}</Number>
          <Image src={item.images.jpg.image_url}></Image>
        </ImageWrapper>
        <InfoWrapper>
          <Type>{item.type}</Type>
          <Title
            onClick={() => {
              navigate("/media", { state: item });
            }}
          >
            {item.title}
          </Title>
          <Status>{item.status}</Status>
        </InfoWrapper>
      </Left>
      <Right>
        <Delete>
          <RemoveCircleIcon
            className="removeIcon"
            onClick={() => {
              handleDelete(item.mal_id);
            }}
          />
        </Delete>
        <Progress>
          Progress: 0/{item.episodes}
        </Progress>
        <Rating>Rated: {item.rating}</Rating>
        <Genres>
          {item.genres.map((genre, i) => (
            <Genre key={i}>{genre.name}</Genre>
          ))}
        </Genres>
        <OtherInfo>
          <Score>Your Score: {item.score} <StarRateIcon className="starIcon"/> </Score>
          <Members>Members: {item.members}</Members>
          <Favorites>Favorites: {item.favorites}</Favorites>
        </OtherInfo>
      </Right>
    </Container>
  );
};

export default UserListItem;

const Container = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  min-height: 150px;
  justify-content: space-between;
  background-color: ${props => props.theme.secondary};
  border-radius: 2px;
  border-left: 2px solid green;
`;

const Left = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  display: relative;
  display: flex;
  margin-right: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Number = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  background-color: ${(props) => props.theme.tertiary};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  top: 5px;
  left: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const Title = styled.a`
  font-weight: 600;
  font-size: 1.7rem;
  color: ${(props) => props.theme.main};
  cursor: pointer;
  margin-bottom: 5px;
`;
const Status = styled.a`
  margin-bottom: 5px;
`;

const Type = styled(Status)``;

// Right

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Delete = styled.div`
  color: ${(props) => props.theme.main};
  cursor: pointer;
  margin-right: 15px;
  .removeIcon {
    font-size: 30px;
  }
`;

const Rating = styled.div`
  margin: 0 5px;
  width: 80px;
`;

const Progress = styled(Rating)``;

const Genres = styled.div`
  display: flex;
  flex-direction: column;
`;

const Genre = styled.a`
  background-color: ${(props) => props.theme.tertiary};
  padding: 4px 18px;
  border-radius: 4px;
  margin: 2px;
`;

const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Score = styled.div`
  margin: 6px 18px;
  display: flex;
  align-items: center;
  vertical-align: center;
  .starIcon {
    position: relative;
    top: -2px;
    color: ${(props) => props.theme.tertiary};
  }
`;

const Members = styled(Score)``;

const Favorites = styled(Score)``;
