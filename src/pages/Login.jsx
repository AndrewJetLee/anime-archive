import styled from "styled-components";
import Nav from "../components/Nav";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  min-height: 100vh;
`;
