import React from "react";

export function ShopItem({ item, addItemToBasket }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={item.pictureUrl}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Brand: {item.brand.name}</p>
        <button className="btn btn-primary">See more</button>
        <button
          className="btn btn-success"
          style={{ marginLeft: "10px" }}
          onClick={() => addItemToBasket(item.id)}
        >
          To basket
        </button>
      </div>
    </div>
  );
}
