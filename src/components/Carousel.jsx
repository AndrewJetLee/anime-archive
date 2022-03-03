import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import CarouselItem from "./CarouselItem";

const Carousel = ({title, data}) => {
  return (
    <Container>
        <Title>
          {title}
        </Title>
         <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={8}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item, i) => 
          <SwiperSlide key={i}>
            <CarouselItem item={item} />
          </SwiperSlide>
        )}
      </Swiper>
    </Container>
  )
}

export default Carousel

const Container = styled.div`
  margin-bottom: 20px;
`

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1.5rem;
  padding-bottom: 5px;
  background-color: ${props => props.theme.secondary};
  padding: 12px;
  border-left: 3px solid ${props => props.theme.tertiary};
`