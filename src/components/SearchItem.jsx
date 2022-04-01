import styled from "styled-components";
import { jikanRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import Modal from "./Modal";
import { useState, useEffect, useRef } from "react";
import Alert from "./Alert";

const SearchItem = ({ item, user }) => {
  const navigate = useNavigate();
  const [modal, toggleModal] = useState(false);
  const [alertStatus, toggleAlertStatus] = useState(false);
  const [type, setType] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      if (item.episodes || item.episodes === null) {
        setType("anime");
      } else if (item.chapters || item.chapters === null) {
        setType("manga");
      } else {
        setType("characters");
      }
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleClick = async (e) => {
    const response = await jikanRequest.get(`/${type}/${item.mal_id}`);
    navigate(`/${type}/${item.mal_id}`, { state: response.data.data });
  };

  return (
    <>
      <Container>
        <Header>
          <Title onClick={handleClick}>
            {item.name
              ? item.name
              : item.title.length > 70
              ? item.title.slice(0, 90) + "..."
              : item.title}
          </Title>
          {type !== "characters" && (
            <Genres>
              {item.genres?.map(
                (genre, i) => i < 5 && <Genre key={i}>{genre.name}</Genre>
              )}
            </Genres>
          )}
        </Header>
        <Content onClick={handleClick}>
          <Image
            src={
              item.images.jpg.large_image_url
                ? item.images.jpg.large_image_url
                : item.images.jpg.image_url
            }
            className="animeImage"
          />
        </Content>
        {type !== "characters" && (
          <Bottom>
            <Score>
              <StarIcon className="icon" />
              {item.score || item.scored ? item.score || item.scored : "N/A"}
            </Score>
            <Members>
              <PersonIcon className="icon" />
              {item.members ? item.members : 0}
            </Members>
            {type === "anime" ? (
              <AddToList
                onClick={() => {
                  if (user) toggleModal(true);
                  else {
                    toggleAlertStatus(true);
                    setTimeout(() => {
                      toggleAlertStatus(false);
                    }, 1000);
                  }
                }}
              >
                Add To List
              </AddToList>
            ) : (
              <Status>Status: {item.status}</Status>
            )}
          </Bottom>
        )}
      </Container>
      {user ? (
        <Alert
          alertStatus={alertStatus}
          message="Successfully added to list!"
        />
      ) : (
        <Alert
          alertStatus={alertStatus}
          message="Please login to add to list!"
        />
      )}

      {modal && (
        <Modal
          media={item}
          title="Add to List"
          toggleAlertStatus={toggleAlertStatus}
          toggleModal={toggleModal}
          modal={modal}
        />
      )}
    </>
  );
};

export default SearchItem;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: solid 1px lightgray;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  display: flex;
  color: ${(props) => props.theme.main};
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  padding: 5px;
  height: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const Genres = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  background-color: ${(props) => props.theme.secondary};
  align-items: center;
  min-height: 25px;
  font-weight: 500;
`;

const Genre = styled.span`
  padding: 0 3px;
`;

const Content = styled.div`
  height: 400px;
  cursor: pointer;
  transition-property: opacity;
  transition-duration: 0.16s;
  :hover {
    opacity: 0.8;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 400px;
`;

const Bottom = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.secondary};
  font-size: 1.2rem;
  align-items: center;
  justify-content: space-around;
  padding: 4px;
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  .icon {
    margin-right: 3px;
    position: relative;
    top: -1.1px;
    color: ${(props) => props.theme.tertiary};
  }
`;

const Members = styled(Score)``;

const AddToList = styled.button`
  background-color: ${(props) => props.theme.tertiary};
  padding: 4px 16px;
  border-radius: 2px;
  color: white;
  transition-property: opacity;
  transition-duration: 0.16s;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const Status = styled.div`
  font-weight: 500;
`;
