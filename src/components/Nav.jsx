import styled, { keyframes, css } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { publicRequest, jikanRequest } from "../requestMethods";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import NavItem from "./NavItem";

const Nav = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [error, toggleError] = useState(false);

  const user = JSON.parse(sessionStorage?.getItem("user"));

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(query);
    let animeResult = await jikanRequest.get(`/anime?q=${query}&limit=24`);
    let mangaResult = await jikanRequest.get(`/manga?q=${query}&limit=24`);
    let characterResult = await jikanRequest.get(
      `/characters?q=${query}&limit=24`
    );
    navigate(`/search?q=${query}`, {
      state: {
        anime: animeResult.data,
        manga: mangaResult.data,
        characters: characterResult.data,
        type: "all",
      },
    });
  };

  const handleLogout = async () => {
    try {
      await publicRequest.get("/user/logout");
      sessionStorage.clear();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleError = async () => {
    toggleError(true);
    setTimeout(() => {
      toggleError(false);
    }, 3000);
  };

  const handleClick = async (type) => {
    try {
      if (type === "list") {
        if (user) {
          navigate(`/animelist/${user.username}`);
        } else {
          handleError();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left onClick={() => navigate("/")}>
          <Logo src="/images/aa-logo.jpg" />
          <Slogan src="/images/aa-slogan.jpg" />
        </Left>
        <Right>
          <Profile>
            {sessionStorage.getItem("user") ? (
              <Logout onClick={handleLogout}>Logout</Logout>
            ) : (
              <Login onClick={() => navigate("/login")}>Login</Login>
            )}
            {sessionStorage.getItem("user") ? (
              <User>
                <UserImage src="/images/placeholder-img.png" />
                <UserInfo>
                  {JSON.parse(sessionStorage.getItem("user")).username}
                </UserInfo>
              </User>
            ) : (
              <SignUp onClick={() => navigate("/register")}>Sign Up</SignUp>
            )}
          </Profile>
        </Right>
      </Wrapper>
      <Wrapper position={"bottom"}>
        <NavItems>
          <NavItem title="Anime"></NavItem>
          <NavItem title="Manga"></NavItem>
          <ListLink onClick={() => handleClick("list")}>List</ListLink>
        </NavItems>
        <BottomRight>
          <InputWrapper onSubmit={handleSearch}>
            <SearchInput
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              placeholder="Search Anime, Manga, and more..."
            ></SearchInput>
            <SearchIcon className="searchIcon" onClick={handleSearch} />
          </InputWrapper>
        </BottomRight>
      </Wrapper>
      <Error error={error}>
        <ErrorOutlinedIcon className="errorIcon" /> Please log in to create and
        edit your list
      </Error>
    </Container>
  );
};

export default Nav;

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 40px;
  padding-left: 20px;
  align-items: center;
  background-color: ${(props) =>
    props.position === "bottom" ? props.theme.main : "white"};
  height: ${(props) =>
    props.position === "bottom" && "35px"};
`;

//Left nav and children
const Left = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  display: inline-block;
  width: 4.5rem;
  height: 50px;
`;

const Slogan = styled.img`
  display: inline-block;
  height: 50px;
`;

//right nav and children
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const Login = styled.button`
  height: 3rem;
  margin-right: 1rem;
  border: none;
  padding: 4px 28px;
  color: ${(props) => props.theme.main};
  border-color: ${(props) => props.theme.main};
  border: solid 1px;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.167s ease-in-out;
  :hover{
    background-color: #e4e4e4;
  }
`;

const Logout = styled(Login)``;

const SignUp = styled.button`
  height: 3rem;
  background-color: ${(props) => props.theme.main};
  color: white;
  padding: 4px 25px;
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
`;

//WIP
const User = styled.div`
  display: flex;
  align-items: center;
`;
const UserImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 8px;
`;
const UserInfo = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`;

//bottom nav and children
const NavItems = styled.div`
  display: flex;
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  height: 100%;
  align-items: center;
`;

const ListLink = styled.a`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.main};
  position: relative;
  text-transform: uppercase;
  height: 100%;
  display: flex;
  align-items: center;
  :hover {
    background-color: white;
    color: black;
  }
`;

const BottomRight = styled.div`
  display: flex;
  align-items: center;
`;
const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 4px;
  width: 300px;
  height: 25px;
  .searchIcon {
    padding: 4px;
    font-size: 3rem;
    border-left: solid 1px;
    cursor: pointer;
    background-color: ${(props) => props.theme.secondary};
  }
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  border: none;
  box-shadow: none;
  padding: 4px;
  :focus {
    outline: none;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Error = styled.div`
  pointer-events: none;
  opacity: 0;
  ${(props) =>
    props.error
      ? css`
          opacity: 1;
          animation: ${fadeIn} 0.3s ease-in;
        `
      : css`
          opacity: 0;
          transition: opacity 0.3s ease-out;
        `};
  display: flex;
  align-items: center;
  position: fixed;
  right: 24px;
  top: 100px;
  background-color: ${(props) => props.theme.tertiary};
  color: white;
  padding: 4px 0;
  padding-right: 16px;
  padding-left: 12px;
  .errorIcon {
    font-size: 30px;
    margin-right: 4px;
  }
`;
