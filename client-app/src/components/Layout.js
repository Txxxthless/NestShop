import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "150px" }}>
        <Outlet />
      </div>
    </>
  );
}
