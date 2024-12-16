import { NavLink } from "react-router-dom";
import React from "react";
import { Router, Link } from "react-router-dom";

function NavbarComp() {
  return (
    <nav>
      <div className="bg-black ">
        <div className="flex justify-around px-4">
          <div>&nbsp;</div>
          <nav className="container mx-auto flex justify-center px-4 md:px-0 text-white">
            <h1>
              <div
                className="font-bold h-full flex justify-center items-center text-center"
                style={{ fontSize: "1.2rem", height: "4.8rem" }}
              >
                {/* 추석 연휴 배송 안내 */}
              </div>
            </h1>
          </nav>
          <div className="hidden md:flex text-white pr-40">
            <Link
              to={"/map"}
              className="font-bold flex justify-center items-center h-full text-center"
              style={{
                fontSize: "1.2rem",
                padding: "0 20px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                class="fa-solid fa-location-dot"
                style={{ marginRight: "8px" }}
              ></i>
              매장찾기
            </Link>
          </div>
        </div>
        <nav>
          <div className="flex justify-around bg-white">
            <div className="hidden md:flex justify-center items-center">
              <Link to={"/"}>
                <img
                  src={require("../assets/images/logo_patagonia.jpg")}
                  alt="logo_patagonia"
                />
              </Link>
            </div>
            <ul className="flex justify-center items-center pl-2">
              <li className="p-2 md:p-5 block md:hidden">
                <i class="fa-solid fa-bars"></i>
              </li>
              <li className="p-2 md:p-5 block md:hidden">
                <i class="fa-solid fa-magnifying-glass"></i>
              </li>
            </ul>
            <ul className="before_list flex justify-center items-center pr-36">
              <li className="h-full relative flex justify-center items-center">
                <NavLink
                  to={""}
                  className="font-semibold hidden md:block py-2 text-black relative"
                  style={{ padding: "0 3rem" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="h-full relative flex justify-center items-center">
                <NavLink
                  to="/Shop"
                  className="font-semibold hidden md:block py-2 text-black relative"
                  style={{ padding: "0 3rem" }}
                >
                  Shop
                </NavLink>
              </li>
              <li className="h-full relative flex justify-center items-center">
                <NavLink
                  to="/cart"
                  className="font-semibold hidden md:block py-2 text-black relative"
                  style={{ padding: "0 3rem" }}
                >
                  Cart
                </NavLink>
              </li>
              <li className="h-full relative flex justify-center items-center">
                <NavLink
                  to="/map"
                  className="font-semibold hidden md:block py-2 text-black relative"
                  style={{ padding: "0 3rem" }}
                >
                  Map
                </NavLink>
              </li>
            </ul>
            <div className="flex md:hidden justify-center items-center">
              <Link to={"/"}>
                <img
                  src={require("../assets/images/logo_patagonia.jpg")}
                  alt="logo_patagonia"
                />
              </Link>
            </div>
            <div className="text-black block py-2 pr-2 md:pr-8">
              <ul className="flex justify-center items-center cursor-pointer">
                <li className="p-2 md:p-5 hidden md:block">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </li>
                <li className="p-2 md:p-5">
                  <i class="fa-regular fa-user"></i>
                </li>
                <li className="p-2 md:p-5">
                  <i class="fa-regular fa-heart"></i>
                </li>
                <li className="p-2 md:p-5">
                  <Link to={"/cart"}>
                    <i class="fa-solid fa-cart-shopping"></i>
                  </Link>
                </li>
                <li className="p-2 md:p-5 hidden md:block">
                  <i class="fa-solid fa-bars"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}

export default NavbarComp;
