import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { jikanRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { footerAnime, footerManga, footerCharacters } from "../utility/helpers";
import { useState } from "react";
import Alert from "../components/Alert";

const Footer = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage?.getItem("user"));
  const [alert, toggleAlert] = useState(false);

  const handleClick = async (type, id) => {
    const response = await jikanRequest.get(`/${type}/${id}`);
    navigate(`/${type}/${id}`, { state: response.data.data });
  };

  return (
    <Container>
      <LinksWrapper>
        <Links>
          <TopAnime>
            <LinkTitle>Top Anime</LinkTitle>
            <LinkList>
              {footerAnime.map((anime, i) => (
                <LinkListItem
                  key={i}
                  anime={anime}
                  onClick={() => handleClick("anime", anime.mal_id)}
                >
                  {i + 1}. {anime.title}
                </LinkListItem>
              ))}
            </LinkList>
          </TopAnime>
          <TopManga>
            <LinkTitle>Top Manga</LinkTitle>
            <LinkList>
              {footerManga.map((manga, i) => (
                <LinkListItem
                  key={i}
                  onClick={() => handleClick("manga", manga.mal_id)}
                >
                  {i + 1}. {manga.title}
                </LinkListItem>
              ))}
            </LinkList>
          </TopManga>
          <PopularCharacters>
            <LinkTitle>Most Popular Characters</LinkTitle>
            <LinkList>
              {footerCharacters.map((character, i) => (
                <LinkListItem
                  key={i}
                  onClick={() => handleClick("characters", character.mal_id)}
                >
                  {i + 1}. {character.name}
                </LinkListItem>
              ))}
            </LinkList>
          </PopularCharacters>
        </Links>
      </LinksWrapper>
      <Content>
        <Top>
          <Socials>
            <IconLink href="https://github.com/AndrewJetLee">
              <GitHubIcon className="icons github" />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/andrewjetlee/">
              <LinkedInIcon className="icons linkedin" />
            </IconLink>
            <IconLink>
              <InstagramIcon className="icons instagram" />
            </IconLink>
            <IconLink>
              <TwitterIcon className="icons twitter" />
            </IconLink>
            <IconLink>
              {" "}
              <FacebookIcon className="icons facebook" />
            </IconLink>
          </Socials>
        </Top>
        <Bottom>
          <Navigation>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/browse/top/anime">Anime</a>
            </li>
            <li>
              <a href="/browse/top/manga">Manga</a>
            </li>
            <li>
              <span
                onClick={() => {
                  if (user) {
                    navigate(`/animelist/${user.username}`)
                  } else {
                    toggleAlert(true);
                    setTimeout(() => {
                      toggleAlert(false);
                    }, 1000);
                  }
                }}
              >
                List
              </span>
            </li>
          </Navigation>
          <ProjectsWrapper>
            <span>Personal projects:</span>
            <Projects>
              <Project href="https://github.com/AndrewJetLee/e-commerce-app-v2-api">
                E-commerce
              </Project>
              <Project href="https://github.com/blue-ocean-bubbles/syv">
                Secure Your Vote
              </Project>
            </Projects>
          </ProjectsWrapper>
          <Copyright>@2021 Jet Lee</Copyright>
        </Bottom>
      </Content>
      <Alert
        alertStatus={alert}
        message="Please log in to access your list!"
        type="error"
      />
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme.main};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const LinksWrapper = styled.section`
  background-color: ${(props) => props.theme.secondary};
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  color: black;
`;

const Links = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const TopAnime = styled.div`
  flex: 1;
  padding: 20px 0;
  margin-right: 10px;
`;
const TopManga = styled(TopAnime)``;

const PopularCharacters = styled(TopAnime)`
  margin-right: 0;
`;

const LinkTitle = styled.div`
  font-size: 1.5rem;
  border-bottom: 1px lightgray solid;
  padding-bottom: 10px;
`;

const LinkList = styled.ul`
  font-size: 1.4rem;
`;

const LinkListItem = styled.li`
  color: ${(props) => props.theme.main};
  margin-bottom: 15px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const Content = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2;
`;

const Top = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 30px;
`;
const Socials = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  padding: 10px;
  .icons {
    font-size: 3.5rem;
  }
`;

const IconLink = styled.a``;

// Bottom footer
const Bottom = styled.div`
  display: flex;
  flex: 3;
  font-size: 1.3rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Navigation = styled.ul`
  display: flex;
  margin: 0;
  li {
    cursor: pointer;
    margin: 0 10px;
    :first-child {
      border-right: 1px solid;
      padding-right: 20px;
    }
    :hover {
      text-decoration: underline;
    }
  }
`;
const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30%;
  span {
    display: block;
    margin-bottom: 10px;
    font-size: 1.1rem;
    font-style: italic;
  }
`;
const Projects = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  margin-left: 40px;
`;

const Project = styled.a`
  padding: 8px 19px;
  border: solid 2px white;
  margin-right: 12px;
  border-radius: 4px;
  font-weight: 500;
`;

const Copyright = styled.div``;
