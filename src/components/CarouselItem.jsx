import styled from "styled-components";

const CarouselItem = ({item}) => {
  return (
    <Container>
      <Image src={item.attributes.posterImage.small}></Image>
      <Title>Attack on Titan</Title>
    </Container>
  )
}

export default CarouselItem

const Container = styled.a`
    flex: 1; 
    width: 200px;
    border: solid;
    display: flex;
    height: 250px;
    flex-direction: column;
    transition-property: opacity;
    transition-duration: .16s;
    :hover {
      opacity: .5;
    }
`

const Image = styled.img`
    object-fit: fill;
    width: 100%;
    height: 100%;
    position: relative;
`

const Title = styled.span`
  display: block;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  color: white;
`