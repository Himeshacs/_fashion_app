import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import CustomCircularProgress from "../components/spinner/CustomCircularProgress";

const LazyHome = lazy(() =>
  import("../pages/home/Home").then((module) => ({ default: module.Home }))
);
const LazyProducts = lazy(() =>
  import("../pages/products/products").then((module) => ({
    default: module.Products,
  }))
);

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<CustomCircularProgress loading={true} />}>
            <LazyHome />
          </Suspense>
        }
      />
      <Route
        path="/products/:category"
        element={
          <Suspense fallback={<CustomCircularProgress loading={true} />}>
            <LazyProducts />
          </Suspense>
        }
      />
    </Routes>
  );
};
