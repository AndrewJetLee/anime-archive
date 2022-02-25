import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const UserListItem = ({ item, number, handleDelete }) => {
  const navigate = useNavigate();
  return (
    <Container >
      <Number>{number}</Number>
      <Image>
        <img src={item.attributes.posterImage.medium} alt=""/>
      </Image>
      <Title onClick={() => {
        navigate("/media", { state: item })
      }}>{item.attributes.canonicalTitle}</Title>
      <Score>{item.attributes.averageRating}</Score>
      <Type>{item.attributes.showType ? item.attributes.showType : "Manga"} </Type>
      <Edit>
        <Delete onClick={() => {
          handleDelete(item.id);
        }}>Delete</Delete>
      </Edit>
    </Container>
  );
};

export default UserListItem;

const Container = styled.tr`
  font-size: 1.3rem;
`;


const Number = styled.td``;
const Image = styled.td`
  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`;
const Title = styled.td`
  font-weight: 600;
  color: ${props => props.theme.main};
  cursor: pointer;
`;
const Score = styled.td``;
const Type = styled.td``;
const Edit = styled.td``;

const Delete = styled.a`
  color: red;
  cursor: pointer;
`;
