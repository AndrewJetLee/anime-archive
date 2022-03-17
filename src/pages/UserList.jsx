import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import UserListItem from "../components/UserListItem";
import { useState } from "react";
import { publicRequest } from "../requestMethods";

const UserList = () => {
  const location = useLocation();
  const list = location.state;
  const [userList, setUserList] = useState(list ? list : null);

  console.log(userList);

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
          <HeaderTabs>
            <All>ALL ANIME</All>
            <Watching>CURRENTLY WATCHING</Watching>
            <Completed>COMPLETED</Completed>
            <Hold>ON HOLD</Hold>
            <Dropped>DROPPED</Dropped>
            <Planned>PLAN TO WATCH</Planned>
          </HeaderTabs>
        </HeaderContent>
      </Header>
      <Wrapper>
        <Table>
          <TableBody>
            <TableRow>
              <th className="number">#</th>
              <th className="image">Image</th>
              <th className="title">Title</th>
              <th className="score">Score</th>
              <th className="type">Type</th>
              <th className="type">Edit</th>
            </TableRow>
            {userList.map((item, i) => (
              <UserListItem
                item={item}
                key={i}
                number={i + 1}
                handleDelete={handleDelete}
              />
            ))}
          </TableBody>
        </Table>
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

const Wrapper = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  min-height: 100vh;
`;

// Header
const Header = styled.header`
  background-color: ${(props) => props.theme.main};
  color: white;
  width: 100%;
`;

const BannerWrapper = styled.div`
  height: 450px;
`;

const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const HeaderContent = styled.section`
  width: 100vw;
  border: solid;
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
`;

const All = styled.span`
  font-weight: 500;
  font-size: 2.4rem;
`;

const Watching = styled(All)`
  
`;
const Completed = styled(All)``;
const Hold = styled(All)``;
const Dropped = styled(All)``;
const Planned = styled(All)``;

// List
const Table = styled.table``;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  th {
    text-align: left;
    font-size: 1.2rem;
  }
  .image {
    padding-left: 20px;
  }
`;
