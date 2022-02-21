import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { apiRequest } from "../requestMethods";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(query);
    let animeResult = await apiRequest.get(`anime/?filter[text]=${query}`);
    let mangaResult = await apiRequest.get(`manga/?filter[text]=${query}`);
    let result = [...animeResult.data.data, ...mangaResult.data.data];
    console.log(result);
    navigate("/search", { state: result });
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="./images/aa-logo.jpg" onClick={() => navigate("/")}/>
        </Left>
        <Right>
          <Icons>
            <MenuIcon className="icon" />
          </Icons>
          <Profile>
            <Login>Login</Login>
            <SignUp>SignUp</SignUp>
          </Profile>
        </Right>
      </Wrapper>
      <Wrapper position={"bottom"}>
        <NavItems>
          <Anime>Anime</Anime>
          <Manga>Manga</Manga>
          <List>List</List>
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
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  background-color: ${(props) => props.position === "bottom" ? props.theme.main : "white"};
`;

//Left nav and children
const Left = styled.div``;

const Logo = styled.img`
  display: inline-block;
  width: 5.5rem;
  cursor: pointer;
`;

//right nav and children
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
`;
const Icons = styled.div`
  .icon {
    font-size: 2.6rem;
    cursor: pointer;
  }
`;

const Profile = styled.div`
  display: flex;
`;

const Login = styled.button`
  height: 3rem;
  margin-right: 1rem;
  border: none;
  padding: 4px 25px;
  color: ${props => props.theme.main};
  border-color: ${props => props.theme.main};
  border: solid 1px;
  font-size: 1.4rem;
  font-weight: 600;
`;

const SignUp = styled.button`
  height: 3rem;
  background-color: ${props => props.theme.main};
  color: white; 
  padding: 4px 25px;
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
`;


//bottom nav and children

const NavItems = styled.div`
  display: flex;
  color: white; 
  font-size: 1.3rem;
  font-weight: 600;
`
const Anime = styled.a`
  padding: 10px;
`
const Manga = styled(Anime)`
  
`
const List = styled(Anime)`
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


