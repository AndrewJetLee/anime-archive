import styled from "styled-components";

const CarouselItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.attributes.posterImage.small} className="animeImage" />
      <Title>{item.attributes.canonicalTitle}</Title>
      <Background></Background>
    </Container>
  );
};

export default CarouselItem;

const Container = styled.div`
  flex: 1;
  width: 200px;
  display: flex;
  flex-direction: column;
  transition-property: opacity;
  transition-duration: 0.16s;
  position: relative;
  :hover {
    opacity: 0.5;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Title = styled.span`
  display: block;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  color: white;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, black 200%);
` 