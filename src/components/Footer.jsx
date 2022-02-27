import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Container>
      <Center>
        <Top>
          <Socials>
            <GitHubIcon className="icons github"/>
            <LinkedInIcon className="icons linkedin"/>
            <InstagramIcon className="icons instagram"/>
            <TwitterIcon className="icons twitter"/>
            <FacebookIcon className="icons facebook"/>
          </Socials>
        </Top>
        <Bottom>
          <Navigation>
            <li><a href="/">Home</a></li>
            <li><a href="/anime">Anime</a></li>
            <li><a href="/manga">Manga</a></li>
            <li><a href="/list">List</a></li>
          </Navigation>
          <Copyright>
            @2021 Jet Lee
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Top = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    margin-top: 40px;
`
const Socials = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  padding: 20px;
  .icons {
    font-size: 3.5rem;
  }
`

// Bottom footer
const Bottom = styled.div`
   display: flex;
   flex: 3;
   font-size: 1.3rem;
   flex-direction: column;
   align-items: center;
`

const Navigation = styled.ul`
  display: flex;
  li {
    margin: 0 10px;
  }
  a {
    text-decoration: none;
  }
`
const Copyright = styled.div`
  
`