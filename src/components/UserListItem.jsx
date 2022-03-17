import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const UserListItem = ({ item, number, handleDelete }) => {
  const navigate = useNavigate();
  console.log(item);
  return (
    <Container>
      <AnimeInfo>
        <ImageWrapper>
          <Number>{number}</Number>
          <Image src={item.images.jpg.image_url}></Image>
        </ImageWrapper>
        <InfoWrapper>
          <Type>{item.type}</Type>
          <Title
            onClick={() => {
              navigate("/media", { state: item });
            }}
          >
            {item.title}
          </Title>
          <Rating>{item.rating}</Rating>
          
        </InfoWrapper>
      </AnimeInfo>

      {/* <Type>{item.attributes.showType ? item.attributes.showType : "Manga"} </Type> */}
      <Edit>
        <Delete
          onClick={() => {
            handleDelete(item.mal_id);
          }}
        >
          Delete
        </Delete>
      </Edit>
    </Container>
  );
};

export default UserListItem;

const Container = styled.div`
  font-size: 1.3rem;
  border: solid;
  display: flex;
  align-items: center;
  min-height: 150px;
`;

const AnimeInfo = styled.div`
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
  background-color: ${props => props.theme.tertiary};
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
const Rating = styled.a`
  margin-bottom: 5px;
`;
const Title = styled.a`
  font-weight: 600;
  color: ${(props) => props.theme.main};
  cursor: pointer;
  margin-bottom: 5px;
`;

const Type = styled(Rating)``;
const Edit = styled.td``;

const Delete = styled.a`
  color: red;
  cursor: pointer;
`;
