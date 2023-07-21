import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function Layout() {
  return (
    <>
      <Navbar />
      <div className="banner">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}
