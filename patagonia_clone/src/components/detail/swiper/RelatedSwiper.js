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
import related1 from "../../../assets/images/detail/detail_related/related1.jpg";
import related2 from "../../../assets/images/detail/detail_related/related2.jpg";
import related3 from "../../../assets/images/detail/detail_related/related3.jpg";
import related4 from "../../../assets/images/detail/detail_related/related4.jpg";
import related5 from "../../../assets/images/detail/detail_related/related5.jpg";
import related6 from "../../../assets/images/detail/detail_related/related6.jpg";
import related7 from "../../../assets/images/detail/detail_related/related7.jpg";
import related8 from "../../../assets/images/detail/detail_related/related8.jpg";

// Install modules
SwiperCore.use([Navigation, Pagination]);

const product = {
  pro1: [
    {
      name: "Daily Crewneck Sweatshirt",
      koName: "데일리 크루넥 스웨트셔츠",
      price: "159,000원",
      color: "4 colors",
      images: [{ src: related1 }],
    },
  ],
  pro2: [
    {
      name: "M's Down Sweater Hoody",
      koName: "멘즈 다운 스웨터 후디",
      price: "499,000원",
      color: "3 colors",
      images: [{ src: related2 }],
    },
  ],
  pro3: [
    {
      name: "M's Nano Puff Fitz Roy Trout Hoody",
      koName: "맨즈 나노 퍼프 피츠 로이 트라우트 후디",
      price: "429,000원",
      color: "2 colors",
      images: [{ src: related3 }],
    },
  ],
  pro4: [
    {
      name: "Fitz Roy Icon Uprisal Crew Sweatshirt",
      koName: "피츠 로이 아이콘 업라이절 크루 스웨트셔츠",
      price: "119,000원",
      color: "1 colors",
      images: [{ src: related4 }],
    },
  ],
  pro5: [
    {
      name: "P-6 Logo Uprisal Hoody",
      koName: "P-6 로고 업라이절 후디",
      price: "159,000원",
      color: "3 colors",
      images: [{ src: related5 }],
    },
  ],
  pro6: [
    {
      name: "M's Fulll-Zip Work Hoody Sweatshirt",
      koName: "맨즈 풀-집 워크 후디 스웨트셔츠",
      price: "259,000원",
      color: "1 colors",
      images: [{ src: related6 }],
    },
  ],
  pro7: [
    {
      name: "M's Work Sweatshirt",
      koName: "멘즈 워크 스웨트셔츠",
      price: "179,000원",
      color: "2 colors",
      images: [{ src: related7 }],
    },
  ],
  pro8: [
    {
      name: "M's Recycled Wool-Blend Buttoned Sweater",
      koName: "멘즈 리사이클드 울-블렌드 버튼드 스웨터",
      price: "299,000원",
      color: "2 colors",
      images: [{ src: related8 }],
    },
  ],
};

function RelatedSwiper() {
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

export default RelatedSwiper;
