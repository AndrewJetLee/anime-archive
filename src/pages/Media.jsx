import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Media = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <Container>
        <Left>
            <Image></Image>
            <Information></Information>
            <Statistics></Statistics>
        </Left>
        <Right>
            <Details></Details>
            <Synopsis></Synopsis>
        </Right>
    </Container>
  )
}

export default Media

const Container = styled.div`
    
`

//Left Column
const Left = styled.div`
    
`
const Image = styled.div`
    
`
const Information = styled.div`
`
const Statistics = styled.div``

// Right Column
const Right = styled.div`
    
`
const Details = styled.div`
    
`
const Synopsis = styled.div`
    
`