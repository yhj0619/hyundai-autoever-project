import React from "react";
import foot1 from "../../src/assets/images/S24-Brand-Evergreen-Icons-footprint.svg";
import foot2 from "../../src/assets/images/S24-Brand-Evergreen-Icons-ironclad.svg";
import foot3 from "../../src/assets/images/S24-Brand-Evergreen-Icons-percent.svg";
import foot4 from "../../src/assets/images/S24-Brand-Evergreen-Icons-planet.svg";
import foot5 from "../../src/assets/images/S24-Brand-Evergreen-Icons-wornwear.svg";

const Footer = () => {
  return (
    <footer id="footer" className="fb__footer bg-black text-white py-10">
      {/* Top Section */}
      <div className="ptg__footer pb-8 border-b border-gray-700 px-4 sm:px-10">
        <h4 className="hidden">Footer</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
          <li className="py-3 px-28 sm:px-4 text-left ">
            <div>
              <img className="h-16 w-16 pb-4" src={foot2} alt="Ironclad" />
              <h5 className="font-black font-extrabold pb-4">
                모든 제품을 보증합니다.
              </h5>
              <a href="#" className="text-xs block hover:underline">
                철갑 보증
              </a>
            </div>
          </li>
          <li className="py-3 px-28 sm:px-4 text-left">
            <div>
              <img
                className="h-16 w-16 pb-4"
                src={foot1}
                alt="Environment Responsibility"
              />
              <h5 className="font-black pb-4">
                사회와 환경에 책임을 다합니다.
              </h5>
              <a href="#" className="text-xs block hover:underline">
                환경 발자국
              </a>
            </div>
          </li>
          <li className="py-3 px-28 sm:px-4 text-left">
            <div>
              <img
                className="h-16 w-16 pb-4"
                src={foot3}
                alt="Supporting Environment Groups"
              />
              <h5 className="font-black pb-4">환경 단체를 지원합니다.</h5>
              <a href="#" className="text-xs block hover:underline">
                파타고니아 액션웍스
              </a>
            </div>
          </li>
          <li className="py-3 px-28 sm:px-4 text-left">
            <div>
              <img
                className="h-16 w-16 pb-4"
                src={foot5}
                alt="Product Longevity"
              />
              <h5 className="font-black pb-4">제품을 오래 쓸 수 있습니다.</h5>
              <a href="#" className="text-xs block hover:underline">
                원웨어
              </a>
            </div>
          </li>
          <li className="py-3 px-28 sm:px-4 text-left">
            <div>
              <img
                className="h-16 w-16 pb-4"
                src={foot4}
                alt="Donate to Earth"
              />
              <h5 className="font-black pb-4">수익을 지구에 바칩니다.</h5>
              <a href="#" className="text-xs block hover:underline">
                이본 쉬나드의 편지
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Customer Support */}
          <div className="px-2">
            <h4 className="font-semibold text-lg mb-4">
              파타고니아 코리아 멤버십 가입하기
            </h4>

            <p>
              {" "}
              ㈜파타고니아코리아의 회원으로 가입하시면 다양한 혜택을 누리실 수
              있습니다. 회원가입시 본인 인증 후 매장 가입 내역 및 구매 내역을
              자동으로 통합하여 업데이트 합니다.
            </p>

            <button
              type="button"
              className="text-sm font-semibold text-black ml-1 bg-white px-8 py-2 mt-10 rounded-full transition-transform duration-300 transform hover:scale-105"
            >
              가입하기
            </button>
          </div>

          {/* More Information */}
          <div>
            <h4 className="font-semibold text-lg mb-4 px-2">Need Help?</h4>
            <div>
              <div>
                <button
                  type="button"
                  className="text-sm font-semibold text-white ml-1 bg-black border border-2 border-white px-8 py-2 mt-2 rounded-full transition-transform duration-300 transform hover:scale-105"
                >
                  고객센터
                </button>
                <button
                  type="button"
                  className="text-sm font-semibold text-white ml-1 bg-black border border-2 border-white px-8 py-2 mt-2 ml-4 rounded-full transition-transform duration-300 transform hover:scale-105"
                >
                  마이페이지
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="text-sm font-semibold text-white ml-1 bg-black border border-2 border-white px-9 py-2 mt-6 rounded-full transition-transform duration-300 transform hover:scale-105"
                >
                  1:1문의
                </button>
                <button
                  type="button"
                  className="text-sm font-semibold text-white ml-1 bg-black border border-2 border-white px-8 py-2 mt-6 ml-4 rounded-full transition-transform duration-300 transform hover:scale-105"
                >
                  반품/환불 안내
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="text-sm font-semibold text-white ml-1 bg-black border border-2 border-white px-10 py-2 mt-6 rounded-full transition-transform duration-300 transform hover:scale-105"
                >
                  수선 안내 및 조회
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="text-sm font-semibold text-white ml-1 bg-black border border-2 border-white px-8 py-2 mt-6 rounded-full transition-transform duration-300 transform hover:scale-105"
                >
                  사이즈 & 핏 가이드
                </button>
                <button
                  type="button"
                  className="text-sm font-semibold text-white ml-1 bg-black border border-2 border-white px-8 py-2 mt-6 ml-4 rounded-full transition-transform duration-300 transform hover:scale-105"
                >
                  로그인
                </button>
              </div>
            </div>
          </div>

          {/* Sustainability */}
          <div>
            <h4 className="font-semibold text-lg mb-4">더보기</h4>
            <div>
              <div className="mt-4">
                <span>Worn Wear</span>
                <span className="ml-4">1% For The Planet</span>
              </div>
              <div className="mt-4">
                <span>매장찾기</span>
                <span className="ml-8">장바구니</span>
              </div>
              <div className="mt-4">
                <span>보도자료</span>
                <span className="ml-8">모든 상품 리뷰 보기</span>
              </div>
              <div className="mt-4">
                <span>공지사항</span>
                <span className="ml-8">UPF 리콜</span>
              </div>
              <div className="mt-4">
                <span>이벤트</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-96 px-10 mt-12 max-w-sm">
          <div className="text-white font-bold">대표전화 1544-1876</div>
          <p className="mt-4">
            (평일 오전 9시 반 ~ 오후 5시 / 점심시간 오후 12시 반 ~ 오후 1시 반)
          </p>
          <p>주말 및 공휴일 휴무</p>
        </div>
        {/* Contact */}
        <div className="mt-12">
          <div className="text-xs">
            <span>(주)파타고니아코리아</span>
            <span className="ml-2">
              서울 강남구 삼성로122길 25 (삼성동) 파타고니아코리아
            </span>
            <span className="ml-2">
              대표번호 : 1544-1876
              (AS문의:내선번호2번/온라인쇼핑몰문의:내선번호3번)
            </span>
            <span className="ml-2">대표 : 브레멘볼프강슈멜츠</span>
          </div>
        </div>
        <div className="text-xs">
          <span>개인정보보호책임자 : 최종필</span>
          <span className="ml-2">사업자등록번호 : 220-88-66550</span>
          <span className="ml-2">개인정보처리방침</span>
          <span className="ml-2">
            통신판매업신고 : 2016-서울강남-03669 [사업자정보확인]
          </span>
          <span className="ml-2">
            KG이니시스 구매안전 서비스 [서비스가입사실확인]
          </span>
        </div>
        <div className="text-xs mt-2">
          <span>patagoniakorea@patagonia.kr</span>
        </div>
        <div className="text-xs mt-1">
          <span>© 2024 Patagonia, Inc. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
