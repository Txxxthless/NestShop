import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "./context/context";

export function ShopItem({ item, addItemToBasket }) {
  const navigate = useNavigate();
  const { user } = useContext(ShopContext);

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
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate(`/shop/${item.id}`);
          }}
        >
          See more
        </button>
        <button
          className="btn btn-success"
          style={{ marginLeft: "10px" }}
          onClick={() => {
            if (!user.user) {
              navigate("/login");
              return;
            }
            addItemToBasket(item.id);
          }}
        >
          To basket
        </button>
      </div>
    </div>
  );
}
