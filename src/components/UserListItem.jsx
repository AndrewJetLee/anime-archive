import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";

const UserListItem = ({ item, number, handleDelete }) => {
  const navigate = useNavigate();
  const [media, setMedia] = useState(item);
  const [modal, toggleModal] = useState(false);

  const handleEdit = async () => {
    try {
      const res = await publicRequest.put(`/list/${item.mal_id}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(item);
  return (
    <>
    <Container mediaStatus={media.userOptions.userStatus}>
      <Left>
        <ImageWrapper>
          <Number>{number}</Number>
          <Image src={media.images.jpg.image_url}></Image>
        </ImageWrapper>
        <InfoWrapper>
          <Type>{media.type}</Type>
          <Title
            onClick={() => {
              navigate("/media", { state: media });
            }}
          >
            {media.title}
          </Title>
          <Status>
            {media.status} - <Edit onClick={() => toggleModal(!modal)}>Edit</Edit>
          </Status>
        </InfoWrapper>
      </Left>
      <Right>
        <Delete>
          <RemoveCircleIcon
            className="removeIcon"
            onClick={() => {
              handleDelete(media.mal_id);
            }}
          />
        </Delete>
        <UserStatus>Status: {media.userOptions.userStatus}</UserStatus>
        <Progress>
          Progress:{" "}
          {media.userOptions.userProgress ? media.userOptions.userProgress : "-"}/
          {media.episodes}
        </Progress>
        <Rating>Rated: {media.rating}</Rating>
        <Genres>
          {media.genres.map((genre, i) => (
            <Genre key={i}>{genre.name}</Genre>
          ))}
        </Genres>
        <OtherInfo>
          <Score>
            Your Score: {media.userOptions.userRating ? media.userOptions.userRating : "-"}{" "}
            <StarRateIcon className="starIcon" />{" "}
          </Score>
          <Members>Members: {media.members}</Members>
          <Favorites>Favorites: {media.favorites}</Favorites>
        </OtherInfo>
      </Right>
    </Container>
    { modal && <Modal>

      </Modal>}
    </>
  );
};

export default UserListItem;

const Container = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  min-height: 150px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 2px;
  ${(props) =>
    props.mediaStatus === "Currently Watching"
      ? css`
          border-left: 2px solid green;
        `
      : props.mediaStatus === "Plan to Watch"
      ? css`
          border-left: 2px solid grey;
        `
      : props.mediaStatus === "Completed"
      ? css`
          border-left: 2px solid blue;
        `
      : props.mediaStatus === "On Hold"
      ? css`
          border-left: 2px solid yellow;
        `
      : css`
          border-left: 2px solid red;
        `}
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

const Edit = styled.span`
  color: ${(props) => props.theme.main};
  cursor: pointer;
  :hover {
    opacity: .8;
  }
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
  width: 120px;
`;

const Progress = styled.div`
  margin: 0 5px;
  width: 80px;
`;

const UserStatus = styled(Progress)``;

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

const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: gray;
  opacity: .5;
  z-index: 10000;
`;

const ModalContent = styled.div``

const ModalTitle = styled.div``

const ModalStatus = styled.div``

const ModalWatched = styled.div``

const ModalScore = styled.div``