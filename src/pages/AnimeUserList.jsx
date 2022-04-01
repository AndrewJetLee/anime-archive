import styled, { css } from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import UserListItem from "../components/UserListItem";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { CircularProgress } from "@mui/material";

const UserAnimeList = () => {
  const [userList, setUserList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, toggleLoading] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    filterList();
  }, [activeTab]);

  const getList = async () => {
    try {
      toggleLoading(true);
      if (user) {
        const res = await publicRequest.get("/user/list");
        setUserList(
          [...res.data.list].sort((a, b) => {
            if (
              a.userOptions.userStatus.toUpperCase() <
              b.userOptions.userStatus.toUpperCase()
            ) {
              return -1;
            }
            if (
              a.userOptions.userStatus.toUpperCase() >
              b.userOptions.userStatus.toUpperCase()
            ) {
              return 1;
            }
            return 0;
          })
        );
        setFilteredList(
          [...res.data.list].sort((a, b) => {
            if (
              a.userOptions.userStatus.toUpperCase() <
              b.userOptions.userStatus.toUpperCase()
            ) {
              return -1;
            }
            if (
              a.userOptions.userStatus.toUpperCase() >
              b.userOptions.userStatus.toUpperCase()
            ) {
              return 1;
            }
            return 0;
          })
        );
        toggleLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const filterList = () => {
    if (activeTab === "all") {
      setFilteredList(userList);
    } else if (activeTab === "current") {
      setFilteredList(
        userList.filter(
          (item, i) => item.userOptions.userStatus === "Currently Watching"
        )
      );
    } else if (activeTab === "completed") {
      setFilteredList(
        userList.filter(
          (item, i) => item.userOptions.userStatus === "Completed"
        )
      );
    } else if (activeTab === "hold") {
      setFilteredList(
        userList.filter((item, i) => item.userOptions.userStatus === "On Hold")
      );
    } else if (activeTab === "dropped") {
      setFilteredList(
        userList.filter((item, i) => item.userOptions.userStatus === "Dropped")
      );
    } else if (activeTab === "planned") {
      setFilteredList(
        userList.filter(
          (item, i) => item.userOptions.userStatus === "Plan to Watch"
        )
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await publicRequest.delete(`/user/list/${id}`);
      setUserList(res.data.list);
      setFilteredList(res.data.list);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Nav />
      <Header>
        <BannerWrapper>
          <Banner src="/images/aa-default-banner.jpg"></Banner>
        </BannerWrapper>
        <HeaderContent>
          <ProfilePictureWrapper>
            <ProfilePicture src="/images/placeholder-img.png"></ProfilePicture>
          </ProfilePictureWrapper>
          <HeaderTabs
            onClick={(e) => {
              setActiveTab(e.target.getAttribute("value"));
            }}
          >
            <All activeTab={activeTab} value="all">
              ALL ANIME
            </All>
            <Watching activeTab={activeTab} value="current">
              CURRENTLY WATCHING
            </Watching>
            <Completed activeTab={activeTab} value="completed">
              COMPLETED
            </Completed>
            <Hold activeTab={activeTab} value="hold">
              ON HOLD
            </Hold>
            <Dropped activeTab={activeTab} value="dropped">
              DROPPED
            </Dropped>
            <Planned activeTab={activeTab} value="planned">
              PLAN TO WATCH
            </Planned>
          </HeaderTabs>
        </HeaderContent>
      </Header>
      <Wrapper>
        <AnimeList>
          { loading && <Loading><CircularProgress color="inherit"></CircularProgress></Loading>}
          {!loading && filteredList.length === 0 && (
            <NoList>
              <NoListContent>
                <NoListImg src="/images/aa-tohru-point.png" />
                <NoListText>
                  No anime found. Try adding more anime to your list first!
                </NoListText>
                <NoListButton href="/browse/top/anime">Browse Anime</NoListButton>
              </NoListContent>
            </NoList>
          )}
          { !loading && filteredList.map((item, i) => (
            <UserListItem
              item={item}
              key={i}
              number={i + 1}
              handleDelete={handleDelete}
              getList={getList}
              filteredList={filteredList}
            />
          ))}
        </AnimeList>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default UserAnimeList;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
`;

const Wrapper = styled.main`
  display: flex;
  width: 91vw;
  flex-direction: column;
`;

// Header
const Header = styled.header`
  background-color: ${(props) => props.theme.main};
  color: white;
  width: 100%;
  margin-bottom: 80px;
`;

const BannerWrapper = styled.div`
  height: 400px;
`;

const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const HeaderContent = styled.section`
  width: 100vw;
  display: flex;
  height: 100px;
  align-items: center;
`;

const ProfilePictureWrapper = styled.div`
  border: solid gray 8px;
  border-radius: 50%;
  overflow: hidden;
  min-height: 200px;
  min-width: 200px;
  max-width: 200px;
  max-height: 200px;
  position: relative;
  margin-left: 80px;
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeaderTabs = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 100%;
  font-weight: 500;
  font-size: 2rem;
  div {
    cursor: pointer;
  }
`;

const All = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 5px solid transparent;
  ${(props) =>
    props.activeTab === "all" &&
    css`
      border-bottom: solid 5px ${(props) => props.theme.tertiary};
    `}
`;

const Watching = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 5px solid transparent;
  ${(props) =>
    props.activeTab === "current" &&
    css`
      border-bottom: solid 5px ${(props) => props.theme.tertiary};
    `}
`;
const Completed = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 5px solid transparent;
  ${(props) =>
    props.activeTab === "completed" &&
    css`
      border-bottom: solid 5px ${(props) => props.theme.tertiary};
    `}
`;
const Hold = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 5px solid transparent;
  ${(props) =>
    props.activeTab === "hold" &&
    css`
      border-bottom: solid 5px ${(props) => props.theme.tertiary};
    `}
`;
const Dropped = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 5px solid transparent;
  ${(props) =>
    props.activeTab === "dropped" &&
    css`
      border-bottom: solid 5px ${(props) => props.theme.tertiary};
    `}
`;
const Planned = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 5px solid transparent;
  ${(props) =>
    props.activeTab === "planned" &&
    css`
      border-bottom: solid 5px ${(props) => props.theme.tertiary};
    `}
`;

// List
const AnimeList = styled.section`
  width: 100%;
`;

const NoList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NoListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoListImg = styled.img`
  background: transparent;
  object-fit: contain;
  height: 100%;
  width: 300px;
`;

const NoListText = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
`;

const NoListButton = styled.a`
  background-color: ${(props) => props.theme.tertiary};
  padding: 12px 30px;
  font-size: 1.8rem;
  font-weight: 600;  
  color: white;
  cursor: pointer;
  border-radius: 2px;
  width: 100%;
  text-align: center;
  border-radius: 4px;
  transition: opacity .167s ease-in-out;
  :hover {
    color: white;
    opacity: .8;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.tertiary}
`