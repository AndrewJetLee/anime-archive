import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";
import {
  StatusDropdown,
  RatingDropdown,
  EpisodesWatched,
} from "../pages/Media";
import Alert from "../components/Alert"

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
  const [statusDropdown, setStatusDropdown] = useState("Plan to Watch");
  const [ratingDropdown, setRatingDropdown] = useState("");
  const [episodesWatched, setEpisodesWatched] = useState(0);
  const [alertStatus, toggleAlertStatus] = useState(false);

  useEffect(() => {
    setMedia(item);
  }, [filteredList]);

  const handleEdit = async (e) => {
    try {
      let payload = {
        userStatus: statusDropdown,
        userRating: ratingDropdown,
        userProgress: episodesWatched,
      };
      const res = await publicRequest.put(
        `user/list/edit/${media.mal_id}`,
        payload
      );
      getList();
      toggleModal(!modal);
      toggleAlertStatus(true);
      setTimeout(() => {
        toggleAlertStatus(false);
      }, 3000);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(media);
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
      
      <Alert alertStatus={alertStatus} message="Successfully updated list!"/>
      {modal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h3>Edit Anime</h3>
            </ModalHeader>
            <ModalTitle>Anime Title: {media.title}</ModalTitle>
            <ModalStatus>
              <label for="status">Status: </label>
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
            </ModalStatus>
            <ModalWatched>
              <label for="episodes">Episodes: </label>
              <EpisodesWatched
                placeholder="0"
                onChange={(e) => {
                  setEpisodesWatched(e.target.value);
                }}
              />
              /{media.episodes}
            </ModalWatched>
            <ModalScore>
              <label for="rating">Rating: </label>
              <RatingDropdown
                name="rating"
                onChange={(e) => setRatingDropdown(e.target.value)}
              >
                <option value="">Select</option>
                {new Array(10).fill("").map((item, i) => (
                  <option value={i + 1}>{i + 1}</option>
                ))}
              </RatingDropdown>
            </ModalScore>
            <Submit onClick={(e) => handleEdit(e)}>Submit</Submit>
          </ModalContent>
        </Modal>
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
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px 20px;
  border-radius: 2px;
  border: 8px solid ${(props) => props.theme.main};
`;

const ModalHeader = styled.div`
  h3 {
    border-bottom: 1px solid gray;
    padding-bottom: 4px;
  }
`;

const ModalTitle = styled.div`
  margin-bottom: 20px;
`;

const ModalStatus = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalWatched = styled(ModalStatus)``;

const ModalScore = styled(ModalStatus)``;

const Submit = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.tertiary};
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  color: white;
  transition: opacity 0.167s ease-in-out;
  :hover {
    opacity: 0.8;
  }
`;
