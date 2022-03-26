import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import CarouselItem from "./CarouselItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";

const Carousel = ({ title, data, loading }) => {
  const navigate = useNavigate();

  const handleClickTitle = () => {
    navigate("/")
  }

  return (
    <Container>
      <Title >{title}</Title>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerGroup={7}
        slidesPerView={7}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {loading ? (
          <>
            {new Array(10).fill(" ").map((item, i) => (
              <SwiperSlide key={i}>
                <SkeletonCarouselItem>
                  <Skeleton width="100%" height="280px" />
                </SkeletonCarouselItem>
              </SwiperSlide>
            ))}
          </>
        ) : (
          data.map((item, i) => (
            <SwiperSlide key={i}>
              <CarouselItem item={item} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  margin-bottom: 20px;
  .swiper-button-prev, .swiper-button-next {
    color: ${props => props.theme.tertiary};
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: ${(props) => (props.size ? props.size : "1.7rem")};
  padding-bottom: 5px;
  background-color: ${(props) => props.theme.secondary};
  padding: ${(props) => (props.padding ? props.padding : "12px")};
  border-left: 3px solid ${(props) => props.theme.tertiary};
`;

const SkeletonCarouselItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition-property: opacity;
  transition-duration: 0.16s;
  position: relative;
  height: 290px;;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;
