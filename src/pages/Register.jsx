import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { months, days, getYears } from "../utility/helpers";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { HeaderTitle, Header } from "./Login";

const Register = () => {
  const [formInputs, setFormInputs] = useState({
    email: "",
    username: "",
    password: "",
    day: "",
    month: "",
    year: "",
  });

  const handleFormChange = (e) => {
    let value = e.target.value;
    setFormInputs({
      ...formInputs,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    let birthday = `${formInputs.month} ${formInputs.day}, ${formInputs.year}`;
    console.log(birthday);
    let { day, month, year, ...others } = formInputs;
    let payload = {
      ...others,
      birthday,
    };
    console.log(payload);
    const res = await publicRequest.post("/user/register", payload);
    console.log(res);
  };

  return (
    <Container>
      <Nav />
      <Header>
        <HeaderTitle>Register</HeaderTitle>
      </Header>
      <Wrapper>
        <Content>
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
                {days.map((day, i) => i !== 0 && <option key={i}>{i}</option>)}
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
  transition: opacity .167s ease-in-out;
  :hover {
    opacity: .8;
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
