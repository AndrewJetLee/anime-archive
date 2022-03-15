import styled from "styled-components";
import SearchItem from "./SearchItem";

const List = ({ items }) => {  
  const containsItems  = items.length > 0;

  return (
    <Container containsItems={containsItems}>
      {containsItems ? items?.map((item, i) => (
        <SearchItem item={item} key={i}/>
      )) : <NoneFound >Sorry, your search term did not return any results</NoneFound>}
    </Container>
  );
};

export default List;

const Container = styled.div`
  display: ${ props => props.containsItems ? "grid" : "flex"};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 260px));
  grid-auto-flow: row;
  grid-gap: 5px;
  justify-content: center;
`;

const NoneFound = styled.div`
  background-color: ${props => props.theme.main};
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  padding: 20px;
  font-size: 1.8rem;
  color: white;
`