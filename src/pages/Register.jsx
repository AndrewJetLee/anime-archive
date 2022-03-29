import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { months, days, getYears } from "../utility/helpers";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { HeaderTitle, Header } from "./Login";
import { CircularProgress } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    email: "",
    username: "",
    password: "",
    day: "1",
    month: "Jan",
    year: "2022",
  });
  const [success, toggleSuccess] = useState(false);
  const [loading, toggleLoading] = useState(false);

  const handleFormChange = (e) => {
    let value = e.target.value;
    setFormInputs({
      ...formInputs,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    if (
      validateEmail(formInputs.email) &&
      validatePassword(formInputs.password) && validateUsername(formInputs.username)
    ) {
      try {
        toggleLoading(true);
        let birthday = `${formInputs.month} ${formInputs.day}, ${formInputs.year}`;
        console.log(birthday);
        let { day, month, year, ...others } = formInputs;
        let payload = {
          ...others,
          birthday,
        };
        console.log(payload);
        const res = await publicRequest.post("/user/register", payload);
        toggleSuccess(true);
        toggleLoading(false);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Invalid inputs");
    }
  };

  const validateEmail = (email) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailFormat)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  };

  const validatePassword = (password) => {
    //Must be between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
    const passwordFormat =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (password.match(passwordFormat)) {
      console.log("Password works");
      return true;
    } else {
      alert("Invalid password");
      return false;
    }
  };

  const validateUsername = (username) => {
    // Must contain only alphanumeric, underscore, dot and between 8 - 20 characters
    const usernameFormat = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    if (username.match(usernameFormat)) {
      return true; 
    } else {
      alert("Invalid username");
      return false; 
    }
  }

  return (
    <Container>
      <Nav />
      <Header>
        <HeaderTitle>Register</HeaderTitle>
      </Header>
      <Wrapper>
        {loading ? (
          <CircularProgress />
        ) : (
          <Content>
            {success && (
              <Success>
                <SuccessContent>
                  <SuccessHeader>
                    <CheckCircleOutlineIcon className="checkIcon" />
                  </SuccessHeader>
                  <SuccessText>
                    <h1>SUCCESS!</h1>
                    <p>You have successfully created an account!</p>
                  </SuccessText>
                  <LoginButton onClick={() => navigate("/login")}>
                    Login
                  </LoginButton>
                </SuccessContent>
              </Success>
            )}
            <Form onChange={handleFormChange}>
              <EmailWrapper>
                <Label>Email</Label>
                <Email name="email" />
              </EmailWrapper>
              <UsernameWrapper>
                <Label>Username</Label>
                <Username name="username" />
              </UsernameWrapper>
              <PasswordWrapper>
                <Label>Password</Label>
                <Password type="password" name="password" />
              </PasswordWrapper>
              <BirthdayWrapper>
                <Label>Birthday</Label>
                <Month name="month" id="">
                  {months.map((month, i) => (
                    <option key={i}>{month.short}</option>
                  ))}
                </Month>
                -
                <Day name="day">
                  {days.map(
                    (day, i) => i !== 0 && <option key={i}>{i}</option>
                  )}
                </Day>
                -
                <Year name="year">
                  {getYears(new Date().getFullYear()).map((year, i) => (
                    <option key={i}>{year}</option>
                  ))}
                </Year>
              </BirthdayWrapper>
            </Form>
            <CreateButton onClick={handleSubmit}>Create Account</CreateButton>
            <span>
              Already have an account? <Login href="/login">Login</Login>
            </span>
          </Content>
        )}
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
  border-color: ${(props) => props.theme.seconday};
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
  font-weight: 600;
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
  cursor: pointer;
  transition: opacity 0.167s ease-in-out;
  :hover {
    opacity: 0.8;
  }
`;

const Login = styled.a`
  height: 45px;
  border: none;
  color: ${(props) => props.theme.main};
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: ${(props) => props.theme.main};
  }
`;

const Success = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  z-index: 10000;
  display: flex;
  justify-content: center;
`;

const SuccessHeader = styled.header`
  width: 100%;
  background-color: green;
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  .checkIcon {
    font-size: 7.5rem;
    color: white;
  }
`;

const SuccessContent = styled.div`
  margin-top: 250px;
  width: 40%;
  border-radius: 4px;
  overflow: hidden;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const SuccessText = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;
`;

const LoginButton = styled(CreateButton)`
  width: 80%;
  background-color: green;
`;
