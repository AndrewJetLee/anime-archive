import styled from "styled-components";
import { useLocation } from "react-router-dom";
import List from "../components/List";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import UserListItem from "../components/UserListItem";

const UserList = () => {
  const location = useLocation();
  const list = location.state;
  console.log(list);
  return (
    <Container>
      <Wrapper>
        <Nav />
        <Header>
          All Anime
        </Header>
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
          {list.map((item, i) => (
            <UserListItem item={item} key={i} number={i + 1}/>
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

const Header = styled.header`
  
`

const Table = styled.table``;

const TableBody = styled.tbody``;

const TableRow = styled.tr`

`;
