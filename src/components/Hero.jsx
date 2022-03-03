import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Left>
        <h1>Welcome to Anime Archive.</h1>
        <span>
          Sign up to get full site functionality and create your own archive!
        </span>
        <Register href="/register">REGISTER</Register>
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
  justify-content: center;
  flex: 1;
  align-items: center;
  h1 {
    font-size: 4rem;
  }
  span {
    color: gray;
    font-size: 1.7rem;
  }

`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
 
`;

const Register = styled.a`
  width: 150px;
  margin-top: 30px;
  font-size: 1.5rem;
  padding: 8px 12px;
  background-color: ${props => props.theme.tertiary};
  color: white;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition-property: opacity;
  transition-duration: 0.167s;
  cursor: pointer;
  :hover {
    color: white;
    opacity: .8;
  }
`;


const Image = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`