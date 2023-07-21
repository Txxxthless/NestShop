import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shopApi } from "../../http/shopApi";
import { basketApi } from "../../http/basketApi";
import { ShopContext } from "../../components/context/context";

export function ItemDetails() {
  const { id } = useParams();

  const [item, setItem] = useState({});
  const { user } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    shopApi.getProduct(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className="row" style={{ position: "relative" }}>
      <div className="col-4">
        <img src={item.pictureUrl} alt="Product" className="img-fluid" />
      </div>
      <div className="col-5" style={{ fontSize: "1.4em" }}>
        <h2>{item.name}</h2>
        <p className="mt-4">Brand: {item.brand && item.brand.name}</p>
        <p className="mt-4" style={{ fontStyle: "italic" }}>
          {item.description}
        </p>
        <p>
          Price: <strong>$ {item.price}</strong>
        </p>
        <button
          className="btn btn-success"
          style={{ position: "absolute", bottom: "0px" }}
          onClick={() => {
            if (!user.user) {
              navigate("/login");
              return;
            }
            basketApi.addProduct(item.id);
          }}
        >
          Add one to basket
        </button>
      </div>
    </div>
  );
}
