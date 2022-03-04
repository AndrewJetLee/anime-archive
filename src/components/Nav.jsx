import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { apiRequest, publicRequest, jikanRequest } from "../requestMethods";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(query);
    let animeResult = await jikanRequest.get(`/anime?q=${query}`);
    let mangaResult = await jikanRequest.get(`/manga?q=${query}`);
    console.log(mangaResult);
    debugger;
    navigate("/search", {
      state: { anime: animeResult.data, manga: mangaResult.data },
    });
  };

  const handleLogout = async () => {
    console.log("clicked logout");
    try {
      const res = await publicRequest.get("/user/logout");
      console.log(res);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (type) => {
    try {
      if (type === "list") {
        const res = await publicRequest.get("/user/list");
        console.log(res);
        navigate("/list", { state: res.data.list });
      } else {
        const res = await apiRequest.get(`/${type}?page[limit]=18`);
        console.log(res);
        navigate("/browse", { state: res.data });
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
          <Icons>
            <MenuIcon className="icon" />
          </Icons>
          <Profile>
            {localStorage.getItem("user") ? (
              <Logout onClick={handleLogout}>Logout</Logout>
            ) : (
              <Login onClick={() => navigate("/login")}>Login</Login>
            )}
            {localStorage.getItem("user") ? (
              <User>
                <UserImage src="./images/placeholder-img.png" />
                <UserInfo>
                  {JSON.parse(localStorage.getItem("user")).username}
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
          <Anime onClick={() => handleClick("anime")}>Anime</Anime>
          <Manga onClick={() => handleClick("manga")}>Manga</Manga>
          <List onClick={() => handleClick("list")}>List</List>
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
  background-color: ${(props) =>
    props.position === "bottom" ? props.theme.main : "white"};
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
  height: 45px;
`;

const Slogan = styled.img`
  display: inline-block;
  height: 50px;
  margin-left: 5px;
`;

//right nav and children
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  .icon {
    font-size: 2.6rem;
    cursor: pointer;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const Login = styled.button`
  height: 2.5rem;
  margin-right: 1rem;
  border: none;
  padding: 4px 25px;
  color: ${(props) => props.theme.main};
  border-color: ${(props) => props.theme.main};
  border: solid 1px;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
`;

const Logout = styled(Login)``;

const SignUp = styled.button`
  height: 2.5rem;
  background-color: ${(props) => props.theme.main};
  color: white;
  padding: 4px 25px;
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
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
  font-size: 1.3rem;
  font-weight: 600;
  height: 34px;
  align-items: center;
`;
const Anime = styled.a`
  padding: 10px;
  cursor: pointer;
`;
const Manga = styled(Anime)``;
const List = styled(Anime)``;

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
  height: 20px;
  .searchIcon {
    font-size: 2rem;
    border-left: solid 1px;
    cursor: pointer;
    background-color: ${(props) => props.theme.secondary};
  }
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  border: none;
  box-shadow: none;
  padding: 4px;
  :focus {
    outline: none;
  }
`;
