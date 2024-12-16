import { createSlice } from "@reduxjs/toolkit";

import hoody1 from "../assets/images/detail/detail_description/hoody1.jpg";
import hoody2 from "../assets/images/detail/detail_description/hoody2.jpg";
import hoody3 from "../assets/images/detail/detail_description/hoody3.jpg";
import icon1 from "../assets/images/icon-chevron-slider.png";
import icon2 from "../assets/images/ff-icon-black.jpg";
import icon3 from "../assets/images/icon_pop_close_white.png";
import icon4 from "../assets/images/bg_arrow_down.jpg";
import search from "../assets/images/icon-search-point.png";
import impact1 from "../assets/images/detail/impact/impact1.png";
import impact2 from "../assets/images/detail/impact/impact2.png";
import impact3 from "../assets/images/detail/impact/impact3.jpeg";
import map from "../assets/images/detail/impact/map.jpg";

import review0 from "../assets/images/detail/review/review0.webp";
import review1 from "../assets/images/detail/review/review1.webp";
import review2 from "../assets/images/detail/review/review2.webp";
import review3 from "../assets/images/detail/review/review3.webp";
import review4 from "../assets/images/detail/review/review4.webp";
import review5 from "../assets/images/detail/review/review5.webp";
import review6 from "../assets/images/detail/review/review6.webp";
import review7 from "../assets/images/detail/review/review7.jpg";

import snowbelle1 from "../assets/images/detail/snowbelle1.jpg";
import snowbelle2 from "../assets/images/detail/snowbelle2.jpg";
import snowbelle3 from "../assets/images/detail/snowbelle3.jpg";
import Bandana1 from "../assets/images/detail/Bandana1.jpg";
import Bandana2 from "../assets/images/detail/Bandana2.jpg";
import Bandana3 from "../assets/images/detail/Bandana3.jpg";

import beanie from "../assets/images/detail/beanie.jpg";

const productList = [
  {
    id: 1,
    name: "'73 Skyline Uprisal Hoody",
    koName: "73 스카이라인 업라이절 후디",
    price: "159,000원",
    price2: 159000,
    style_num: "39678P7",
    href: "#",
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
    iconImage: [
      { src: icon1 },
      { src: icon2 },
      { src: icon3 },
      { src: icon4 },
      { src: "" },
      { src: search },
    ],
    impactImage: [
      { src: impact1 },
      { src: impact2 },
      { src: impact3 },
      { src: map },
    ],
    reviewImage: [
      {
        src: review0,
        goods: "아주 좋아요",
        date: "2023.11.7",
        content:
          "파타고니아 너무 마음에 듭니다. 사이즈는 정사이즈 같아요. 재질이 추운날 입기 좋아보입니다",
        writer: "kickbo*****",
        height: "160~164cm",
        weight: "45~49kg",
        howTo: "일상복",
        size: "XS",
        grade: "일반회원",
      },
      {
        src: review1,
        goods: "아주 좋아요",
        date: "2024.9.1",
        content:
          "73 스카이라인 약간 빈티지 하면서 심플한게 아주 맘에 들어요 파타고니아 화이팅입니다.",
        writer: "sunhw****",
        height: "165~169cm",
        weight: "65~69kg",
        howTo: "일상복",
        size: " M",
        grade: "일반회원",
      },
      {
        src: review2,
        goods: "아주 좋아요",
        date: "2023.10.15",
        content:
          "미리 겨울 대비해서 구매했습니다 사이즈도 잘맞고 두툼한 편이네요 좋아요",
        writer: "nto****",
        height: "175~179cm",
        weight: "75~79kg",
        howTo: "일상복",
        size: " L",
        grade: "일반회원",
      },
      {
        src: review3,
        goods: "아주 좋아요",
        date: "2023.12.18",
        content:
          "속에서 털 같은게 다름 옷에 묻어 나와서 어찌해야 할지? 모르겠어요? 한 번 한 시간 정도 입었는데? 바지에 털이 묻어 나와요!!!",
        writer: "jeongl****",
        height: "150~154cm",
        weight: "44kg 이하",
        howTo: "일상복",
        size: "XS",
        grade: "일반회원",
      },
      {
        src: review4,
        goods: "아주 좋아요",
        date: "2023.10.24",
        content:
          "색상도 그렇고 사이즈도 딱 맞고 잘 입을 거 같습니다 모니터로 보기보다 이쁩니다",
        writer: "corona1****",
      },
      {
        src: review5,
        goods: "아주 좋아요",
        date: "2023.8.27",
        content:
          "사이즈 정사이즈 제가 키가 커서 팔이 맞는 제품 찾기가 힘든데 딱이네요^^",
        writer: "slr1****",
        height: "185~189cm",
        weight: "80~84kg",
        howTo: "일상복",
        size: "XL",
        grade: "일반회원",
      },
      {
        src: review6,
        goods: "아주 좋아요",
        date: "2023.11.7",
        content:
          "73 스카이라인 약간 빈티지 하면서 심플한게 아주 맘에 들어요 파타고니아 화이팅입니다.",
        writer: "kickbo*****",
        height: "160~164cm",
        weight: "45~49kg",
        howTo: "일상복",
        size: "XS",
        grade: "일반회원",
      },
      {
        src: review7,
        goods: "아주 좋아요",
        date: "2023.11.7",
        content:
          "마감도 깔끔하고 전체적인 퀄리티가 좋아요. 재생소재로 만든 의류라서 완전 흰색은 아니고 은은한 아이보리색인데 그래서 더 맘에 듭니다",
        writer: "kickbo*****",
        height: "160~164cm",
        weight: "65~69kg",
        howTo: "일상복",
        size: " M",
        grade: "일반회원",
      },
    ],

    colors: [
      { name: "Ink Black", class: "bg-black", selectedClass: "ring-gray-950" },
      {
        name: "Stormy Mauve",
        class: "bg-[#9D848E]",
        selectedClass: "ring-gray-950",
      },
    ],
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: false },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
  },
  {
    id: 2,
    name: "Snowbelle Beanie",
    koName: "스노우벨 비니",
    price: "89,000원",
    price2: 89000,
    href: "#",
    images: [
      {
        src: snowbelle1,
        alt: "Offset Dot: Burnished Red",
      },
      {
        src: snowbelle2,
      },
      {
        src: snowbelle3,
      },
    ],
    iconImage: [
      { src: icon1 },
      { src: icon2 },
      { src: icon3 },
      { src: icon4 },
      { src: "" },
      { src: search },
    ],
    impactImage: [
      { src: impact1 },
      { src: impact2 },
      { src: impact3 },
      { src: map },
    ],
    reviewImage: [
      {
        src: review0,
        goods: "아주 좋아요",
        date: "2023.11.7",
        content:
          "파타고니아 너무 마음에 듭니다. 사이즈는 정사이즈 같아요. 재질이 추운날 입기 좋아보입니다",
        writer: "kickbo*****",
        height: "160~164cm",
        weight: "45~49kg",
        howTo: "일상복",
        size: "XS",
        grade: "일반회원",
      },
      {
        src: review1,
        goods: "아주 좋아요",
        date: "2024.9.1",
        content:
          "73 스카이라인 약간 빈티지 하면서 심플한게 아주 맘에 들어요 파타고니아 화이팅입니다.",
        writer: "sunhw****",
        height: "165~169cm",
        weight: "65~69kg",
        howTo: "일상복",
        size: " M",
        grade: "일반회원",
      },
      {
        src: review2,
        goods: "아주 좋아요",
        date: "2023.10.15",
        content:
          "미리 겨울 대비해서 구매했습니다 사이즈도 잘맞고 두툼한 편이네요 좋아요",
        writer: "nto****",
        height: "175~179cm",
        weight: "75~79kg",
        howTo: "일상복",
        size: " L",
        grade: "일반회원",
      },
      {
        src: review3,
        goods: "아주 좋아요",
        date: "2023.12.18",
        content:
          "속에서 털 같은게 다름 옷에 묻어 나와서 어찌해야 할지? 모르겠어요? 한 번 한 시간 정도 입었는데? 바지에 털이 묻어 나와요!!!",
        writer: "jeongl****",
        height: "150~154cm",
        weight: "44kg 이하",
        howTo: "일상복",
        size: "XS",
        grade: "일반회원",
      },
      {
        src: review4,
        goods: "아주 좋아요",
        date: "2023.10.24",
        content:
          "색상도 그렇고 사이즈도 딱 맞고 잘 입을 거 같습니다 모니터로 보기보다 이쁩니다",
        writer: "corona1****",
      },
      {
        src: review5,
        goods: "아주 좋아요",
        date: "2023.8.27",
        content:
          "사이즈 정사이즈 제가 키가 커서 팔이 맞는 제품 찾기가 힘든데 딱이네요^^",
        writer: "slr1****",
        height: "185~189cm",
        weight: "80~84kg",
        howTo: "일상복",
        size: "XL",
        grade: "일반회원",
      },
      {
        src: review6,
        goods: "아주 좋아요",
        date: "2023.11.7",
        content:
          "73 스카이라인 약간 빈티지 하면서 심플한게 아주 맘에 들어요 파타고니아 화이팅입니다.",
        writer: "kickbo*****",
        height: "160~164cm",
        weight: "45~49kg",
        howTo: "일상복",
        size: "XS",
        grade: "일반회원",
      },
      {
        src: review7,
        goods: "아주 좋아요",
        date: "2023.11.7",
        content:
          "마감도 깔끔하고 전체적인 퀄리티가 좋아요. 재생소재로 만든 의류라서 완전 흰색은 아니고 은은한 아이보리색인데 그래서 더 맘에 듭니다",
        writer: "kickbo*****",
        height: "160~164cm",
        weight: "65~69kg",
        howTo: "일상복",
        size: " M",
        grade: "일반회원",
      },
    ],
    colors: [
      {
        name: "Offset Dot: Burnished Red",
        class: "bg-[#884332]",
        selectedClass: "ring-gray-950",
      },
    ],
    sizes: [{ name: "ALL", inStock: true }],
  },
  {
    id: 3,
    name: "Fisherman's Rolled Beanie",
    koName: "피셔맨즈 롤드 비니",
    price: "69,000원",
    price2: 69000,
    href: "#",
    images: [
      {
        src: beanie,
      },
    ],
    iconImage: [
      { src: icon1 },
      { src: icon2 },
      { src: icon3 },
      { src: icon4 },
      { src: "" },
      { src: search },
    ],
    impactImage: [
      { src: impact1 },
      { src: impact2 },
      { src: impact3 },
      { src: map },
    ],
    reviewImage: [
      {
        src: review0,
        goods: "아주 좋아요",
        date: "2023.11.7",
        content:
          "파타고니아 너무 마음에 듭니다. 사이즈는 정사이즈 같아요. 재질이 추운날 입기 좋아보입니다",
        writer: "kickbo*****",
        height: "160~164cm",
        weight: "45~49kg",
        howTo: "일상복",
        size: "XS",
        grade: "일반회원",
      },
      {
        src: review1,
        goods: "아주 좋아요",
        date: "2024.9.1",
        content:
          "73 스카이라인 약간 빈티지 하면서 심플한게 아주 맘에 들어요 파타고니아 화이팅입니다.",
        writer: "sunhw****",
        height: "165~169cm",
        weight: "65~69kg",
        howTo: "일상복",
        size: " M",
        grade: "일반회원",
      },
      {
        src: review2,
        goods: "아주 좋아요",
        date: "2023.10.15",
        content:
          "미리 겨울 대비해서 구매했습니다 사이즈도 잘맞고 두툼한 편이네요 좋아요",
        writer: "nto****",
        height: "175~179cm",
        weight: "75~79kg",
        howTo: "일상복",
        size: " L",
        grade: "일반회원",
      },
      {
        src: review3,
        goods: "아주 좋아요",
        date: "2023.12.18",
        content:
          "속에서 털 같은게 다름 옷에 묻어 나와서 어찌해야 할지? 모르겠어요? 한 번 한 시간 정도 입었는데? 바지에 털이 묻어 나와요!!!",
        writer: "jeongl****",
        height: "150~154cm",
        weight: "44kg 이하",
        howTo: "일상복",
        size: "XS",
        grade: "일반회원",
      },
      {
        src: review4,
        goods: "아주 좋아요",
        date: "2023.10.24",
        content:
          "색상도 그렇고 사이즈도 딱 맞고 잘 입을 거 같습니다 모니터로 보기보다 이쁩니다",
        writer: "corona1****",
      },
      {
        src: review5,
        goods: "아주 좋아요",
        date: "2023.8.27",
        content:
          "사이즈 정사이즈 제가 키가 커서 팔이 맞는 제품 찾기가 힘든데 딱이네요^^",
        writer: "slr1****",
        height: "185~189cm",
        weight: "80~84kg",
        howTo: "일상복",
        size: "XL",
        grade: "일반회원",
      },
      {
        src: review6,
        goods: "아주 좋아요",
        date: "2023.11.7",
        content:
          "73 스카이라인 약간 빈티지 하면서 심플한게 아주 맘에 들어요 파타고니아 화이팅입니다.",
        writer: "kickbo*****",
        height: "160~164cm",
        weight: "45~49kg",
        howTo: "일상복",
        size: "XS",
        grade: "일반회원",
      },
      {
        src: review7,
        goods: "아주 좋아요",
        date: "2023.11.7",
        content:
          "마감도 깔끔하고 전체적인 퀄리티가 좋아요. 재생소재로 만든 의류라서 완전 흰색은 아니고 은은한 아이보리색인데 그래서 더 맘에 듭니다",
        writer: "kickbo*****",
        height: "160~164cm",
        weight: "65~69kg",
        howTo: "일상복",
        size: " M",
        grade: "일반회원",
      },
    ],
    colors: [
      {
        name: "Crisp Grey",
        class: "bg-[#C3C2C3]",
        selectedClass: "ring-gray-950",
      },
      {
        name: "Madder Red",
        class: "bg-[#262A3A]",
        selectedClass: "ring-gray-950",
      },
      {
        name: "Navy Blue",
        class: "bg-[#262A3A]",
        selectedClass: "ring-gray-950",
      },
    ],
    sizes: [{ name: "ALL", inStock: true }],
  },
  {
    id: 4,
    name: "Bandana",
    koName: "밴대나",
    price: "35,000원",
    price2: 35000,
    href: "#",
    images: [
      {
        src: Bandana1,
        alt: "Ink Black",
      },
      {
        src: Bandana2,
        alt: "Across Oceans: Smolder Blue",
      },
      {
        src: Bandana3,
        alt: "Across Oceans: Smolder Blue",
      },
    ],
    iconImage: [
      { src: icon1 },
      { src: icon2 },
      { src: icon3 },
      { src: icon4 },
      { src: "" },
      { src: search },
    ],
    impactImage: [
      { src: impact1 },
      { src: impact2 },
      { src: impact3 },
      { src: map },
    ],
    reviewImage: [
      {
        src: review0,
        goods: "아주 좋아요",
        date: "2023.11.7",
        content:
          "파타고니아 너무 마음에 듭니다. 사이즈는 정사이즈 같아요. 재질이 추운날 입기 좋아보입니다",
        writer: "kickbo*****",
        height: "160~164cm",
        weight: "45~49kg",
        howTo: "일상복",
        size: "XS",
        grade: "일반회원",
      },
      {
        src: review1,
        goods: "아주 좋아요",
        date: "2024.9.1",
        content:
          "73 스카이라인 약간 빈티지 하면서 심플한게 아주 맘에 들어요 파타고니아 화이팅입니다.",
        writer: "sunhw****",
        height: "165~169cm",
        weight: "65~69kg",
        howTo: "일상복",
        size: " M",
        grade: "일반회원",
      },
      {
        src: review2,
        goods: "아주 좋아요",
        date: "2023.10.15",
        content:
          "미리 겨울 대비해서 구매했습니다 사이즈도 잘맞고 두툼한 편이네요 좋아요",
        writer: "nto****",
        height: "175~179cm",
        weight: "75~79kg",
        howTo: "일상복",
        size: " L",
        grade: "일반회원",
      },
      {
        src: review3,
        goods: "아주 좋아요",
        date: "2023.12.18",
        content:
          "속에서 털 같은게 다름 옷에 묻어 나와서 어찌해야 할지? 모르겠어요? 한 번 한 시간 정도 입었는데? 바지에 털이 묻어 나와요!!!",
        writer: "jeongl****",
        height: "150~154cm",
        weight: "44kg 이하",
        howTo: "일상복",
        size: "XS",
        grade: "일반회원",
      },
      {
        src: review4,
        goods: "아주 좋아요",
        date: "2023.10.24",
        content:
          "색상도 그렇고 사이즈도 딱 맞고 잘 입을 거 같습니다 모니터로 보기보다 이쁩니다",
        writer: "corona1****",
      },
      {
        src: review5,
        goods: "아주 좋아요",
        date: "2023.8.27",
        content:
          "사이즈 정사이즈 제가 키가 커서 팔이 맞는 제품 찾기가 힘든데 딱이네요^^",
        writer: "slr1****",
        height: "185~189cm",
        weight: "80~84kg",
        howTo: "일상복",
        size: "XL",
        grade: "일반회원",
      },
      {
        src: review6,
        goods: "아주 좋아요",
        date: "2023.11.7",
        content:
          "73 스카이라인 약간 빈티지 하면서 심플한게 아주 맘에 들어요 파타고니아 화이팅입니다.",
        writer: "kickbo*****",
        height: "160~164cm",
        weight: "45~49kg",
        howTo: "일상복",
        size: "XS",
        grade: "일반회원",
      },
      {
        src: review7,
        goods: "아주 좋아요",
        date: "2023.11.7",
        content:
          "마감도 깔끔하고 전체적인 퀄리티가 좋아요. 재생소재로 만든 의류라서 완전 흰색은 아니고 은은한 아이보리색인데 그래서 더 맘에 듭니다",
        writer: "kickbo*****",
        height: "160~164cm",
        weight: "65~69kg",
        howTo: "일상복",
        size: " M",
        grade: "일반회원",
      },
    ],
    colors: [
      {
        name: "Smolder Blue",
        class: "bg-[283243]",
        selectedClass: "ring-gray-950",
      },
      {
        name: "Terrain Green",
        class: "bg-[#5D7514]",
        selectedClass: "ring-gray-950",
      },
    ],
    sizes: [{ name: "ALL", inStock: true }],
  },
];

const reducer = createSlice({
  name: "products",
  initialState: productList,
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});
export const { setProducts } = reducer.actions;
export const selectProducts = (state) => state.products;
export default reducer.reducer;
