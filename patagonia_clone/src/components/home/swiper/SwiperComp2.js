import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Swiper의 기본 CSS
import SwiperCore, { Pagination, Navigation } from 'swiper';
import sw1 from '../../../assets/images/second_sw1.jpg';
import sw2 from '../../../assets/images/second_sw2.jpg';
import sw3 from '../../../assets/images/second_sw3.jpg';
import sw4 from '../../../assets/images/second_sw4.jpg';
import sw5 from '../../../assets/images/second_sw5.jpg';
import sw6 from '../../../assets/images/second_sw6.jpg';
import './SwiperComp2.css';

// Swiper에 모듈 등록
SwiperCore.use([Pagination, Navigation]);

const SwiperComp2 = () => {
  const images = [sw1, sw2, sw3, sw4, sw5, sw6];
  const texts = [
    { title: "Climbing", linkText: "Explore" },
    { title: "Trail Running", linkText: "Explore" },
    { title: "Surfing", linkText: "Explore" },
    { title: "Mountain Bike", linkText: "Explore" },
    { title: "Fly Fishing", linkText: "Explore" },
    { title: "Snow", linkText: "Explore" },
  ];

  return (
    <div className='px-10'>
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
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {images.map((image, index) => (
      <SwiperSlide className='' key={index}>
      <div className="relative flex flex-col justify-between w-full h-[600px] rounded-lg overflow-hidden group">
        <img className="h-full w-full object-cover" src={image} alt={`slide-${index + 1}`} />
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-80 transition-opacity duration-400"></div>
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="flex-grow flex flex-col justify-center items-start text-white transform transition-transform duration-300 group-hover:-translate-y-16">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 px-5">{texts[index].title}</h2>
          </div>
          <a 
            href="#" 
            className="absolute bottom-4 left-4 text-xs border border-white duration-400 bg-white bg-opacity-0 text-white px-4 py-1 rounded-full font-bold transition-transform duration-300 group-hover:bg-opacity-100 group-hover:text-black hover:scale-105 hover:transition-opacity hover:duration-300"
          >
            {texts[index].linkText}
          </a>
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

export default SwiperComp2;