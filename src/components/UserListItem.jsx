import styled from "styled-components";

const UserListItem = ({ item, number, handleDelete }) => {

  return (
    <Container>
      <Number>{number}</Number>
      <Image>
        <img src={item.attributes.posterImage.medium} alt=""/>
      </Image>
      <Title>{item.attributes.canonicalTitle}</Title>
      <Score>{item.attributes.averageRating}</Score>
      <Type>{item.attributes.showType}</Type>
      <Edit>
        <Delete onClick={() => {
          handleDelete(item.id);
        }}>Delete</Delete>
        <Change>Change</Change>
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
`;
const Score = styled.td``;
const Type = styled.td``;
const Edit = styled.td`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Delete = styled.button`
  
`;
const Change = styled(Delete)``;
