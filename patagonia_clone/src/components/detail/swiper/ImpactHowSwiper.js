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
import impact1 from "../../../assets/images/detail/impact/impact1.png";
import impact2 from "../../../assets/images/detail/impact/impact2.png";
import impact3 from "../../../assets/images/detail/impact/impact3.jpeg";

// Module
SwiperCore.use([Pagination, Navigation]);

// for alt
const product = {
  images: [
    {
      src: impact1,
      alt: "Ink Black",
    },
    {
      src: impact2,
      alt: "모델의 키는 185cm이며, 착용 사이즈는 M입니다.",
    },
    {
      src: impact3,
      alt: "모델의 키는 185cm이며, 착용 사이즈는 M입니다.",
    },
  ],
};

function ImpactHowSwiper() {
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
    </Swiper>
  );
}

export default ImpactHowSwiper;
