import React from "react";
import { Outlet } from "react-router-dom";
import FooterComp from "./FooterComp";
import NavbarComp from "./NavbarComp";

function LayoutComp() {
  return (
    <>
      <NavbarComp />
      <main>
        <Outlet />
      </main>
      <FooterComp />
    </>
  );
}

export default LayoutComp;
