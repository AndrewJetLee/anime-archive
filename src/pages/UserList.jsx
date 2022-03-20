import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import UserListItem from "../components/UserListItem";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [activeTab, setActiveTab] = useState("current");
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(userList);

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    try {
      if (user) {
        const res = await publicRequest.get("/user/list");
        setUserList(res.data.list);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleDelete = async (id) => {
    try {
      const res = await publicRequest.delete(`/user/list/${id}`);
      setUserList(res.data.list);
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
          {userList.map((item, i) => (
            <UserListItem
              item={item}
              key={i}
              number={i + 1}
              handleDelete={handleDelete}
              getList={getList}
            />
          ))}
        </AnimeList>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default UserList;

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
  min-height: 100vh;
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
  border: solid black 8px;
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
