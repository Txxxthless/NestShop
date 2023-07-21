import React from "react";
import HomeImage from "../../assets/homepage.jpg";

export function Home() {
  return (
    <div className="row" style={{ position: "relative" }}>
      <img
        src={HomeImage}
        alt="Image"
        className="shadow-lg"
        style={{ padding: "0px" }}
      />
      <h1
        style={{
          marginLeft: "25%",
          position: "absolute",
          top: "25%",
          fontSize: "4em",
          color: "white",
        }}
      >
        Wellcome to NestShop!
      </h1>
    </div>
  );
}
