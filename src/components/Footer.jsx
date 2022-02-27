import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Center>
        <Top>
          <Socials>Icons</Socials>
        </Top>
        <Bottom>
          <Navigation>
            <li><a href="">Home</a></li>
            <li><a href="">Anime</a></li>
            <li><a href="">Manga</a></li>
            <li><a href="">List</a></li>
          </Navigation>
          <Copyright>
            @2021 JetLee
          </Copyright>
        </Bottom>
      </Center>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    width: 100%;
    height: 250px;
    background-color: ${props => props.theme.main};
    color: white;
    display: flex;
    justify-content: center;
`

const Center = styled.div`
    width: 70%;
    background-color: green;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Top = styled.div`
    display: flex;
    flex: 1;
`

const Bottom = styled.div`
   flex: 3;
`

const Socials = styled.div`
 
`
const Navigation = styled.ul`
  display: flex;
`
const Copyright = styled.div`
  
`