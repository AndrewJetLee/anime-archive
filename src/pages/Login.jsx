import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [forgot, toggleForgot] = useState(false);
  const [formInputs, setFormInputs] = useState({
    username: "",
    password: "",
  });

  const handleFormChange = (e) => {
    let value = e.target.value;
    setFormInputs({
      ...formInputs,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post("/user/login", formInputs);
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleForgotPassword = async () => {
    toggleForgot(!forgot);
    console.log("In development");
  };


  return (
    <Container>
      <Wrapper>
        <Nav />
        <Header>
          <HeaderTitle>Login</HeaderTitle>
        </Header>
        {forgot ? (
          <Content>
            <Form >
              <ForgotFormHeader>
                <ForgotFormTitle>Forgot your password?</ForgotFormTitle>
                <ForgotFormDescription>Enter your email to retrieve your password</ForgotFormDescription>
              </ForgotFormHeader>
              <EmailWrapper>
                <Label>Email</Label>
                <Username name="username" />
              </EmailWrapper>
              <ResetPassword onSubmit={handleForgotPassword}>Reset Your Password</ResetPassword>
              <Forgot onClick={handleForgotPassword}>Back to Sign In</Forgot>
            </Form>
          </Content>
        ) : (
          <Content>
            <Form onChange={handleFormChange}>
              <UsernameWrapper>
                <Label>Username</Label>
                <Username name="username" />
              </UsernameWrapper>
              <PasswordWrapper>
                <Label>Password</Label>
                <Password name="password" type="password" />
              </PasswordWrapper>
              <LoginButton onClick={handleSubmit}>Login</LoginButton>
            </Form>
            <Forgot onClick={handleForgotPassword}>Forgot your password?</Forgot>
            <Register>Create account</Register>
          </Content>
        )}
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

export const Header = styled.header`
  background-color: ${(props) => props.theme.secondary};
  border-bottom: 1px solid ${(props) => props.theme.main};
  width: 100%;
  margin-bottom: 10px;
`;

export const HeaderTitle = styled.span`
  display: inline-block;
  font-weight: 600;
  padding: 8px;
  margin-left: 20px;
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



const Forgot = styled(Register)``;

// Forget password form

const ForgotFormHeader = styled.div`
`
const ForgotFormTitle = styled.h3``

const ForgotFormDescription = styled.span``

const ResetPassword = styled(LoginButton)`

`
const EmailWrapper = styled(UsernameWrapper)`
  
`
