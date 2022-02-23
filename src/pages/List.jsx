import styled from 'styled-components';
import { useLocation } from "react-router-dom";

const List = () => {
  const location = useLocation();
  const list = location.state;
  console.log(list);
  return (
    <Container>List</Container>
  )
}

export default List

const Container = styled.div`
    
`