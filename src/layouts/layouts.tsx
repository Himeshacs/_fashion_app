import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header/header";
import { AppRoutes } from "../routes/rotues";

const Layout = () => {
  const appName = "Modern Walk";

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Header appName={appName} />
      </Link>
      <AppRoutes />
    </>
  );
};

export default Layout;
