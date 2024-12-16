import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cartReducer";
import { selectProducts } from "../../redux/reducer"; // 제품 목록에서 아이템 가져오기

import product1 from "../../assets/images/product1.jpg";
import foot_icon1 from "../../assets/images/icons_organic.png";
import foot_icon2 from "../../assets/images/icons_fairTrade2.png";
import foot_icon3 from "../../assets/images/icons_recycled2.png";
import foot_icon4 from "../../assets/images/icons_hemp.png";
import foot_icon5 from "../../assets/images/for-the-planet.png";
import sletter from "../../assets/images/ybonsletter.png";
import { Link } from "react-router-dom";

function CartComp() {
  const cart = useSelector(selectCart); // Redux에서 장바구니 아이템 가져오기
  const products = useSelector(selectProducts); // products는 전체 제품 목록

  // cart에 담긴 제품들의 정보를 가져오기
  const cartItems = cart.map((id) =>
    products.find((product) => product.id === id)
  );

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const total = cartItems.reduce((acc, product) => acc + product.price2, 0);
      setTotalPrice(total);
    }
  }, [cartItems]); // cartItems가 업데이트 될 때마다 totalPrice 계산

  const formattedPrice = totalPrice.toLocaleString("ko-KR") + "원";
  const [open, setOpen] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const [isTextVisible1, setIsTextVisible1] = useState(true);

  const [checkedCarts, setCheckedCarts] = useState({});

  const handleCheckboxChange2 = (id) => {
    setCheckedCarts((prev) => ({
      ...prev,
      [id]: !prev[id], // 해당 카테고리의 체크 상태를 토글
    }));
  };

  const toggleTextVisibility1 = () => {
    setIsTextVisible1(!isTextVisible1);
    setIsTextVisible2(false);
    setIsTextVisible3(false);
    setIsTextVisible4(false);
  };

  const [isTextVisible2, setIsTextVisible2] = useState(false);

  const toggleTextVisibility2 = () => {
    setIsTextVisible1(false);
    setIsTextVisible2(!isTextVisible2);
    setIsTextVisible3(false);
    setIsTextVisible4(false);
  };

  const [isTextVisible3, setIsTextVisible3] = useState(false);

  const toggleTextVisibility3 = () => {
    setIsTextVisible1(false);
    setIsTextVisible2(false);
    setIsTextVisible3(!isTextVisible3);
    setIsTextVisible4(false);
  };

  const [isTextVisible4, setIsTextVisible4] = useState(false);

  const toggleTextVisibility4 = () => {
    setIsTextVisible1(false);
    setIsTextVisible2(false);
    setIsTextVisible3(false);
    setIsTextVisible4(!isTextVisible4);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="mt-8 mb-8">
      <div className="font-bold text-5xl ml-10 mb-16 mt-15">
        <p>장바구니</p>
      </div>
      <div className="flex justify-between">
        <div className="h-full">
          <div className="flex justify-between max-w-screen-xl">
            <div className="ml-6 mb-4">
              <label className="inline-flex items-center px-4 py-2 text-lg text-gray-900">
                <div
                  className={`h-6 w-6 border-2 border-gray-900 rounded flex items-center justify-center cursor-pointer ${
                    isChecked ? "bg-black" : "bg-white"
                  }`}
                  onClick={handleCheckboxChange}
                >
                  {isChecked && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </div>

                <span
                  className="ml-2 cursor-pointer"
                  onClick={handleCheckboxChange}
                >
                  전체선택
                </span>
              </label>
            </div>

            <div>
              <button
                type="button"
                className="font-bold text-lg text-black ml-8 bg-white border-solid border-black border-4 px-10 py-1 rounded-full"
              >
                선택 삭제
              </button>
            </div>
          </div>
          <div className="flow-root min-h-full">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartItems.length > 0 ? (
                cartItems.map((product) =>
                  product ? ( // product가 null일 가능성 처리
                    <li
                      key={product.id}
                      className="flex ml-12 mb-4 py-6 w-aauto h-auto"
                    >
                      <div>
                        <div className="mb-4">
                          <label className="inline-flex items-center px-2 py-2 text-lg text-gray-900">
                            <div
                              className={`h-6 w-6 border-2 border-gray-900 rounded flex items-center justify-center cursor-pointer ${
                                isChecked ? "bg-black" : "bg-white"
                              }`}
                              onClick={handleCheckboxChange}
                            >
                              {isChecked && (
                                <svg
                                  className="w-4 h-4 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              )}
                            </div>
                            <span
                              className="ml-2 cursor-pointer"
                              onClick={handleCheckboxChange}
                            >
                              {/* 여기에 필요하면 전체 선택 관련 내용 추가 */}
                            </span>
                          </label>
                        </div>

                        <div className="flex justify-between">
                          <div className="flex space-x-4">
                            <div
                              key={0}
                              className="h-72 w-60 flex-shrink-0 overflow-hidden border border-gray-200"
                            >
                              <img
                                alt={product.images[0].alt}
                                src={product.images[0].src}
                                className="h-full w-full object-center"
                              />
                            </div>
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between">
                                <div className="pr-32">
                                  <div className="flex justify-between text-xl font-extrabold text-gray-700 mb-1">
                                    <a href={product.href}>{product.name}</a>
                                  </div>
                                  <div className="flex justify-between text-lg font-extrabold text-gray-500 mb-1 ml-2">
                                    {product.koName}
                                  </div>
                                </div>
                                <div className="flex justify-between text-xl font-extrabold text-gray-900 mb-1 ml-2">
                                  {product.price}
                                </div>
                              </div>
                              <div className="flex justify-between text-md font-medium text-gray-800 mb-1 ml-2">
                                {product.style_num}
                              </div>
                              <div className="flex justify-between text-md font-medium text-gray-800 mb-1 ml-2">
                                Color: Ink Black (INBK)
                              </div>
                              <div className="flex justify-between text-md font-medium text-gray-800 mb-1 ml-2">
                                Size: XS
                              </div>
                            </div>
                            <div className="flex justify-between text-md font-medium text-gray-800 mb-1 ml-2">
                              <span className="underline">Qty: 1</span>
                            </div>

                            <div className="mt-20 ml-72">
                              <button
                                type="button"
                                className="font-bold text-lg text-white ml-8 bg-gray-900 px-10 py-2 rounded-full"
                                // 바로구매 핸들러
                              >
                                바로구매
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li key={Math.random()}>
                      해당 제품 정보를 찾을 수 없습니다.
                    </li>
                  )
                )
              ) : (
                <div className="ml-12 text-lg text-gray-600">
                  장바구니가 비어 있습니다.
                </div>
              )}
            </ul>
          </div>

          {/* foot */}
          <div className="font-bold text-4xl ml-10 mb-12 mt-32">
            <p>Order Footprint</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex justify-between w-60 ml-10">
              <div
                className="bg-white border-black border-solid border-4 w-14 h-14 rounded-full cursor-pointer"
                onClick={toggleTextVisibility1}
              >
                <img src={foot_icon1} className="w-14 h-14 py-1" alt="Icon 1" />
              </div>
              <div
                className="bg-white border-black border-solid border-4 w-14 h-14 rounded-full cursor-pointer"
                onClick={toggleTextVisibility2}
              >
                <img src={foot_icon2} className="w-14 h-14 py-1" alt="Icon 2" />
              </div>
              <div
                className="bg-white border-black border-solid border-4 w-14 h-14 rounded-full cursor-pointer"
                onClick={toggleTextVisibility3}
              >
                <img src={foot_icon3} className="w-14 h-14 py-1" alt="Icon 3" />
              </div>
              <div
                className="bg-white border-black border-solid border-4 w-14 h-14 rounded-full cursor-pointer"
                onClick={toggleTextVisibility4}
              >
                <img src={foot_icon4} className="w-14 h-14 py-1" alt="Icon 4" />
              </div>
            </div>

            {/* 글씨가 보이는 부분 */}
            {isTextVisible1 && (
              <div className="mt-4 ml-12 mb-8 text-xl">
                <p className="font-bold">Organic</p>
                <p>
                  Fair Trade 전체 라인 중 87%가 공정 무역(Fair Trade Certified™)
                  봉제 제품입니다.
                </p>
              </div>
            )}

            {isTextVisible2 && (
              <div className="mt-4 ml-12 mb-8 text-xl">
                <p className="font-bold">Fair Trade</p>
                <p>Recycled</p>
              </div>
            )}

            {isTextVisible3 && (
              <div className="mt-4 ml-12 mb-8 text-xl">
                <p className="font-bold">Recycled</p>
                <p>전체 라인 중 87%가 리사이클 소재입니다.</p>
              </div>
            )}

            {isTextVisible4 && (
              <div className="mt-4 ml-12 mb-8 text-xl">
                <p className="font-bold">Hemp</p>
                <p>Hemp 이번 시즌에 37개 스타일에서 헴프를 사용했습니다.</p>
              </div>
            )}
          </div>

          <div className="flex justify-between  bg-gray-100 ml-10 mt-4 px-4 py-6 rounded-lg max-w-screen-xl">
            <div className="ml-4">
              <img src={foot_icon5} className="w-28 h-12"></img>
            </div>
            <div className="flex justify-between gap-4 ml-2 mt-3">
              <div className="text-lg ">
                <p>
                  구매하신 금액의 1%는 풀뿌리 환경단체에 지원금으로 전달됩니다.
                </p>
              </div>
              <div className="text-lg font-bold">
                <p>Learn More</p>
              </div>
            </div>
          </div>
        </div>
        {/* 결제 창 */}
        <div className="bg-black w-2/5 rounded-lg py-4 px-2 ml-4 mr-8 h-2/5 hidden xl:flex">
          <div className="ml-24">
            <div className="text-white font-bold text-xl ml-4 py-4">
              <p>전체합계</p>
            </div>
            <div className="text-white font-semibold text-md ml-4 mt-6 flex justify-between w-96">
              <p>총 상품금액</p>
              <p>{totalPrice.toLocaleString("ko-KR")}원</p>
            </div>
            <div className="text-white font-semibold text-md ml-4 mt-4 flex justify-between w-96">
              <p>총 할인금액</p>
              <p>0원</p>
            </div>
            <div className="text-white font-semibold text-md ml-4 mt-4 flex justify-between w-96">
              <p>총 배송비</p>
              <p>0원</p>
            </div>

            <div className="py-4 px-2 ml-4 text-white w-96">
              <hr></hr>
            </div>

            <div className="text-white font-semibold text-md ml-4 mt-6 flex justify-between w-96">
              <p>총 결제 예정 금액</p>
              <p>{totalPrice.toLocaleString("ko-KR")}원</p>
            </div>

            <div className="mt-8 mb-4">
              <button
                type="button"
                className="font-bold text-lg text-white ml-20 bg-cb-1000 border-solid border-cb-1000  border-4 px-10 py-1 rounded-full"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;구매하기&nbsp;&nbsp;&nbsp;
              </button>
            </div>
            <div className="mt-4 mb-4">
              <Link to={"/shop"}>
                <button
                  type="button"
                  className="font-bold text-lg text-white ml-20 bg-black border-solid border-white border-4 px-10 py-1 rounded-full"
                >
                  쇼핑 계속하기
                </button>
              </Link>
            </div>

            <div>
              <img src={sletter} className="w-96 h-80"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartComp;
