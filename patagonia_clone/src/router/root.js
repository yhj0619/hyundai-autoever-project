import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import LayoutComp from "../layout/LayoutComp";

const Main = lazy(() => import("../components/home/MainComp"));
const Detail = lazy(() => import("../components/detail/DetailComp"));
const Cart = lazy(() => import("../components/cart/CartComp"));
const Map = lazy(() => import("../components/map/MapComp"));
const Shop = lazy(() => import("../components/shop/ShopComp"));

const loading = (
  <div className="bg-white text-black flex justify-center items-center">
    loading...
  </div>
);

const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={loading}>
        <LayoutComp />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={loading}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "shop",
        element: (
          <Suspense fallback={loading}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "detail/:id",
        element: (
          <Suspense fallback={loading}>
            <Detail />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={loading}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "map",
        element: (
          <Suspense fallback={loading}>
            <Map />
          </Suspense>
        ),
      },
    ],
  },
]);

export default root;
