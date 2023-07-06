import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Shop } from "./components/Shop";

function App() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "150px" }}>
        <Shop />
      </div>
    </>
  );
}

export default App;
