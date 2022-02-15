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
        slidesPerView={6}
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

`

const Title = styled.h2`
  
`