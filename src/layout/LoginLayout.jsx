import React from "react";
import NavigationBar from "../Pages/Shared/NavigationBar.jsx/NavigationBar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
