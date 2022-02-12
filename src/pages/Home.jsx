import Nav from "../components/Nav";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
        <Nav/>
        Home
    </Container>
  )
}

export default Home

const Container = styled.div`
    display: flex;
    border: solid;
    width: 80vw;
    flex-direction: column;
    height: 100vh;
`
