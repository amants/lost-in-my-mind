import { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Navigation } from "swiper";

import leftArrow from "../assets/images/arrow_left.png";
import rightArrow from "../assets/images/arrow_right.png";
import swiperBG from "../assets/images/bg_swiper.png";
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import { useAmbassadorData } from "../hooks/useAmbassadorData";
import UnlocksWrapper from "./UnlocksWrapper";
import { func } from "prop-types";

const AmbassadorSwiper = ({ setAmbassadorPopup }) => {
  const { status, data } = useAmbassadorData();
  const unlockedData = JSON.parse(localStorage.getItem("unlocked-ambassadors"));
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  SwiperCore.use([EffectCoverflow, Navigation]);

  useEffect(() => {
    if (status === "FETCHED") setLoading(false);
  }, [status]);

  const getOpacity = (currentIndex, index) => {
    const MAX = 100;
    let difference = currentIndex - index;
    if (difference < 0) difference *= -1;
    return MAX - difference * 20;
  };

  if (loading) return "Loading";

  return (
    <Swiper
      effect="coverflow"
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: ".next_slider",
        prevEl: ".prev_slider",
      }}
      initialSlide={0}
      centeredSlides
      breakpoints={{
        600: {
          initialSlide: 1,
          slidesPerView: 2,
        },
        1100: {
          initialSlide: 2,
          slidesPerView: 3,
        },
        1400: {
          initialSlide: 2,
          slidesPerView: 3,
        },
      }}
      coverflowEffect={{
        depth: 200,
        modifier: 2,
        rotate: 0,
        slideShadows: false,
      }}
      slideToClickedSlide
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {Object.values(data).map((ambassador, i) => (
        <SwiperSlide key={i}>
          <Slide
            index={i}
            active={activeIndex === i}
            opacity={getOpacity(activeIndex, i)}
          >
            <div className="slide__image_container">
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
            </div>
            <UnlocksWrapper
              setAmbassadorPopup={setAmbassadorPopup}
              unlockedData={unlockedData}
              active={activeIndex === i}
              ambassador={ambassador}
            />
          </Slide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// const ShowUnlocksButton = styled.a`
//   display: inline-flex;
//   color: #2e2457;
//   border: 2px solid #2e2457;
//   height: 3rem;
//   width: 50%;
//   max-width: 40rem;
//   justify-content: center;
//   align-items: center;
//   margin-top: 2rem;
// `;

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
  background-image: url(${swiperBG});
`;

const AmbassadorImage = styled.img`
  max-height: 250px;
  object-fit: contain;
  position: relative;
  margin: auto;
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
  padding: 3rem 0;
  max-width: 800px;
  opacity: ${({ opacity }) => `${opacity}%`};
  transition: all 0.2s ease;

  @media screen and (min-width: 1100px) {
    padding-bottom: 8rem;
  }

  & > .slide__image_container {
    position: relative;
  }

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
    visibility: ${({ active }) => (active ? "visible" : "hidden")};
    ${({ active }) => active && "pointer-events: none;"};
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
    background-image: url(${leftArrow});
    left: 1rem;
  }
  & .next_slider {
    opacity: ${({ index, active }) => (index !== 4 && active ? 1 : 0)};
    background-image: url(${rightArrow});
    right: 1rem;
  }
`;

AmbassadorSwiper.propTypes = {
  setAmbassadorPopup: func.isRequired,
};

export default AmbassadorSwiper;
