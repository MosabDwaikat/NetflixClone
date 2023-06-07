import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "./components/HomeHeader";

const Layout = () => {
  return (
    <div>
      <HomeHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
/*
.Layout-main {
  display: flex;
}
.sidebar-substitute {

  width: 13vw;
  min-height: 400px;
  min-width: 110px;
  background-color: #1b5a7d;
}
.sidebar-container {
  margin-right: 20px;
}
*/
