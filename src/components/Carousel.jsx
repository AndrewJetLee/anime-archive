import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import CarouselItem from "./CarouselItem";

const Carousel = ({title}) => {
  return (
    <Container>
        <Title>
          {title}
        </Title>
         <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel

const Container = styled.div`

`

const Title = styled.h2`
  
`