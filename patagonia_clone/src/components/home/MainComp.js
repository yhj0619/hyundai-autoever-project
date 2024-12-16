import React from "react";
import banner from "../../assets/images/main_banner.jpg"
import Mainbanner from "../../assets/images/mainbanner.jpg"
import card1 from "../../assets/images/card1.jpg"
import card2 from "../../assets/images/card2.jpg"
import card3 from "../../assets/images/card3.jpg"
import card4 from "../../assets/images/card4.jpg"
import midbanner from "../../assets/images/middle_banner.jpg"
import final_banner from "../../assets/images/final_banner.jpg"
import SwiperComp from "./swiper/SwiperComp"
import SwiperComp2 from "./swiper/SwiperComp2"
import Mainbanner_sub from "../../assets/images/mainbanner_sub.svg"



function MainComp() {
  return <>
    <div className="mb-7"> {/* 메인 배너 사진 */}
      <div className="relative">
        <img src={Mainbanner} className="w-full h-[700px]" alt="메인 배너" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-2 rounded-md pb-5">
          <img src={Mainbanner_sub} className="w-[350px] h-[200px] mb-9" alt="메인 배너" />

          <div className="flex gap-4">
            <a
              href="#"
              className="bg-white text-black w-32 h-10 sm:w-36 sm:h-12 md:w-40 md:h-12 flex items-center justify-center rounded-3xl font-bold hover:scale-110 transition-transform duration-300"
            >
              더보기
            </a>
            <a
              href="#"
              className="bg-white text-black w-32 h-10 sm:w-36 sm:h-12 md:w-40 md:h-12 flex items-center justify-center rounded-3xl font-extrabold hover:scale-110 transition-transform duration-300"
            >
              ▶ Watch
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-7 mx-4"> {/* 카드 */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center w-full mx-auto">
        <li className="relative w-full sm:w-80 md:w-96 lg:w-[32rem] h-[32rem] group transform transition-transform duration-500 hover:scale-105 rounded-xl overflow-hidden">
          <img src={card1} className="w-full h-full object-cover transition-transform duration-500" alt="card 1" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-opacity duration-300">
            <p className="text-white text-2xl md:text-5xl font-bold transform transition-transform duration-500 group-hover:translate-y-[-30px]">
              Men's
            </p>
            <a href="#" className="bg-white text-black w-32 md:w-40 h-10 md:h-12 flex items-center justify-center rounded-3xl font-bold opacity-0 transform translate-y-[40px] transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
              Shop
            </a>
          </div>
        </li>
        <li className="relative w-full sm:w-80 md:w-96 lg:w-[32rem] h-[32rem] group transform transition-transform duration-500 hover:scale-105 rounded-xl overflow-hidden">
          <img src={card2} className="w-full h-full object-cover transition-transform duration-500" alt="card 2" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-opacity duration-300">
            <p className="text-white text-2xl md:text-5xl font-bold transform transition-transform duration-500 group-hover:translate-y-[-30px]">
              Women's
            </p>
            <a href="#" className="bg-white text-black w-32 md:w-40 h-10 md:h-12 flex items-center justify-center rounded-3xl font-bold opacity-0 transform translate-y-[40px] transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
              Shop
            </a>
          </div>
        </li>
        <li className="relative w-full sm:w-80 md:w-96 lg:w-[32rem] h-[32rem] group transform transition-transform duration-500 hover:scale-105 rounded-xl overflow-hidden">
          <img src={card3} className="w-full h-full object-cover transition-transform duration-500" alt="card 3" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-opacity duration-300">
            <p className="text-white text-2xl md:text-5xl font-bold transform transition-transform duration-500 group-hover:translate-y-[-30px]">
              Kids' & Baby
            </p>
            <a href="#" className="bg-white text-black w-32 md:w-40 h-10 md:h-12 flex items-center justify-center rounded-3xl font-bold opacity-0 transform translate-y-[40px] transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
              Shop
            </a>
          </div>
        </li>
        <li className="relative w-full sm:w-80 md:w-96 lg:w-[32rem] h-[32rem] group transform transition-transform duration-500 hover:scale-105 rounded-xl overflow-hidden">
          <img src={card4} className="w-full h-full object-cover transition-transform duration-500" alt="card 4" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-opacity duration-300">
            <p className="text-white text-2xl md:text-5xl font-bold transform transition-transform duration-500 group-hover:translate-y-[-30px]">
              Packs & Gear
            </p>
            <a href="#" className="bg-white text-black w-32 md:w-40 h-10 md:h-12 flex items-center justify-center rounded-3xl font-bold opacity-0 transform translate-y-[40px] transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
              Shop
            </a>
          </div>
        </li>
      </ul>
    </div>


    <div className="mb-16"> {/* 2번째 배너 사진 */}
      <div className="relative">
        <img src={banner} className="w-full h-[1000px] object-cover" alt="메인 배너" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-2 rounded-md pb-5">
          <h3 className="anti_title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pb-3 mb-3">
            이제 곧, 파타고니아의 계절
          </h3>
          <p className="text-sm sm:text-lg md:text-xl pb-3 mb-3">
            이번 시즌 파타고니아의 오리지널 플리스 컬렉션을 만나보세요.
          </p>
          <a
            href="#"
            className="bg-white text-black w-32 h-10 sm:w-36 sm:h-12 md:w-40 md:h-12 flex items-center justify-center rounded-3xl font-bold hover:scale-110 transition-transform duration-300"
          >
            Shop
          </a>
        </div>
      </div>
    </div>



  <div className="mb-10"> {/* 3번째 배너 사진 */}
    <div className="relative">
      <img src={midbanner} className="w-full h-[1000px] object-cover" alt="2번째 배너" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-2 rounded-md pb-5">
        <h3 className="anti_title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pb-3 mb-3">
          New Arrivals
        </h3>
        <p className="text-sm sm:text-lg md:text-xl mb-0">
          FW'24 신상품이 입고되었습니다. 언제나 그렇듯 우리가 지키기 위해 노력하는 지구를 위한 마음을 담았습니다.
        </p>
        <p className="text-sm sm:text-lg md:text-xl pb-3 mb-3">
          여러분이 앞으로도 계속 파타고니아를 통해 '품질의 차이'를 느낄 수 있도록 노력하겠습니다.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="bg-white text-black w-32 h-10 sm:w-36 sm:h-12 md:w-40 md:h-12 flex items-center justify-center rounded-3xl text-sm sm:text-base font-bold hover:scale-110 transition-transform duration-300"
          >
            Women's
          </a>
          <a
            href="#"
            className="bg-white text-black w-32 h-10 sm:w-36 sm:h-12 md:w-40 md:h-12 flex items-center justify-center rounded-3xl text-sm sm:text-base font-bold hover:scale-110 transition-transform duration-300"
          >
            Men's
          </a>
          <a
            href="#"
            className="bg-white text-black w-32 h-10 sm:w-36 sm:h-12 md:w-40 md:h-12 flex items-center justify-center rounded-3xl text-sm sm:text-base font-bold hover:scale-110 transition-transform duration-300"
          >
            Kids' & Baby
          </a>
          <a
            href="#"
            className="bg-white text-black w-32 h-10 sm:w-36 sm:h-12 md:w-40 md:h-12 flex items-center justify-center rounded-3xl text-sm sm:text-base font-bold hover:scale-110 transition-transform duration-300"
          >
            Shop
          </a>
        </div>
      </div>
    </div>
  </div>


	<div className="mb-28">{/* 스와이퍼1 컴포넌트 */}
		<SwiperComp/>
	</div>

	<div className="mb-28"> {/* 4번째 배너 사진 */}
    <div className="relative">
      <img src={final_banner} className="w-full h-[1000px] object-cover" alt="멤버십 혜택 안내 배너" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-2 rounded-md pb-5">
        <h3 className="anti_title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pb-3 mb-3">
          멤버십 혜택 안내
        </h3>
        <p className="text-sm sm:text-lg md:text-xl pb-3 mb-3">
          회원 가입하시고 다양한 혜택을 누리세요.
        </p>
        <a
          href="#"
          className="bg-white text-black w-32 h-10 sm:w-36 sm:h-12 md:w-40 md:h-12 flex items-center justify-center rounded-3xl font-bold hover:scale-110 transition-transform duration-300"
        >
          더보기
        </a>
      </div>
    </div>
  </div>

	<div className="mb-52"> {/* 스와이퍼2 컴포넌트 */}
		<SwiperComp2/>
	</div>
  </>;
  
}

export default MainComp;