import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  return (
    <Container>
        <Left>
            <Logo src="./images/aa-logo.jpg"/>
        </Left>
        <Center>
            <InputWrapper>
                <SearchInput placeholder="Search Anime, Manga, and more..."></SearchInput>
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
    
`
const InputWrapper = styled.div`
    
`
const SearchInput = styled.input`
    
`

//right nav and children
const Right = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-around;
    width: 30%;
    border: solid;
`
const Icons = styled.div`
    .icon {
        font-size: 2.6rem;
    }
`

const Profile = styled.div`
    display: flex;

`

const Login = styled.button`
    height: 3rem;
    margin-right: 1rem;
`

const SignUp = styled.button`
    height: 3rem;
`

