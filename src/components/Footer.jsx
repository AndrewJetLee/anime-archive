import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      Footer
    </Container>
  )
}

export default Footer

const Container = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${props => props.theme.main};
    color: white;
`