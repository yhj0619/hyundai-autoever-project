import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Swiper의 기본 CSS
import SwiperCore, { Pagination, Navigation } from "swiper";
import Swiper1 from "../../../assets/images/Swiper1.jpg";
import Swiper2 from "../../../assets/images/Swiper2.png";
import Swiper3 from "../../../assets/images/Swiper3.png";
import Swiper4 from "../../../assets/images/Swiper4.png";
import Swiper5 from "../../../assets/images/Swiper5.png";
import Swiper6 from "../../../assets/images/Swiper6.png";
import Swiper7 from "../../../assets/images/Swiper7.png";
import Swiperlast from "../../../assets/images/Swiperlast.png";
import "./SwiperComp.css";

// Swiper에 모듈 등록
SwiperCore.use([Pagination, Navigation]);

const SwiperComp = () => {
  const images = [
    Swiper1,
    Swiper2,
    Swiper3,
    Swiper4,
    Swiper5,
    Swiper6,
    Swiper7,
    Swiperlast,
  ];
  const texts = [
    {
      title: "파타고니아 필름 | 쓰레기 시대(The Shitthropocene) 풀버전",
      linkText: "Watch",
      time: "46:13",
      subtitle: "싸구려 잡동사니의 시대로 여러분을 초대합니다.",
    },
    {
      title: "미세 섬유 문제 해결을 위한 파타고니아와 삼성전자의 여정",
      linkText: "5m Read",
      time: "",
      subtitle:
        "지난 3년동안 파타고니아는 가정용 세탁기의 미세 섬유 저감 기술 개발을 위해 삼성전자와 매우 가깝게 그리고 생산적으로 함께 일해 왔습니다.",
    },
    {
      title: "Corazon Salado (Salted Heart)",
      linkText: "Watch",
      time: "27:57",
      subtitle:
        "라몬 나바로는 Kaweskar 원주민 커뮤니티가 칠레 파타고니아에서 조상 대대로 살아온 바다를 지키기 위한 여정에 함께 합니다.",
    },
    {
      title: "The Custodians",
      linkText: "Watch",
      time: "",
      subtitle:
        "물고기들을 보호하기 위해 몇몇의 스코틀랜드 어부들이 해초 숲을 직접 가꿔 나갑니다.",
    },
    {
      title: "Jalpi",
      linkText: "Watch",
      time: "7:02",
      subtitle:
        "통영 바다의 잘피숲을 살리는 것은 지역 주민들을 살리는 일이기도 합니다.",
    },
    {
      title: "Hot Pink Dolphins",
      linkText: "Watch",
      time: "5:37",
      subtitle: "돌고래에 대한 위협은 곧 인류에 대한 위협입니다.",
    },
    {
      title: "What's Next?",
      linkText: "Watch",
      time: "2:00",
      subtitle: "우리의 다음은, 지구를 되살리는 것 입니다.",
    },
    { title: "", linkText: "Allwatch", time: "", subtitle: "" },
  ];

  return (
    <div className='px-10'>
      <div className='flex pb-5 px-5 items-end'>
        <h2 className='text-3xl px-2 font-extrabold'>
        최신글
          </h2>
          <a href='#' className='font-semibold'>모두보기</a>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex flex-col justify-between w-full h-[600px] rounded-lg overflow-hidden group">
              <img
                className="h-full w-full object-cover"
                src={image}
                alt={`slide-${index + 1}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-80 transition-opacity duration-400"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex-grow flex flex-col justify-center items-start text-white transform transition-transform duration-300 group-hover:-translate-y-52">
                  <h2 className="text-xs md:text-sm lg:text-lg font-bold mb-3">
                    {texts[index].title}
                  </h2>
                  <p className="text-xs mb-2 opacity-0 transform translate-y-4 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {texts[index].subtitle}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-xs border border-white bg-white bg-opacity-0 text-white px-4 py-1 rounded-full font-bold transition-transform duration-300 group-hover:bg-opacity-100 group-hover:text-black hover:scale-105"
                  >
                    {texts[index].linkText}
                  </a>
                  <span className="text-xs text-white ml-2">
                    {texts[index].time}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-next custom-button"></div>
        <div className="swiper-button-prev custom-button"></div>
      </Swiper>
    </div>
  );
};

export default SwiperComp;
