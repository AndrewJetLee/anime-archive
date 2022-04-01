import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import {
  Failure,
  FailureContent,
  FailureHeader,
  FailureText,
} from "./Register";
import Alert from "../components/Alert";
import ErrorIcon from "@mui/icons-material/Error";

const Login = () => {
  const navigate = useNavigate();
  const [forgot, toggleForgot] = useState(false);
  const [alert, toggleAlert] = useState(false);
  const [failure, toggleFailure] = useState(false);
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
      sessionStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      toggleFailure(true);
      console.log(err);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    toggleAlert(true);
    console.log("In development");
  };

  return (
    <Container>
      <Nav />
      <Header>
        <HeaderTitle>Login</HeaderTitle>
      </Header>
      <Wrapper>
        {forgot ? (
          <Content>
            <Form>
              <ForgotFormHeader>
                <ForgotFormTitle>Forgot your password?</ForgotFormTitle>
                <ForgotFormDescription>
                  Please enter your email to retrieve your password
                </ForgotFormDescription>
              </ForgotFormHeader>
              <EmailWrapper>
                <EmailInput placeholder="JangoDarkBlade@gmail.com" />
              </EmailWrapper>
              <ResetPassword onClick={(e) => handleForgotPassword(e)}>
                Reset Your Password
              </ResetPassword>
              <Forgot onClick={() => toggleForgot(!forgot)}>
                Back to Sign In
              </Forgot>
            </Form>
          </Content>
        ) : (
          <Content>
            {failure && (
              <Failure>
                <FailureContent>
                  <FailureHeader>
                    <ErrorIcon className="errorIcon" />
                  </FailureHeader>
                  <FailureText>
                    <h1>Error logging in!</h1>
                    <p>
                      Please check your username and password and try again!
                    </p>
                  </FailureText>
                  <TryAgainButton
                    onClick={() => toggleFailure(false)}
                    failed={true}
                  >
                    Try Again
                  </TryAgainButton>
                </FailureContent>
              </Failure>
            )}
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
            <Forgot onClick={() => toggleForgot(!forgot)}>
              Forgot your password?
            </Forgot>
            <Register href="/register">Create account</Register>
          </Content>
        )}
      </Wrapper>
      <Alert alertStatus={alert} message="In Development" type="error" />
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
  text-transform: uppercase;
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
  padding: 8px;
`;
const PasswordWrapper = styled(UsernameWrapper)`
  margin-bottom: 30px;
`;

const Password = styled(Username)``;

const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 5px;
  font-weight: 600;
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
  transition: opacity 0.167s ease-in-out;
  :hover {
    opacity: 0.8;
  }
`;

const TryAgainButton = styled(LoginButton)`
  width: 80%;
  background-color: ${(props) => (props.failed ? props.theme.main : "green")};
`

const Register = styled.a`
  height: 45px;
  border: none;
  color: ${(props) => props.theme.main};
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: ${(props) => props.theme.main};
  }
`;

const Forgot = styled(Register)``;

// Forget password form

const ForgotFormHeader = styled.div``;
const ForgotFormTitle = styled.h3``;

const ForgotFormDescription = styled.div`
  margin-bottom: 5px;
`;

const ResetPassword = styled(LoginButton)``;
const EmailInput = styled(Username)``;
const EmailWrapper = styled(UsernameWrapper)``;
