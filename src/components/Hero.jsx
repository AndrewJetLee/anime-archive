import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Left>
        <h1>Welcome to Anime Archive.</h1>
        <span>
          Sign up to get full site functionality and create your own archive!{" "}
        </span>
        <Register>REGISTER</Register>
      </Left>
      <Right>
        <Image src="./images/aa-hero-image.png" alt="" />
      </Right>
    </Container>
  );
};

export default Hero;

const Container = styled.section`
  margin-top: 50px;
  width: 100%;
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Register = styled.button``;

const Image = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`