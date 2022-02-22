import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { months, days, getYears } from "../utility/helpers";

const Register = () => {
  
  return (
    <Container>
      <Wrapper>
        <Nav />
        <Header>
          <Title>Register</Title>
        </Header>
        <Content>
          <Form>
            <EmailWrapper>
              <Label>Email</Label>
              <Email />
            </EmailWrapper>
            <UsernameWrapper>
              <Label>Username</Label>
              <Username />
            </UsernameWrapper>
            <PasswordWrapper>
              <Label>Password</Label>
              <Password />
            </PasswordWrapper>
            <BirthdayWrapper>
              <Label>Birthday</Label>
              <Month name="" id="">
                {months.map((month, i) => <option key={i}>{month.short}</option>)}
              </Month>
              -
              <Day>
                {days.map((day, i) => i !== 0 && <option key={i}>{i}</option>)}
              </Day>
              -
              <Year>
                {getYears(new Date().getFullYear()).map((year, i) => <option key={i}>{year}</option>)}
              </Year>
            </BirthdayWrapper>
          </Form>
          <CreateButton>Create Account</CreateButton>
          <span>Already have an account? <Login href="/login">Login</Login></span> 
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Register;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
`;

const Wrapper = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  min-height: 50vh;
  align-items: center;
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.secondary};
  border-bottom: 1px solid ${(props) => props.theme.main};
  width: 100%;
`;
const Title = styled.span`
  display: inline-block;
  font-weight: 600;
  padding: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  min-height: 50vh;
  padding: 20px;
  align-items: center;
  margin-top: 100px;
`;

const Form = styled.form`
  width: 100%;
`;

const UsernameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
const Username = styled.input`
  height: 50px;
  width: 100%;
  border: solid 1px grey;
  border-radius: 4px;
  font-size: 2rem;
`;

const EmailWrapper = styled(UsernameWrapper)``;
const Email = styled(Username)``;

const PasswordWrapper = styled(UsernameWrapper)`
  margin-bottom: 30px;
`;
const Password = styled(Username)``;

const BirthdayWrapper = styled.div`
  margin-bottom: 20px;

`;
const Month = styled.select`
  border-color: ${props => props.theme.seconday};
  height: 45px;
  width: 70px;
  margin-right: 5px;
  text-align: center;
`;
const Day = styled(Month)`
  width: 50px;
  margin-left: 5px;
`;
const Year = styled(Month)`
   margin-left: 5px;
`;

const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 5px;
  display: block;
`;

const CreateButton = styled.button`
  height: 50px;
  width: 100%;
  border: none;
  background-color: ${(props) => props.theme.main};
  color: white;
  font-weight: 600;
  border-radius: 4px;
  margin-bottom: 25px;
`;

const Login = styled.a`
  height: 45px;
  border: none;
  color: ${(props) => props.theme.main};
`;
