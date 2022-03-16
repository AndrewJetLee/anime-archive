import styled from "styled-components";
import { jikanRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

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
        <Genres>{item.genres?.map((genre, i) => <Genre key={i}>{genre.name}</Genre>)}</Genres>
      </Header>
      <Content>
        <Image src={item.images.jpg.large_image_url} className="animeImage" />
      </Content>
      <Bottom>GIGITY</Bottom>
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
  position: relative;
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
`

const Title = styled.span`
  display: inline-flex;
  color: ${props => props.theme.main};
  font-size: 1.4rem;
  text-align: center;
  padding: 5px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;
const Genres = styled.div`
    display: flex;
    justify-content: center;
    font-size: .9rem;
    background-color: ${props => props.theme.secondary};
    align-items: center;
    height: 20px;
`

const Genre = styled.span`
    padding: 2px 6px;
`

const Content = styled.div`
  height: 100%;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Bottom = styled.div`
    display: flex;
    background-color: ${props => props.theme.secondary};
`
