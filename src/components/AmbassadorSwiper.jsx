import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

import ambassadors from "../constants/ambassadorData.json";

const AmbassadorSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  SwiperCore.use([EffectCoverflow, Navigation]);

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
      slidesPerView={1}
      navigation={{
        nextEl: ".next_slider",
        prevEl: ".prev_slider",
      }}
      initialSlide={2}
      centeredSlides
      breakpoints={{
        600: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      }}
      coverflowEffect={{
        depth: 150,
        modifier: 1,
        rotate: 0,
        slideShadows: false,
      }}
      slideToClickedSlide
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {Object.values(ambassadors).map((ambassador, i) => (
        <SwiperSlide key={i}>
          <Slide
            index={i}
            active={activeIndex === i}
            opacity={getOpacity(activeIndex, i)}
          >
            <button className="prev_slider" />
            <button className="next_slider" />
            <ImageContainer>
              <AmbassadorImage
                src={`./assets/images/${ambassador.thumbnail}`}
              />
              <AmbassadorImageBackGround className="ambassador__image_bg" />
            </ImageContainer>
            <AmbassadorNameImage
              src={`./assets/images/${ambassador.nameImage}`}
            />
            <AmbassadorName className="ambassador_fullname">
              {ambassador.fullName}
            </AmbassadorName>
          </Slide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const AmbassadorName = styled.p`
  display: none;
  font-size: 24px;
  line-height: 140%;
  color: #448774;
  font-weight: 700;
  text-align: center;
  @media screen and (min-width: 1100px) {
    display: block;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const AmbassadorImageBackGround = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(./assets/images/bg_swiper.png);
`;

const AmbassadorImage = styled.img`
  max-height: 250px;
  object-fit: contain;
  position: relative;
  z-index: 1;
`;
const AmbassadorNameImage = styled.img`
  margin: auto;
  display: block;
  @media screen and (min-width: 1100px) {
    display: none;
  }
`;

const Slide = styled.div`
  text-align: center;
  position: relative;
  padding: 3rem;
  max-width: 800px;
  opacity: ${({ opacity }) => `${opacity}%`};
  transition: all 0.2s ease;

  & .ambassador__image_bg {
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: opacity 0.2s ease;
  }

  & .ambassador_fullname {
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: opacity 0.2s ease;
  }

  & .prev_slider,
  & .next_slider {
    background: none;
    outline: none;
    border: none;
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: opacity 0.2s ease;
    content: "";
    position: absolute;
    z-index: 4;
    top: 0;
    bottom: 0;
    width: 3rem;
    padding-right: 3rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  & .prev_slider {
    opacity: ${({ index, active }) => (index !== 0 && active ? 1 : 0)};
    background-image: url("./assets/images/arrow_left.png");
    left: 1rem;
  }
  & .next_slider {
    opacity: ${({ index, active }) => (index !== 4 && active ? 1 : 0)};
    background-image: url("./assets/images/arrow_right.png");
    right: 1rem;
  }
`;

export default AmbassadorSwiper;
