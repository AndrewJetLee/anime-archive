import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Nav = () => {
  return (
    <Container>
        <Left>
            <Logo src="./images/aa-logo.jpg"/>
        </Left>
        <Center>
            <InputWrapper>
                <SearchInput placeholder="Search Anime, Manga, and more..."></SearchInput><SearchIcon className="searchIcon"/>
            </InputWrapper>
        </Center>
        <Right>
            <Icons>
                <MenuIcon className="icon"/>
            </Icons>
            <Profile>
                <Login>
                    Login
                </Login>
                <SignUp>
                    SignUp
                </SignUp>
            </Profile>
        </Right>
    </Container>
  )
}

export default Nav

const Container = styled.nav`
    display: flex;     
    justify-content: space-between; 
`

//Left nav and children
const Left = styled.div``

const Logo = styled.img`
    display: inline-block;
    width: 5rem;
`

//center nav and children
const Center = styled.div`
    display: flex;
    align-items: center;
`
const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: solid 1px;
    border-radius: 3px;
    .searchIcon {
        font-size: 2rem;
        border-left: solid 1px;
        cursor: pointer;
    }
`
const SearchInput = styled.input`
    width: 250px;
    border: none;
`

//right nav and children
const Right = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-around;
    width: 30%;
`
const Icons = styled.div`
    .icon {
        font-size: 2.6rem;
        cursor: pointer;
    }
`

const Profile = styled.div`
    display: flex;

`

const Login = styled.button`
    height: 3rem;
    margin-right: 1rem;
    width: 8.5rem;
`

const SignUp = styled.button`
    height: 3rem;
    width: 8.5rem;
`
