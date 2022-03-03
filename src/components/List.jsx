import styled from "styled-components";
import CarouselItem from "./CarouselItem";

const List = ({ items }) => {  
  return (
    <Container>
      {items.map((item, i) => (
        <CarouselItem item={item} key={i}/>
      ))}
    </Container>
  );
};

export default List;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-flow: row;
  grid-gap: 5px;
`;
