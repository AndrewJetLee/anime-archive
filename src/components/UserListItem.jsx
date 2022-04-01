import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import Alert from "../components/Alert";
import { jikanRequest } from "../requestMethods";

const UserListItem = ({
  item,
  number,
  handleDelete,
  getList,
  filteredList,
}) => {
  const navigate = useNavigate();
  const [media, setMedia] = useState(item);
  const [modal, toggleModal] = useState(false);
  const [alertStatus, toggleAlertStatus] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      setMedia(item);
    }
    return (() => {
      isMounted.current = false;
    })
  }, [filteredList]);

  const handleClick = async (e) => {
    let type =
      media.demographics.length > 0
        ? media.demographics[0].type
        : media.genres[0].type;
    const response = await jikanRequest.get(`/${type}/${media.mal_id}`);
    navigate(`/${type}/${media.mal_id}`, { state: response.data.data });
  };

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
            <Title onClick={handleClick}>{media.title}</Title>
            <Status>
              {media.status} -{" "}
              <Edit onClick={() => toggleModal(!modal)}>Edit</Edit>
            </Status>
          </InfoWrapper>
        </Left>
        <Right>
          <Delete>
            <RemoveCircleIcon
              className="removeIcon"
              onClick={() => {
                handleDelete(media.mal_id);
                getList();
                toggleAlertStatus(true);
                setTimeout(() => {
                  toggleAlertStatus(false);
                }, 3000);
              }}
            />
          </Delete>
          <UserStatus>Status: {media.userOptions.userStatus}</UserStatus>
          <Progress>
            Progress:{" "}
            {media.userOptions.userProgress
              ? media.userOptions.userProgress
              : "-"}
            /{media.episodes}
          </Progress>
          <Rating>Rated: {media.rating}</Rating>
          <Genres>
            {media.genres.map((genre, i) => (
              <Genre key={i}>{genre.name}</Genre>
            ))}
          </Genres>
          <OtherInfo>
            <Score>
              Your Score:{" "}
              {media.userOptions.userRating
                ? media.userOptions.userRating
                : "-"}{" "}
              <StarRateIcon className="starIcon" />{" "}
            </Score>
            <Members>Members: {media.members}</Members>
            <Favorites>Favorites: {media.favorites}</Favorites>
          </OtherInfo>
        </Right>
      </Container>

      <Alert alertStatus={alertStatus} message="Successfully updated list!" />
      {modal && (
        <Modal
          media={media}
          title="Edit List"
          toggleAlertStatus={toggleAlertStatus}
          toggleModal={toggleModal}
          modal={modal}
          type="edit"
          helper={getList}
        />
      )}
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
  margin-bottom: 7px;
  border-radius: 2px;
  ${(props) =>
    props.mediaStatus === "Currently Watching"
      ? css`
          border-left: 3px solid green;
        `
      : props.mediaStatus === "Plan to Watch"
      ? css`
          border-left: 3px solid grey;
        `
      : props.mediaStatus === "Completed"
      ? css`
          border-left: 3px solid blue;
        `
      : props.mediaStatus === "On Hold"
      ? css`
          border-left: 3px solid yellow;
        `
      : css`
          border-left: 3px solid red;
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
  :hover {
    opacity: 0.7;
    color: ${(props) => props.theme.main};
  }
`;

const Status = styled.a`
  margin-bottom: 5px;
`;

const Edit = styled.span`
  color: ${(props) => props.theme.main};
  cursor: pointer;
  :hover {
    opacity: 0.8;
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
  min-width: 120px;
`;

const Genre = styled.a`
  background-color: ${(props) => props.theme.tertiary};
  padding: 4px 18px;
  border-radius: 3px;
  margin: 2px;
  color: white;
  text-align: center;
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
