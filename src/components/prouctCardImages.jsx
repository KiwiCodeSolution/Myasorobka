/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import PropTypes from "prop-types";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Controller } from "swiper/modules";

const ProuctCardImages = ({ data }) => {
  console.log(data);
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [firstSwiper, setFirstSwiper] = useState();
  const [secondSwiper, setSecondSwiper] = useState();
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef();

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);

  return (
    <div className="w-[400px] h-[536px] flex flex-col justify-between gap-y-3 p-2 relative images-swiper">
      <Swiper
        onSwiper={(swiper) => {
          if (swiper1Ref.current !== null) {
            swiper1Ref.current = swiper;
          }
        }}
        controller={{ control: secondSwiper }}
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        className="w-full h-[70%] mySwiperOne rounded-lg"
      >
        {data.map((el, index) => (
          <SwiperSlide key={index + 1}>
            <img src={el} alt="swiper gallary" className="w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        controller={{ control: firstSwiper }}
        loop={false}
        spaceBetween={10}
        slidesPerView={3}
        watchSlidesProgress
        touchRatio={0.2}
        slideToClickedSlide={true}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs, Controller]}
        className="w-full min-h-fit mySwiper"
      >
        {data.map((el, index) => (
          <SwiperSlide key={index + 1} className="opacity-70 ">
            <img src={el} alt="swiper gallary" className="rounded-lg h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
ProuctCardImages.propTypes = {
  data: PropTypes.array.isRequired,
};
export default ProuctCardImages;
