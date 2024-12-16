import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// Import custom CSS files
import "../../../assets/css/detail.css";
import "../../../index.css";

// Import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";

// Import Images
import hoody1 from "../../../assets/images/detail/detail_description/hoody1.jpg";

// Install modules
SwiperCore.use([Navigation, Pagination]);

const product = {
  pro1: [
    {
      name: "'73 Skyline Uprisal Hoody",
      koName: "73 스카이라인 업라이절 후디",
      price: "159,000원",
      color: "2 colors",
      images: [{ src: hoody1 }],
    },
  ],
};

function ViewedSwiper() {
  const [isInteracted, setIsInteracted] = useState(false);

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      pagination={false} // Disables the dots
      navigation={true}
      className={`mySwiper ${!isInteracted ? "pl-28" : ""}`}
      onSlideChange={() => setIsInteracted(true)}
      onTouchStart={() => setIsInteracted(true)}
    >
      {Object.keys(product).map((key) =>
        product[key].map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <img
                src={item.images[0].src}
                alt={item.name}
                style={{ width: "100%", height: "auto" }}
                className="rounded-md pb-2"
              />
              <div className="flex flex-col items-start">
                <p className="h-auto text-sm font-bold tracking-tight">
                  {item.name}
                </p>
                <p className="h-auto text-xs font-semibold text-[#666]">
                  {item.koName}
                </p>
                <p className="mt-2.5 h-auto text-sm font-bold tracking-tight">
                  {item.price}
                </p>
                <p className="text-xs font-semibold text-[#0006]">
                  {item.color}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}

export default ViewedSwiper;
