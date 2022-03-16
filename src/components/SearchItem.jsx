import styled from "styled-components";
import { jikanRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const SearchItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    let type =
      item.demographics.length > 0
        ? item.demographics[0].type
        : item.genres[0].type;
    const response = await jikanRequest.get(`/${type}/${item.mal_id}`);
    navigate(`/${type}/${item.mal_id}`, { state: response.data.data });
  };

  return (
    <Container onClick={handleClick}>
      <Header>
        <Title>{item.name ? item.name : item.title}</Title>
        <Genres>
          {item.genres?.map((genre, i) => (
            <Genre key={i}>{genre.name}</Genre>
          ))}
        </Genres>
      </Header>
      <Content>
        <Image
          src={
            item.images.jpg.large_image_url
              ? item.images.jpg.large_image_url
              : item.images.jpg.image_url
          }
          className="animeImage"
        />
      </Content>
      <Bottom>
        <Score><StarOutlineIcon className="icon"/>{(item.score || item.scored) ? item.score || item.scored : "N/A"}</Score>
        <Members><PersonOutlineIcon className="icon"/>{item.members ? item.members : 0}</Members>
        <AddToList>Add To List</AddToList>
      </Bottom>
    </Container>
  );
};

export default SearchItem;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition-property: opacity;
  transition-duration: 0.16s;
  border: solid 1px lightgray;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  display: flex;
  color: ${(props) => props.theme.main};
  font-size: 1.3rem;
  text-align: center;
  padding: 5px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
const Genres = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  background-color: ${(props) => props.theme.secondary};
  align-items: center;
  height: 25px;
`;

const Genre = styled.span`
  padding: 0 3px;
`;

const Content = styled.div`
  height: 400px;
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
  .icon {
    margin-right: 3px;
  }
`

const Members = styled(Score)``

const AddToList = styled.button`
  background-color: ${props => props.theme.tertiary};
  padding: 4px 16px;
  border-radius: 2px;
  color: white;
`