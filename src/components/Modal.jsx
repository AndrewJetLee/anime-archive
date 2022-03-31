import { useState } from "react";
import styled from "styled-components";
import {
  StatusDropdown,
  RatingDropdown,
  EpisodesWatched,
} from "../pages/Media";
import { publicRequest } from "../requestMethods";

const Modal = ({media, title, toggleAlertStatus, toggleModal, modal, type, helper}) => {
  const [statusDropdown, setStatusDropdown] = useState("Plan to Watch");
  const [ratingDropdown, setRatingDropdown] = useState("");
  const [episodesWatched, setEpisodesWatched] = useState(0);

  const handleAddToList = async () => {
    if (episodesWatched > media.episodes || episodesWatched < 0) {
      console.log("Not a valid episode number");
      return;
    }
    try {
      const payload = {
        ...media,
        userOptions: {
          userStatus: statusDropdown,
          userRating: ratingDropdown,
          userProgress: episodesWatched,
        },
      };
      const res = await publicRequest.put("/user/list", payload);
      toggleModal(!modal)
      toggleAlertStatus(true);
      setTimeout(() => {
        toggleAlertStatus(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

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
      helper();
      toggleModal(!modal);
      toggleAlertStatus(true);
      setTimeout(() => {
        toggleAlertStatus(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container onClick={() => toggleModal(!modal)}>
      <Content onClick={e => e.stopPropagation()}>
        <Header>
          <h3>{title}</h3>
        </Header>
        <Title>Anime Title: {media.title}</Title>
        <Status>
          <label htmlFor="status">Status: </label>
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
        </Status>
        <Watched>
          <label htmlFor="episodes">Episodes: </label>
          <EpisodesWatched
            placeholder="0"
            onChange={(e) => {
              setEpisodesWatched(e.target.value);
            }}
          />
          /{media.episodes || "?"}
        </Watched>
        <Score>
          <label htmlFor="rating">Rating: </label>
          <RatingDropdown
            name="rating"
            onChange={(e) => setRatingDropdown(e.target.value)}
          >
            <option value="">Select</option>
            {new Array(10).fill("").map((item, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </RatingDropdown>
        </Score>
        <Submit onClick={type === "edit" ? handleEdit : handleAddToList}>Submit</Submit>
      </Content>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
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

const Content = styled.main`
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

const Header = styled.header`
  h3 {
    border-bottom: 1px solid gray;
    padding-bottom: 4px;
  }
`;

const Title = styled.div`
  margin-bottom: 20px;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Watched = styled(Status)``;

const Score = styled(Status)``;

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
