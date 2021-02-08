import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

import styled from "styled-components";
import { useState } from "react";

const AmbassadorSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  SwiperCore.use([EffectCoverflow]);

  const getOpacity = (currentIndex, index) => {
    const MAX = 100;
    let difference = currentIndex - index;
    if (difference < 0) difference *= -1;
    return MAX - difference * 20;
  };

  return (
    <Swiper
      effect="coverflow"
      spaceBetween={50}
      slidesPerView={4}
      initialSlide={2}
      centeredSlides
      coverflowEffect={{
        depth: 150,
        modifier: 1,
        rotate: 0,
        slideShadows: false,
      }}
      slideToClickedSlide
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      <SwiperSlide>
        <Slide opacity={getOpacity(activeIndex, 0)}>Slide 1</Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide opacity={getOpacity(activeIndex, 1)}>Slide 2</Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide opacity={getOpacity(activeIndex, 2)}>Slide 3</Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide opacity={getOpacity(activeIndex, 3)}>Slide 4</Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide opacity={getOpacity(activeIndex, 4)}>Slide 5</Slide>
      </SwiperSlide>
    </Swiper>
  );
};

const Slide = styled.div`
  text-align: center;
  background-color: lime;
  padding: 3rem;
  opacity: ${({ opacity }) => `${opacity}%`};
  transition: all 0.2s ease;
`;

export default AmbassadorSwiper;
