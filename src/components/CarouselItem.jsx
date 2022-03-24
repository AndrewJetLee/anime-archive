import styled from "styled-components";
import { jikanRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const CarouselItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    let type =
      item.demographics.length > 0
        ? item.demographics[0].type
        : item.genres[0].type;
    const response = await jikanRequest.get(`/${type}/${item.mal_id}`);
    navigate(`/${type}/${item.mal_id}`, { state: response.data.data });
  };

  return (
    <Container onClick={handleClick}>
      <Image src={item.images.jpg.image_url} className="animeImage" />
      <Title>{item.name ? item.name : item.title}</Title>
      <Background></Background>
    </Container>
  );
};

export default CarouselItem;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition-property: opacity;
  transition-duration: 0.16s;
  position: relative;
  height: 290px;
  cursor: pointer;
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
  font-size: 1.4rem;
  text-align: center;
  padding: 5px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, black 250%);
`;
