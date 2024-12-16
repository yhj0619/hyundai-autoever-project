import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import "../../../assets/css/detail.css";
import "../../../index.css";

// Improt Images
import hoody1 from "../../../assets/images/detail/detail_description/hoody1.jpg";
import hoody2 from "../../../assets/images/detail/detail_description/hoody2.jpg";
import hoody3 from "../../../assets/images/detail/detail_description/hoody3.jpg";

// Module
SwiperCore.use([Pagination, Navigation]);

// for alt
const product = {
  images: [
    {
      src: hoody1,
      alt: "Ink Black",
    },
    {
      src: hoody2,
      alt: "모델의 키는 185cm이며, 착용 사이즈는 M입니다.",
    },
    {
      src: hoody3,
      alt: "모델의 키는 185cm이며, 착용 사이즈는 M입니다.",
    },
  ],
};

function DescriptionSwiper() {
  return (
    <Swiper spaceBetween={30} slidesPerView={1} navigation={true}>
      {product.images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover object-center"
          />
          <div className="z-10 bottom-4 left-0 w-full flex items-center justify-between gap-0 pl-4 pr-4">
            <div
              className="absolute bottom-4 left-2 bg-white border border-white rounded-xl text-black text-xs font-bold leading-4 py-1 px-3"
              style={{ transformStyle: "preserve-3d" }}
            >
              {image.alt}
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* Custom Navigation Buttons */}
      <div className="swiper-button-next custom-button"></div>
      <div className="swiper-button-prev custom-button"></div>
    </Swiper>
  );
}

export default DescriptionSwiper;
