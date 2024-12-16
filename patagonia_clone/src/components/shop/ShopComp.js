import React from "react";
import { useState } from "react";
import ReviewStars from "./ReviewStars.jsx";
import { Link } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove.js";
import CustomCheckbox from "./CustomCheckbox.jsx";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import product5 from "../../assets/images/product5.jpg";
import product6 from "../../assets/images/product6.jpg";
import product7 from "../../assets/images/product7.jpg";
import product8 from "../../assets/images/product8.jpg";
import product9 from "../../assets/images/product9.jpg";
import product10 from "../../assets/images/product10.jpg";
import product11 from "../../assets/images/product11.jpg";
import product12 from "../../assets/images/product12.jpg";
import product13 from "../../assets/images/product13.jpg";
import product14 from "../../assets/images/product14.jpg";
import product15 from "../../assets/images/product15.jpg";
import slide_icon from "../../assets/images/icon-chevron-slider.png";

const navigation = [
  { name: "모든상품", href: "#", current: true },
  { name: "신상품", href: "#", current: false },
  { name: "재킷&플리스", href: "#", current: false },
  { name: "플리스", href: "#", current: false },
  { name: "스웨트셔츠&후디", href: "#", current: false },
  { name: "셔츠", href: "#", current: false },
  { name: "티셔츠", href: "#", current: false },
  { name: "팬츠&레깅스", href: "#", current: false },
  { name: "언더웨어&스포츠 브라", href: "#", current: false },
  { name: "모자&액세서리", href: "#", current: false },
  { name: "베이스레이어", href: "#", current: false },
  { name: "웻슈트", href: "#", current: false },
];

const category = [
  {
    id: "1",
    category: "카테고리",
    sub_category: "",
    sub_items: [
      "모든상품",
      "신상품",
      "재킷 & 베스트",
      "플리스",
      "스웨트셔츠 & 후디",
      "셔츠",
      "티셔츠",
      "팬츠 & 레깅스",
      "언더웨어 & 스포츠 브라",
      "모자 & 액세서리",
      "베이스레이어",
      "웻슈트",
    ],
  },
  {
    id: "2",
    category: "사이즈",
    sub_category: "",
    sub_items: [
      { id: 1, content: "XS" },
      { id: 2, content: "S" },
      { id: 3, content: "M" },
      { id: 4, content: "L" },
      { id: 5, content: "XL" },
      { id: 6, content: "XXL" },
    ],
  },
  {
    id: "3",
    category: "색상",
    sub_category: "",
    sub_items: [],
  },
  {
    id: "4",
    category: "핏",
    sub_category: "",
    sub_items: [
      { id: 7, content: "Regular Fit" },
      { id: 8, content: "Relaxed Fit" },
    ],
  },
  {
    id: "5",
    category: "제품 특징",
    sub_category: "",
    sub_items: [{ id: 9, content: "후드" }],
  },
  {
    id: "6",
    category: "소재 및 생산 과정",
    sub_category: "",
    sub_items: [
      { id: 10, content: "리사이클 소재 사용" },
      { id: 11, content: "햄프/마" },
    ],
  },
  {
    id: "7",
    category: "상품 정렬",
    sub_category: "최근등록순",
    sub_items: ["낮은가격순", "높은가격순", "최신등록순"],
  },
];

const products = [
  {
    id: 1,
    name: "'73 Skyline Uprisal Hoody",
    sub_name: "73 스카이라인 업라이절 후디",
    href: "#",
    price: "159,000원",
    imageSrc: product1,
    imageAlt: "",
    colors: [
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      { name: "Purple", class: "bg-cb-50", selectedClass: "ring-gray-900" },
    ],
    rating: 5,
    reviewCount: 23,
  },
  {
    id: 2,
    name: "Snowbelle Beanie",
    sub_name: "스노우벨 비니",
    href: "#",
    price: "89,000원",
    imageSrc: product2,
    imageAlt: "",
    colors: [
      { name: "Brown", class: "bg-cb-100", selectedClass: "ring-gray-900" },
    ],
    rating: 0,
    reviewCount: 0,
  },
  {
    id: 3,
    name: "Fisherman's Rolled Beanie",
    sub_name: "피셔맨즈 롤드 비니",
    href: "#",
    price: "69,000원",
    imageSrc: product3,
    imageAlt: "",
    colors: [
      { name: "Gray", class: "bg-cb-200", selectedClass: "ring-gray-900" },
      { name: "Orange", class: "bg-cb-300", selectedClass: "ring-gray-900" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    rating: 5,
    reviewCount: 9,
  },
  {
    id: 4,
    name: "Bandana",
    sub_name: "밴대나",
    href: "#",
    price: "35,000원",
    imageSrc: product4,
    imageAlt: "",
    colors: [
      { name: "Blue", class: "bg-cb-400", selectedClass: "ring-gray-900" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      { name: "Green", class: "bg-cb-500", selectedClass: "ring-gray-900" },
    ],
    rating: 5,
    reviewCount: 17,
  },
  {
    id: 5,
    name: "W's Diamond Quilted Bomber Hoody",
    sub_name: "우먼즈 다이아몬드 퀼티드 보머 후디",
    href: "#",
    price: "299,000원",
    imageSrc: product5,
    imageAlt: "",
    colors: [
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      { name: "Purple", class: "bg-cb-50", selectedClass: "ring-gray-900" },
      { name: "Green", class: "bg-cb-500", selectedClass: "ring-gray-900" },
    ],
    rating: 4.5,
    reviewCount: 14,
  },
  {
    id: 6,
    name: "W's Synchilla® Jacket",
    sub_name: "우먼즈 신칠라 재킷",
    href: "#",
    price: "249,000원",
    imageSrc: product6,
    imageAlt: "",
    colors: [
      { name: "Yellow", class: "bg-cb-600", selectedClass: "ring-gray-900" },
    ],
    rating: 5,
    reviewCount: 2,
  },
  {
    id: 7,
    name: "W's Boulder Fork Rain Jacket",
    sub_name: "우먼즈 볼더 포크 레인 재킷",
    href: "#",
    price: "429,000원",
    imageSrc: product7,
    imageAlt: "",
    colors: [
      { name: "Black", class: "bg-cb-1050", selectedClass: "ring-gray-900" },
      { name: "Purple", class: "bg-cb-1100", selectedClass: "ring-gray-900" },
    ],
    rating: 5,
    reviewCount: 1,
  },
  {
    id: 8,
    name: "Daily Hoody Sweatshirt",
    sub_name: "데일리 후디 스웨트셔츠",
    href: "#",
    price: "199,000원",
    imageSrc: product8,
    imageAlt: "",
    colors: [
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      { name: "Yellow", class: "bg-cb-1150", selectedClass: "ring-gray-900" },
    ],
    rating: 0,
    reviewCount: 0,
  },
  {
    id: 9,
    name: "Daily Crewneck Sweatshirt",
    sub_name: "데일리 크루넥 스웨트셔츠",
    href: "#",
    price: "159,000원",
    imageSrc: product9,
    imageAlt: "",
    colors: [
      { name: "Green", class: "bg-cb-700", selectedClass: "ring-gray-900" },
      { name: "Brown", class: "bg-gray-100", selectedClass: "ring-gray-900" },
      { name: "Green", class: "bg-cb-800", selectedClass: "ring-gray-900" },
      { name: "Brown", class: "bg-cb-900", selectedClass: "ring-gray-900" },
    ],
    rating: 4.5,
    reviewCount: 13,
  },
  {
    id: 10,
    name: "Long-Sleeved Strataspire Responsibili-Tee®",
    sub_name: "롱-슬리브드 스트라타스파이어 리스판서빌리-티",
    href: "#",
    price: "79,000원",
    imageSrc: product10,
    imageAlt: "",
    colors: [
      { name: "Green", class: "bg-cb-700", selectedClass: "ring-gray-900" },
      { name: "Brown", class: "bg-gray-100", selectedClass: "ring-gray-900" },
      { name: "Green", class: "bg-cb-800", selectedClass: "ring-gray-900" },
      { name: "Brown", class: "bg-cb-900", selectedClass: "ring-gray-900" },
    ],
    rating: 5,
    reviewCount: 1,
  },

  {
    id: 11,
    name: "W's CTA Easy-Cut Organic T-Shirt",
    sub_name: "우먼즈 콜 투 액션 이지 컷 오가닉 티셔츠",
    href: "#",
    price: "69,000원",
    imageSrc: product11,
    imageAlt: "",
    colors: [
      { name: "Yellow", class: "bg-cb-1200", selectedClass: "ring-gray-900" },
    ],
    rating: 0,
    reviewCount: 0,
  },
  {
    id: 12,
    name: "W's Lightweight Synchilla® Snap-T® Pullover",
    sub_name: "우먼즈 라이트웨이트 신칠라 스냅 티 풀오버",
    href: "#",
    price: "199,000원",
    imageSrc: product12,
    imageAlt: "",
    colors: [
      { name: "Gray", class: "bg-cb-1250", selectedClass: "ring-gray-900" },
      { name: "Gray", class: "bg-cb-1300", selectedClass: "ring-gray-900" },
    ],
    rating: 5,
    reviewCount: 4,
  },
  {
    id: 13,
    name: "W's Classic Retro-X® Vest",
    sub_name: "우먼즈 클래식 레트로-X 베스트",
    href: "#",
    price: "259,000원",
    imageSrc: product13,
    imageAlt: "",
    colors: [
      { name: "Yellow", class: "bg-cb-1350", selectedClass: "ring-gray-900" },
      { name: "Yellow", class: "bg-cb-1400", selectedClass: "ring-gray-900" },
    ],
    rating: 5,
    reviewCount: 22,
  },
  {
    id: 14,
    name: "Natural Blend Retro Cardigan",
    sub_name: "내추럴 블렌드 레트로 카디건",
    href: "#",
    price: "599,000원",
    imageSrc: product14,
    imageAlt: "",
    colors: [
      { name: "Blue", class: "bg-cb-1450", selectedClass: "ring-gray-900" },
    ],
    rating: 4.5,
    reviewCount: 16,
  },
  {
    id: 15,
    name: "W's R1® Thermal Full-Zip Hoody",
    sub_name: "우먼즈 R1 서멀 풀-집 후디",
    href: "#",
    price: "299,000원",
    imageSrc: product15,
    imageAlt: "",
    colors: [
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      { name: "Purple", class: "bg-cb-1500", selectedClass: "ring-gray-900" },
    ],
    rating: 0,
    reviewCount: 0,
  },
];

const product_color = {
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ShopComp() {
  const [selectedColor, setSelectedColor] = useState(product_color.colors[0]);
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const [visibleProducts, setVisibleProducts] = useState(11);

  const [checkedCategories, setCheckedCategories] = useState({});

  const handleCheckboxChange = (id) => {
    setCheckedCategories((prev) => ({
      ...prev,
      [id]: !prev[id], // 해당 카테고리의 체크 상태를 토글
    }));
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  const toggleSubCategory = (id) => {
    setOpenCategoryId((prevId) => (prevId === id ? null : id));
  };

  const handleColorChange = (productId, color) => {
    setSelectedColor((prevSelected) => ({
      ...prevSelected,
      [productId]: color,
    }));
  };

  const handleListToDeatil = (id) => {};

  const { moveToRead } = useCustomMove();

  return (
    <>
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-full px-2 py-8">
          <div className="flex justify-between ml-8 mb-10 w-40">
            <p className="text-md font-bold">Women's</p>
            <div className="mt-1">
              <img src={slide_icon} className="w-3 h-3"></img>
            </div>
            <p className="text-gray-700">모든상품</p>
          </div>
          <h1 className="text-7xl font-bold tracking-tight text-gray-900 text-left ml-6">
            Women's
          </h1>
        </div>
      </header>
      {/* Navbar */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white border-b border-gray-300">
          <div className="max-w-full px-0 sm:px-0 lg:px-0">
            <div className="flex h-12 items-center justify-between">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "text-black active-link"
                            : "text-gray-500 hover:text-black",
                          "px-3 py-2 text-sm font-medium relative"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Disclosure>
        <style jsx>{`
          /* Navigation underline styling */
          nav a.active-link {
            position: relative;
          }

          nav a.active-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 100%;
            height: 4px;
            background-color: black;
          }

          nav a:hover::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 100%;
            height: 2px;
            background-color: black;
          }

          /* Product image hover effect */
          .product-image-container {
            position: relative;
            overflow: hidden;
          }

          .product-image-container img {
            transition: opacity 0.3s ease-in-out;
          }

          .product-image-container:hover .product-image {
            opacity: 1;
          }

          /* Sub-items hover effect */
          .sub-item:hover {
            background-color: #f5f5f5;
            border-radius: 20px;
          }

          /* Checkbox and Radio button clicked effect */
          input[type="checkbox"]:checked,
          input[type="radio"]:checked {
            background-color: black;
          }
        `}</style>
      </div>
      <main>
        <div className="mx-auto max-w-full px-2 py-6 sm:px-2 lg:px-2">
          <div className="flex flex-row justify-center items-start space-x-6 py-16 px-2">
            {/* Category */}
            <ul
              role="list"
              className="w-full max-w-xs divide-y divide-gray-100 py-1 px-2 ml-8"
            >
              {category.map((category) => (
                <li
                  key={category.id}
                  className="w-full max-w-[18rem] divide-y divide-gray-100 p-2 ml-8"
                >
                  <div className="flex min-w-0 gap-x-4 items-center">
                    <div className="min-w-0 flex-auto py-2">
                      <div className="flex items-center justify-between">
                        {/* Category Name */}
                        <p className="text-lg font-semibold leading-6 text-gray-900 text-left">
                          {category.category}
                        </p>
                        <p className="text-xs font-semibold leading-6 text-gray-900 ml-16">
                          {category.sub_category}
                        </p>
                        {/* Toggle sub-items (SVG on the right) */}
                        <button
                          onClick={() => toggleSubCategory(category.id)}
                          className="ml-auto flex items-center justify-center w-10 h-10 rounded-full focus:outline-none"
                        >
                          <svg
                            className="w-4 h-4 stroke-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>
                      </div>

                      {/* Render sub-items if the category is open */}
                      {openCategoryId === category.id && (
                        <div className="mt-2 space-y-1">
                          {/* Check if the category is for checkboxes */}
                          {[
                            "사이즈",
                            "핏",
                            "제품 특징",
                            "소재 및 생산 과정",
                          ].includes(category.category) ? (
                            // Render checkboxes for specific categories
                            category.sub_items.map((sub_item) => (
                              <div className="flex justify-start sub-item py-2 px-1">
                                <CustomCheckbox
                                  key={sub_item.id}
                                  checked={!!checkedCategories[sub_item.id]} // 체크 상태
                                  onChange={() =>
                                    handleCheckboxChange(sub_item.id)
                                  } // 체크 상태 변경 핸들러
                                />
                                <span className="text-sm font-bold ml-4">
                                  {sub_item.content}
                                </span>
                              </div>
                            ))
                          ) : category.category === "상품 정렬" ? (
                            // Render radio buttons for "상품 정렬"
                            <RadioGroup
                              aria-label="상품 정렬"
                              className="space-y-1"
                            >
                              {category.sub_items.map((sub_item, index) => (
                                <div
                                  className="flex items-center space-x-2 px-2 py-2 cursor-pointer sub-item"
                                  onClick={() =>
                                    document
                                      .getElementById(
                                        `radio-${category.id}-${index}`
                                      )
                                      .click()
                                  }
                                >
                                  <input
                                    type="radio"
                                    name="product-sort"
                                    id={`radio-${category.id}-${index}`}
                                    className="hidden peer" // 기본 라디오 버튼 숨기기
                                  />
                                  <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center peer-checked:bg-black peer-checked:border-black">
                                    <div className="w-3 h-3 bg-white rounded-full hidden peer-checked:block"></div>
                                  </div>
                                  <span className="text-sm font-bold">
                                    {sub_item}
                                  </span>
                                </div>
                              ))}
                            </RadioGroup>
                          ) : category.category === "색상" ? (
                            // Render div for "색상"
                            <div className="flex flex-wrap space-x-2 mt-2">
                              <div>
                                <div className="flex justify-between gap-2">
                                  <div className="w-12 h-12 rounded-full border-solid border-2 border-gray-200 bg-ct-50" />
                                  <div className="w-12 h-12 rounded-full border-solid border-2 border-gray-200 bg-ct-100" />
                                  <div className="w-12 h-12 rounded-full border-solid border-2 border-gray-200 bg-ct-200" />
                                  <div className="w-12 h-12 rounded-full border-solid border-2 border-gray-200 bg-ct-300" />
                                </div>
                                <div className="flex justify-between gap-2 mt-2">
                                  <div className="w-12 h-12 rounded-full border-solid border-2 border-gray-200 bg-ct-400" />
                                  <div className="w-12 h-12 rounded-full border-solid border-2 border-gray-200 bg-ct-500" />
                                  <div className="w-12 h-12 rounded-full border-solid border-2 border-gray-200 bg-ct-600" />
                                  <div className="w-12 h-12 rounded-full border-solid border-2 border-gray-200 bg-ct-700" />
                                </div>
                                <div className="flex justify-between gap-2 mt-2">
                                  <div className="w-12 h-12 rounded-full border-solid border-2 border-gray-200 bg-ct-800" />
                                  <div className="w-12 h-12 rounded-full border-solid border-2 border-gray-200 bg-ct-900" />
                                  <div className="w-12 h-12 rounded-full border-solid border-2 border-gray-200 bg-ct-950" />
                                  <div className="w-12 h-12 rounded-full border-solid border-2 border-gray-200 bg-ct-1000" />
                                </div>
                              </div>
                            </div>
                          ) : (
                            // Render simple list items for other categories
                            category.sub_items.map((sub_item, index) => (
                              <div
                                key={index}
                                className="text-sm font-bold p-2 rounded cursor-pointer transition-colors hover:bg-slate-50 sub-item"
                              >
                                {sub_item}
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* Product */}
            <div className="bg-white">
              <div className="mx-auto max-w-full px-0 py-6 sm:px-6 sm:py-6 lg:max-w-full lg:px-0">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                  {products.slice(0, visibleProducts).map((product) => (
                    <div
                      key={product.id}
                      className="group relative product-image-container"
                    >
                      <div
                        onClick={() => {
                          moveToRead(product.id);
                        }}
                      >
                        <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                          <img
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="h-full w-full object-cover object-center product-image transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-80"
                          />
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                            <button>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0398 20.4217C9.43508 17.8138 6.99606 15.3748 4.40603 12.7847C3.20165 11.5875 2.75895 10.2667 2.80296 9.02974C2.84761 7.77503 3.39628 6.55167 4.27244 5.59641C5.14865 4.64109 6.32022 3.98898 7.56451 3.83514C8.79109 3.68348 10.1398 4.00831 11.4248 5.09612L11.9296 5.52346L12.4442 5.108C15.7557 2.43458 20.8659 4.3423 21.1822 8.56343C21.3072 10.2429 20.7751 11.6392 19.5807 12.8301C18.5698 13.8689 17.5278 14.8942 16.4787 15.9263C14.9818 17.3992 13.4705 18.8861 12.0398 20.4217Z"
                                  stroke="black"
                                  strokeWidth="1.6"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
                      <p className="mt-1 ml-1 text-md text-gray-700 font-bold">
                        {product.sub_name}
                      </p>

                      <div className="mt-4 ml-2">
                        <fieldset aria-label="Choose a color" className="mt-4">
                          <RadioGroup
                            value={selectedColor[product.id]}
                            onChange={(color) =>
                              handleColorChange(product.id, color)
                            }
                            className="flex items-center space-x-3"
                          >
                            {product.colors.map((color) => (
                              <Radio
                                key={color.name}
                                value={color}
                                aria-label={color.name}
                                className={classNames(
                                  color.selectedClass,
                                  "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-2 ring-offset-1"
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
                      <p className="mt-3 ml-1 text-lg font-bold text-gray-900">
                        {product.price}
                      </p>

                      <ReviewStars
                        rating={product.rating}
                        reviewCount={product.reviewCount}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {visibleProducts < products.length && (
                <div className="flex justify-center items-center mr-28">
                  <button
                    type="button"
                    onClick={loadMoreProducts}
                    className="font-bold text-lg text-white ml-8 bg-gray-900 mt-4 px-20 py-4 rounded-full hover:scale-110 transition-transform duration-300"
                  >
                    더보기
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ShopComp;
