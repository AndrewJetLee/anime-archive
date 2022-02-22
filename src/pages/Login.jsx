import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    username: "",
    password: "",
  })

  const handleFormChange = (e) => {
    let value = e.target.value; 
    setFormInputs({
      ...formInputs,
      [e.target.name]: value
    })
  }

  const handleSubmit = async (e) => {
    const res = await publicRequest.post("/user/login", formInputs);
    console.log(res);
    document.cookie = JSON.stringify(res.data);
  }

  const test = async (e) => {
    const res = await publicRequest.get("/user/list");
    console.log(res);
  }

  return (
    <Container>
      <Wrapper>
        <Nav />
        <Header>
          <Title>Login</Title>
        </Header>
        <Content>
          <Form onChange={handleFormChange}>
            <UsernameWrapper>
              <Label>Username</Label>
              <Username name="username"/>
            </UsernameWrapper>
            <PasswordWrapper>
              <Label>Password</Label>
              <Password name="password"/>
            </PasswordWrapper>
          </Form>
          <LoginButton onClick={handleSubmit}>Login</LoginButton>
          <Forgot onClick={test}>Forgot your password?</Forgot>
          <Register>Create account</Register>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Login;

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
  font-size: 2.0rem;
`;
const PasswordWrapper = styled(UsernameWrapper)`
  margin-bottom: 30px;
`;
const Password = styled(Username)``;

const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const LoginButton = styled.button`
  height: 55px;
  width: 100%;
  border: none;
  background-color: ${(props) => props.theme.main};
  color: white;
  font-weight: 600;
  border-radius: 4px;
  margin-bottom: 25px;
  cursor: pointer;
`;
const Register = styled.a`
  height: 45px;
  border: none;
  color: ${(props) => props.theme.main};
`;

const Forgot = styled(Register)`
 
`