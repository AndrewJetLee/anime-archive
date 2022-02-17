import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Media = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <Container>Media</Container>
  )
}

export default Media

const Container = styled.div`
    
`