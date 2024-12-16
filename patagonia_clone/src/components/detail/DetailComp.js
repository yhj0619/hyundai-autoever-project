import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useParams } from "react-router-dom";
import { selectProducts } from "../../redux/reducer"; // 제품 리스트 가져오는 selector
import { addToCart } from "../../redux/cartReducer";

import "../../index.css";
import "../../assets/css/reset.css";
import "../../assets/css/detail.css";

import DescriptionSwiper from "./swiper/DescriptionSwiper";
import RelatedSwiper from "./swiper/RelatedSwiper";
import ImpactHowSwiper from "./swiper/ImpactHowSwiper";
import ImpactWhereSwiper from "./swiper/ImpactWhereSwiper";
import ViewedSwiper from "./swiper/ViewedSwiper";
import useCustomMove from "../../hooks/useCustomMove";
import { addToCart as addProductToCart } from "../../redux/cartReducer";
const reviews = { href: "#", average: 5, totalCount: 23 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DetailComp() {
  const { addToCart } = useCustomMove();

  const { id } = useParams();
  console.log("i값" + id);
  const navigate = useNavigate(); // 페이지 이동을 위한 hook
  const dispatch = useDispatch(); // Redux 액션 호출
  const products = useSelector(selectProducts); // Redux에서 전체 제품 리스트 가져오기
  const product = products.find((item) => item.id === parseInt(id)); // id에 맞는 제품 찾기

  console.log("찾은 product: ", product); // product 값 확인

  const handleAddToCart = () => {
    // Redux에 제품 추가
    dispatch(addProductToCart(product.id));
    // 장바구니 페이지로 이동
    addToCart(product);
  };

  // product가 없는 경우 null로 초기화
  const [selectedColor, setSelectedColor] = useState(
    product ? product.colors[0] : null
  );
  const [selectedSize, setSelectedSize] = useState(
    product ? product.sizes[2] : null
  );

  const [modalOpen, setModalOpen] = useState(false);

  // 각각의 아코디언에 대해 상태를 관리하는 배열
  const [accordionStates, setAccordionStates] = useState([false, false, false]);

  //영향의 버튼
  const [activeButton, setActiveButton] = useState("how");

  // 모달 열기
  const openModal = () => {
    setModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleAccordion = (index) => {
    setAccordionStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  // 화면 크기 상태값에 따른 반응형 구분 변수
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // lg일때와 md,sm일때의 반응형이 다르기에, 구분을 위한 hook 설정
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); //tailwind.config.js보고 설정함
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="pt-6">
        {/* 상품명 및 카테고리 정보 */}
        <div className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <div className="flex items-center">
            <a href="#" className="mr-2 text-xs font-bold text-gray-900">
              &nbsp;Men's
            </a>
          </div>
          <div className="flex items-center">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div className="flex items-center">
            <a href="#" className="mr-2 text-xs font-bold text-gray-900">
              &nbsp;스웨트셔츠 & 후디
            </a>
          </div>
        </div>

        {/* 이미지 및 상품 정보 */}
        <div className="mx-auto mt-6 max-w-2xl lg:max-w-7xl lg:grid lg:grid-cols-5 lg:gap-x-8 lg:px-8">
          {/* image gallery (lg: 3/5) */}
          <div className="lg:col-span-3">
            {isLargeScreen ? (
              <div className="flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg relative"
                  >
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
                  </div>
                ))}
              </div>
            ) : (
              <DescriptionSwiper />
            )}
          </div>

          {/* product description (lg: 2/5) */}
          <div className="mt-0 lg:mt-0 lg:col-span-2">
            <h1 className="mt-0 text-3xl font-bold tracking-tighter text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
            <p className="mt-2.5 text-xl font-bold tracking-tight text-[#666] nanum-gothic-bold">
              {product.koName}
            </p>

            {/* Reviews */}
            <div className="mt-4">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? "text-gray-900"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
                <p className="underline underline-offset-4 inline-block align-middle ml-2.5 text-xs">
                  {reviews.totalCount} Reviews
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="mt-4 ">
              <p className="text-xl font-bold tracking-tight">
                {product.price}
              </p>
            </div>

            {/* Options */}
            <div className="mt-5">
              {/* Colors */}
              <div>
                <span className="text-sm font-bold text-gray-900">Color</span>
                <span className="ml-1 text-sm font-medium">
                  {selectedColor.name}
                </span>
                <fieldset aria-label="Choose a color" className="mt-4">
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="flex items-center space-x-3"
                  >
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={classNames(
                          color.selectedClass,
                          "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              {/* Sizes */}
              <div className="mt-4">
                <h3 className="text-sm font-bold text-gray-900">Size</h3>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-2 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={classNames(
                          size.inStock
                            ? "cursor-pointer bg-[#EEEEEE] text-[#4a4a4a] shadow-sm"
                            : "cursor-not-allowed bg-[#f5f5f5] text-[#4a4a4a]",
                          "group relative flex items-center justify-center rounded-lg border px-4 py-3 text-xs font-bold uppercase data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                        )}
                      >
                        <span>{size.name}</span>
                        {size.inStock ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent p-1 group-data-[focus]:border-2 group-data-[checked]:border-black "
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-gray-200"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                            >
                              <line
                                x1={0}
                                x2={100}
                                y1={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              {/* fit Guide */}
              <div className="mt-4 flex">
                <button className="text-sm font-bold text-black cursor-pointer  flex items-center">
                  <img
                    src={product.iconImage[1].src}
                    className="h-4 align-text-top"
                  ></img>
                  <span>&nbsp; Regular Fit | Size & Fit Guide</span>
                </button>
              </div>
              {/* cart */}
              <div>
                <h1>{product.name}</h1>
                <button
                  type="submit"
                  className="h-14 w-80 flex py-2 items-center justify-center space-between rounded-full border border-transparent bg-black px-8 text-base font-blond text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-transform duration-200 ease-in-out md:w-full sm:w-full"
                  onClick={handleAddToCart}
                >
                  장바구니
                </button>
              </div>
              {/* 배송반품+모달 */}
              <div className="mt-4">
                <button
                  className="text-base font-bold text-black cursor-pointer"
                  onClick={() => {
                    openModal();
                  }}
                >
                  배송 & 반품
                </button>
                {modalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div
                      className="bg-black p-8 text-white rounded-lg shadow-lg relative"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex justify-end -mx-7 gap-0">
                        <button
                          className="w-14 cursor-pointer "
                          onClick={closeModal}
                        >
                          <img src={product.iconImage[2].src} className="w-4" />
                        </button>
                      </div>

                      <div className="flex-1 h-1/2 overflow-auto">
                        <ul className="m-0 p-0">
                          <li>
                            <div className="text-xs font-bold mb-6 leading-tight">
                              <br />* 3만원 이상 구매 시 무료 배송
                            </div>
                            <div className="text-xs font-medium leading-tight">
                              도서/산간/제주를 제외한 지역은 3만원 이상 구매 시
                              무료 배송됩니다.
                              <br />
                              <a
                                className="text-xs leading-tight block font-medium text-white underline"
                                href="#"
                                style={{
                                  color: "white",
                                  display: "inline-block",
                                  zIndex: 1,
                                }}
                              >
                                [더보기]
                              </a>
                            </div>
                          </li>
                          <li className="mt-6">
                            <div className="text-xs font-bold mb-6 leading-tight">
                              <br />* 반품&교환
                            </div>
                            <div className="text-xs font-medium leading-tight">
                              반품은 발송일 기준 14일 이내 가능하며,
                              “마이페이지&gt;반품 신청 및 조회”를 통해 신청해
                              주세요.
                              <br />
                              교환을 원할 경우 반품 후 재구매 해 주세요.
                              <br />
                              <a
                                className="text-xs leading-tight block font-medium text-white underline"
                                href="#"
                                style={{
                                  color: "white",
                                  display: "inline-block",
                                  zIndex: 1,
                                }}
                              >
                                [더보기]
                              </a>
                            </div>
                          </li>
                          <li className="mt-6">
                            <div className="text-xs font-bold mb-6 leading-tight">
                              <br />* 철갑보증(Ironclad Guarantee)
                            </div>
                            <div className="text-xs font-medium leading-tight">
                              파타고니아코리아는 소비자기본법에 따른 소비자 분쟁
                              해결 기준에 의거하여 보상합니다.
                              <br />
                              제품 사용 중 손상된 제품은 합리적인 비용으로
                              수선이 가능합니다.
                              <br />
                              <a
                                className="text-xs leading-tight block font-medium text-white underline"
                                href="#"
                                style={{
                                  color: "white",
                                  display: "inline-block",
                                  zIndex: 1,
                                }}
                              >
                                [품질보증 피해보상규정 더보기]
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* describe */}
            <div>
              <div className="mt-6 text-sm font-medium leading-relaxed">
                <p>
                  73 스카이라인 그래픽은 예전 파타고니아의 제품 라벨에 사용됐던
                  로고입니다. 현재 파타고니아는 우리의 삶의 터전인 지구를 지키기
                  위한 사업을 하고 있으며, 자원 보전이야말로 이러한 지원 노력의
                  일환이라 할 수 있습니다. 자투리 천과 재활용 병으로 만든 100%
                  리사이클 제품으로 신규 소재 사용에 대한 의존도를 줄였습니다.
                  더 잘 알면, 더 잘 실천하게 됩니다.
                </p>
              </div>
              <div className="mt-4 text-sm font-bold leading-relaxed">
                <p>INBK | Style No. 39678P7</p>
              </div>
              {/* accordion */}
              <div className="bg-white">
                <div className="mt-8">
                  <ul className="opening">
                    <li
                      className={`border-t-2 border-black ${
                        accordionStates[0] ? "On" : ""
                      }`}
                    >
                      <button
                        className="relative flex justify-between items-center w-full h-[55px] text-[15px] font-bold text-black"
                        onClick={() => toggleAccordion(0)}
                      >
                        <p className="flex-shrink-0">상품 상세정보</p>
                        <div
                          className={`flex-shrink-0 transition-transform duration-300 ${
                            accordionStates[0] ? "rotate-180" : ""
                          }`}
                        >
                          <i class="fa-solid fa-chevron-down"></i>
                        </div>
                      </button>

                      {accordionStates[0] && (
                        <div className="block">
                          <div className="mb-6">
                            <p className="font-sm font-bold">
                              100% 리사이클 원단
                            </p>
                            <p>
                              브러쉬드 처리된 내부와 자연스러운 신축성을 가진
                              100% 리사이클 니트 플리스 원단으로 만들어졌으며,
                              포스트컨슈머 리사이클 폴리에스터 55%와 리사이클
                              순면 45% 혼합으로 부드럽고 내구성이 좋습니다.
                            </p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">
                              편안한 풀오버 스타일의 후디
                            </p>
                            <p>
                              클래식한 스타일의 풀오버 후디 제품으로 사이즈
                              조절용 조임끈과 앞쪽에 캥거루 손 주머니가 달려
                              있습니다.
                            </p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">
                              립 니트 소재를 사용한 패널과 소매, 허리 부분
                            </p>
                            <p>
                              옆 패널과 소매, 허리 부분은 립-니트 원단을
                              사용했습니다. 립 처리한 옆 패널은 활동성을
                              높입니다.
                            </p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">
                              생산 노동자 지원
                            </p>
                            <p>
                              생산 노동자들의 생활 개선을 위해 지원금을 공정
                              무역 노동자 위원회에 직접 지급하는 공정 무역 (Fair
                              Trade Certified™) 봉제 제품입니다.
                            </p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">무게</p>
                            <p>680g</p>
                          </div>
                        </div>
                      )}
                    </li>

                    <li
                      className={`border-t-2 border-black ${
                        accordionStates[1] ? "On" : ""
                      }`}
                    >
                      <button
                        className="relative flex justify-between items-center w-full h-[55px] text-[15px] font-bold text-black"
                        onClick={() => toggleAccordion(1)}
                      >
                        <p className="flex-shrink-0">소재</p>
                        <div
                          className={`flex-shrink-0 transition-transform duration-300 ${
                            accordionStates[1] ? "rotate-180" : ""
                          }`}
                        >
                          <i class="fa-solid fa-chevron-down"></i>
                        </div>
                      </button>

                      {accordionStates[1] && (
                        <div className="block">
                          <div className="mb-6">
                            <p className="font-sm">
                              주 원단: 리사이클 폴리에스터 55%, 리사이클 순면
                              45% 혼합
                            </p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm">
                              측면 패널, 소맷단 및 밑단: 210g 포스트컨슈머
                              리사이클 폴리에스터 50%/리사이클 순면 립 니트 50%
                              혼방
                            </p>
                          </div>
                        </div>
                      )}
                    </li>

                    <li
                      className={`border-t-2 border-black ${
                        accordionStates[2] ? "On" : ""
                      }`}
                    >
                      <button
                        className="relative flex justify-between items-center w-full h-[55px] text-[15px] font-bold text-black"
                        onClick={() => toggleAccordion(2)}
                      >
                        <p className="flex-shrink-0">상품 필수 정보</p>
                        <div
                          className={`flex-shrink-0 transition-transform duration-300 ${
                            accordionStates[2] ? "rotate-180" : ""
                          }`}
                        >
                          <i class="fa-solid fa-chevron-down"></i>
                        </div>
                      </button>

                      {accordionStates[2] && (
                        <div className="block">
                          <div className="mb-6">
                            <p className="font-sm font-bold">제품 소재</p>
                            <p>상품상세설명 참조</p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">색상</p>
                            <p>Ink Black_INBK, Stormy Mauve_STMA</p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">사이즈</p>
                            <p>XS, S, M, L, XL, XXL</p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">제조사(수입자)</p>
                            <p>Patagonia, Inc. (수입자: ㈜파타고니아코리아)</p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">제조국</p>
                            <p>멕시코</p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">
                              세탁방법 및 취급시 주의사항
                            </p>
                            <p>상품상세설명 및 케어라벨 참조</p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">제조년월</p>
                            <p>
                              2024년 FW 상품이며, 통상 24년 5월 기준 6개월 전후
                              생산이 되나 직수입 상품인 관계로 정확한 제조
                              일자는 상품별로 차이가 날 수 있습니다.
                            </p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">품질보증기준</p>
                            <p>구입일로부터 1년</p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">
                              A/S 책임자와 전화번호
                            </p>
                            <p>㈜파타고니아코리아 / 1544-1876 (내선번호2번)</p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">수입년월</p>
                            <p>
                              2023년 12월 최초 수입 (국내 수입 기준). 제조년월과
                              국내 수입년월은 상이할 수 있습니다.
                            </p>
                          </div>
                          <div className="mb-6">
                            <p className="font-sm font-bold">
                              KC안전인증 대상유무
                            </p>
                            <p>무</p>
                          </div>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              {/* end of accordion ui */}
            </div>
            {/* two images  */}
            <div className="mb-1 flex items-center justify-center gap-0">
              <a href="#">
                <button></button>
              </a>
            </div>
            {/* 취급 주의사항 */}
            <div className="mt-4 mb-40">
              <button className="text-base font-bold text-black cursor-pointer">
                취급 주의사항
              </button>
            </div>
            {/* end of describe */}
          </div>
        </div>
      </div>
      {/* reviews */}
      <div id="reviews">
        <div className="bg-black text-white border-b-0 py-[30px] pb-[16px]">
          <div className="align-items justify-between flex">
            <div className="pl-5 text-xl flex ">
              <p className="mr-1">Reviews</p>
              <p className="font-bold tracking-[0.5]">({reviews.totalCount})</p>
            </div>
            <div className="pr-0 text-base">
              <a href="#" className="pt-0 px-3 pb-4">
                모든 상품 리뷰 보기
              </a>
            </div>
          </div>
          <div id="products_reviews_summary_v2" className="py-[32px] pb-[94px]">
            <div
              id="products_reviews_summary_v2__summary_container"
              className="flex justify-center items-center"
            >
              {/* 왼쪽 */}
              <div
                id="products_reviews_summary_v2__lcontent"
                className="flex w-[399px] min-h-[122px] border-r border-solid border-[#d8dde5]"
              >
                <div className="flex flex-col justify-center items-center text-center mt-[9px]">
                  <div className="flex justify-center items-center">
                    <div className="w-10 h-10 mx-4 my-0 flex items-center justify-center align-middlez-40">
                      <div className="w-full h-full flex items-center justify-center">
                        <i className="fa-regular fa-star text-white text-3xl"></i>
                      </div>
                    </div>
                    <div className="text-white text-3xl">5.0</div>
                  </div>
                  <div className="flex mt-2 text-sm text-center">
                    <b>100%</b>의 구매자가 이 상품을 좋아합니다.
                  </div>
                </div>
              </div>
              {/* 오른쪽 */}
              <div className="m-0 w-1/3 pl-[64px]">
                <ul className="m-0 p-0">
                  {/* 아주 좋아요 */}
                  <li className="flex list-none mt-2">
                    <div className="text-white font-bold w-[70px] mr-3 text-xs leading-4">
                      아주 좋아요
                    </div>
                    {/* Progress Bar Background */}
                    <div className="relative flex-1 bg-[#ebeff5] h-3 rounded-full overflow-hidden">
                      {/* 채워진 부분 */}
                      <div className="bg-white h-full w-[96%] rounded-full"></div>
                    </div>
                    <div className="text-white font-bold w-16 ml-3 text-xs leading-4">
                      22
                    </div>
                  </li>

                  {/* 맘에 들어요 */}
                  <li className="flex list-none mt-2 text-gray-500">
                    <div className="w-[70px] mr-3 text-xs leading-4">
                      맘에 들어요
                    </div>
                    {/* Progress Bar Background */}
                    <div className="relative flex-1 bg-[#999999] h-3 rounded-full overflow-hidden">
                      {/* 채워진 부분 */}
                      <div className="bg-[#bcc2cc] h-full w-[4%] rounded-full"></div>
                    </div>
                    <div className="w-16 ml-3 text-xs leading-4">1</div>
                  </li>

                  {/* 보통이에요 */}
                  <li className="flex list-none mt-2 text-gray-500">
                    <div className="w-[70px] mr-3 text-xs leading-4">
                      보통이에요
                    </div>
                    {/* Progress Bar Background */}
                    <div className="relative flex-1 bg-[#999999] h-3 rounded-full overflow-hidden">
                      {/* 채워진 부분 없음 */}
                      <div className="bg-[#999999] h-full w-[0%]"></div>
                    </div>
                    <div className="w-16 ml-3 text-xs leading-4">0</div>
                  </li>

                  {/* 그냥 그래요 */}
                  <li className="flex list-none mt-2 text-gray-500">
                    <div className="w-[70px] mr-3 text-xs leading-4">
                      그냥 그래요
                    </div>
                    {/* Progress Bar Background */}
                    <div className="relative flex-1 bg-[#999999] h-3 rounded-full overflow-hidden">
                      {/* 채워진 부분 없음 */}
                      <div className="bg-[#999999] h-full w-[0%]"></div>
                    </div>
                    <div className="w-16 ml-3 text-xs leading-4">0</div>
                  </li>

                  {/* 별로예요 */}
                  <li className="flex list-none mt-2 text-gray-500">
                    <div className=" w-[70px] mr-3 text-xs leading-4">
                      별로예요
                    </div>
                    {/* Progress Bar Background */}
                    <div className="relative flex-1 bg-[#999999] h-3 rounded-full overflow-hidden">
                      {/* 채워진 부분 없음 */}
                      <div className="bg-[#999999] h-full w-[0%]"></div>
                    </div>
                    <div className="w-16 ml-3 text-xs leading-4">0</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Review List  */}
      <div className="relative py-16 px-28">
        <div>
          <div className="inline-flex justify-between w-full text-base">
            <p>포토&동영상 (8)</p>
            <p>전체보기 &gt; </p>
          </div>
          <div className="pt-4 text-0 overflow-hidden min-w-[720px] max-w-screen-2xl">
            <ul className="flex">
              {product.reviewImage.map((image, index) => (
                <li
                  key={index}
                  className="list-none cursor-pointer overflow-hidden relative rounded mr-2"
                >
                  <img
                    src={image.src}
                    className="w-full h-auto rounded"
                    alt={`review ${index}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-20">
          <div className="inline-flex justify-between w-full border-t border-gray-200 items-center h-16">
            <div className="inline-flex space-x-4 items-center h-full m-0 my-auto">
              <p className=" p-2 font-bold">추천순</p>
              <p className="p-2 text-[#bcc2cc]">최신순</p>
              <p className="p-2 text-[#bcc2cc]">별점순</p>
            </div>
            <div className="inline-flex items-center h-full">
              <form class="max-w-md mx-auto">
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                    placeholder="리뷰 키워드 검색"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="inline-flex justify-start w-full border-t border-gray-200 items-center h-16">
            <div className="inline-flex items-center h-full mr-2">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#14161a] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    별점
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </MenuButton>
                </div>
              </Menu>
            </div>

            <div className="inline-flex items-center h-full mr-2">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#14161a] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    키
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </MenuButton>
                </div>
              </Menu>
            </div>

            <div className="inline-flex items-center h-full mr-2">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#14161a] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    몸무게
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </MenuButton>
                </div>
              </Menu>
            </div>

            <div className="inline-flex items-center h-full mr-2">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#14161a] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    용도
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </MenuButton>
                </div>
              </Menu>
            </div>

            <div className="inline-flex items-center h-full mr-2">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#14161a] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    평소사이즈
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </MenuButton>
                </div>
              </Menu>
            </div>
          </div>
          <div>
            {product.reviewImage.slice(0, 4).map((review, index) => (
              <div
                key={index}
                className="flex justify-between mb-6  border-t border-gray-200"
              >
                <div className="items-stretch w-[800px]">
                  {/* Review header */}
                  <div className="inline-flex justify-between w-full items-center h-16">
                    <div className="inline-flex space-x-4 items-center h-full m-0 my-auto">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating
                                ? "text-gray-900"
                                : "text-gray-200",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                        <div className="flex justify-between">
                          <p className="inline-block align-middle ml-2.5 text-sm font-bold">
                            {review.goods}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center h-full">
                      <p className="inline-block align-middle ml-2.5 text-xs text-[#707680]">
                        {review.date}
                      </p>
                    </div>
                  </div>

                  {/* Review content */}
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[#14161A] text-xs mb-3">
                        {review.content}
                      </p>
                    </div>
                  </div>
                  {/* Review image */}
                  {review.src && (
                    <div className="mb-2">
                      <img
                        src={review.src}
                        alt="review"
                        className="w-32 h-32 rounded"
                      />
                    </div>
                  )}

                  {/* Review actions */}
                  <div className="flex mb-2 pb-4 text-[#707680] text-xs items-center">
                    <i className="fa-regular fa-thumbs-up"></i>
                    <p className="px-2">도움돼요 1</p> |{" "}
                    <p className="px-2">댓글 0</p>
                  </div>
                </div>

                {/* Right side box */}
                <div
                  className="bg-[#f5f5f5] ml-10 mt-10 mb-5 p-10 rounded-md text-xs text-gray-600 relative flex flex-col justify-center"
                  style={{ width: "calc(25% - 70px)" }}
                >
                  <div className="flex flex-col justify-center">
                    <p className="mb-4 text-[#14161a] font-bold">
                      {review.writer}
                    </p>
                    <p>의 리뷰입니다.</p>
                  </div>
                  {review.height && (
                    <div className="flex leading-5">
                      <p className="text-[#707680] mr-1">키</p>
                      <p className="text-black">{review.height}</p>
                    </div>
                  )}
                  {review.weight && (
                    <div className="flex leading-5">
                      <p className="text-[#707680] mr-1">몸무게</p>
                      <p className="text-black">{review.weight}</p>
                    </div>
                  )}
                  {review.howTo && (
                    <div className="flex leading-5">
                      <p className="text-[#707680] mr-1">용도</p>
                      <p className="text-black">{review.howTo}</p>
                    </div>
                  )}
                  {review.size && (
                    <div className="flex leading-5">
                      <p className="text-[#707680] mr-1">평소사이즈</p>
                      <p className="text-black">{review.size}</p>
                    </div>
                  )}
                  {review.grade && (
                    <div className="flex leading-5">
                      <p className="text-[#707680] mr-1">회원 등급</p>
                      <p className="text-black">{review.grade}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 연관상품 */}
      <div>
        <div className="relative py-16 px-28">
          <div className="w-full mt-16 mb-8 ">
            <h3 className="inline-flex items-baseline text-3xl font-bold leading-tight">
              연관상품
            </h3>
          </div>
        </div>
        <div className="mb-40 pl-28">
          <RelatedSwiper />
        </div>
      </div>
      {/* 상품문의 */}
      <div className="flex flex-row flex-wrap w-full px-32  mb-40">
        <div className="w-full ">
          <h3 className="text-base font-extrabold">상품문의</h3>
        </div>
        <ul className="w-full mt-8">
          <li className="border-none w-full mt-12">
            <div className="flex flex-col items-center text-sm box-border">
              <img src={product.iconImage[5].src} />
              등록된 상품문의가 없습니다.
            </div>
            {/* <div className="mt-6 w-full"></div> */}
            <div className="flex mt-6 flex-col items-center">
              <button className="inline-block min-w-40 px-12 py-5 text-2xl font-bold text-white border border-black bg-black transition-transform duration-200 ease-[cubic-bezier(0.235, 0, 0.05, 0.95)] align-middle rounded-full hover:scale-105">
                상품문의작성
              </button>
            </div>
          </li>
        </ul>
      </div>
      {/* impact */}
      <div className="mt-16  mb-40">
        <div className="relative mb-8 px-8">
          <p className="ext-lg font-bold lg:m-0 lg:absolute lg:left-8 md:static sm:static">
            제품의 환경 영향
          </p>

          <p className="text-2xl font-bold lg:tracking-tight lg:text-center lg:mx-auto md:static sm:static">
            우리가 만드는 모든 것이 지구에 영향을 미칩니다.
          </p>
        </div>

        {/* Button Group */}
        <div className="flex justify-center items-center h-20 mb-9">
          <button
            className={`flex items-center p-10 tracking-[-0.01rem] text-black transition-all duration-160 ease-[cubic-bezier(0.38, 0.41, 0.27, 1)] border-b-4 ${
              activeButton === "how" ? "border-black" : "border-[#eaeaea]"
            } font-["Avenir Next W02", sans-serif]`}
            onClick={() => setActiveButton("how")}
          >
            <p className="font-base font-bold transform hover:-translate-y-1">
              How it's made
            </p>
          </button>
          <button
            className={`flex items-center p-10 tracking-[-0.01rem] text-black transition-all duration-160 ease-[cubic-bezier(0.38, 0.41, 0.27, 1)] border-b-4 ${
              activeButton === "where" ? "border-black" : "border-[#eaeaea]"
            } font-["Avenir Next W02", sans-serif]`}
            onClick={() => setActiveButton("where")}
          >
            <p className="font-base font-bold transform hover:-translate-y-1">
              Where it's made
            </p>
          </button>
        </div>

        {/* Cards Section */}

        {activeButton === "how" && (
          <div className="flex justify-center gap-5 px-4 ">
            {isLargeScreen ? (
              <>
                <div className="w-72 h-80 bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={product.impactImage[0].src}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />

                  <h4 className="text-md font-bold mb-1">
                    리사이클 폴리에스터
                  </h4>
                  <p className="text-xs mb-2">
                    리사이클 폴리에스터는 석유로 만든 버진 원단에 대한 의존도를
                    낮춰 줍니다.
                  </p>
                  <button className="text-xs font-bold py-1 px-3 bg-black text-white rounded-full">
                    Learn more
                  </button>
                </div>
                <div className="w-72 bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={product.impactImage[1].src}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />

                  <h4 className="text-md font-bold mb-1">리사이클 코튼</h4>
                  <p className="text-xs mb-2">
                    파타고니아의 리사이클 코튼은 자투리 천으로 만들어졌습니다.
                  </p>
                  <button className="text-xs font-bold py-1 px-3 bg-black text-white rounded-full">
                    Learn more
                  </button>
                </div>
                <div className="w-72 bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={product.impactImage[2].src}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />

                  <h4 className="text-md font-bold mb-1">공정 무역</h4>
                  <p className="text-xs mb-2">
                    노동자의 생활 임금 보장을 위한 첫 걸음.
                  </p>
                  <button className="text-xs font-bold py-1 px-3 bg-black text-white rounded-full">
                    Learn more
                  </button>
                </div>
              </>
            ) : (
              // Medium/Small screen (md, sm)일 때 Swiper를 보여줌
              <ImpactHowSwiper />
            )}
          </div>
        )}

        {activeButton === "where" && (
          <div className="flex justify-center gap-5 px-4">
            {isLargeScreen ? (
              <>
                <div className="w-72 h-80 bg-white p-4 rounded-lg shadow-md">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg relative">
                    <img
                      src={product.impactImage[3].src}
                      className="h-full w-full object-cover rounded-md mb-2"
                    />
                    <div className="z-10 bottom-4 left-0 w-full flex items-center justify-between gap-0 pl-4 pr-4">
                      <div
                        className="absolute bottom-4 left-2 bg-white border border-white rounded-xl text-black text-xs font-bold leading-4 py-1 px-3"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        Vertical Knits S.A. de C.V.
                      </div>
                    </div>
                  </div>
                  <button className="text-xs font-bold py-1 px-3 bg-black text-white rounded-full">
                    Learn more
                  </button>
                </div>
              </>
            ) : (
              // Medium/Small screen (md, sm)일 때 Swiper를 보여줌
              <ImpactWhereSwiper />
            )}
          </div>
        )}

        {/* Footer Button */}
        <div className="flex mt-6 flex-col items-center">
          <button className="inline-block min-w-40 px-12 py-5 text-2xl font-bold text-white border border-black bg-black transition-transform duration-200 ease-[cubic-bezier(0.235, 0, 0.05, 0.95)] align-middle rounded-full hover:scale-105">
            Our Footprint
          </button>
        </div>
      </div>
      {/* 최근 본 상품 */}
      <div>
        <div className="relative py-16 px-28">
          <div className="w-full mt-16 mb-8">
            <h3 className="inline-flex items-baseline text-3xl font-bold leading-tight">
              최근 본 상품
            </h3>
          </div>
        </div>
        <div className="mb-40 px-28">
          <ViewedSwiper />
        </div>
      </div>
    </div>
  );
}

export default DetailComp;
//icon complete
