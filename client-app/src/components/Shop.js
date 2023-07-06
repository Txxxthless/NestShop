import React, { useEffect, useState } from "react";
import { ShopItem } from "./ShopItem";
import { shopApi } from "../http/shopApi";

export function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    shopApi.getProducts().then((productsFromApi) => {
      setProducts(productsFromApi);
    });
  }, []);

  return (
    <div className="row">
      <div className="col-3">
        <h1>Search</h1>
      </div>
      <div className="col-9">
        <h1>ShopItems</h1>
        <div className="row">
          {products.map((product) => (
            <ShopItem item={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
