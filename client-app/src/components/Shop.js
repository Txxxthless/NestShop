import React, { useEffect, useState } from "react";
import { ShopItem } from "./ShopItem";
import { shopApi } from "../http/shopApi";
import { ShopSearch } from "./ShopSearch";
import { ShopContext } from "./context";

export function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    shopApi.getProducts().then((productsFromApi) => {
      setProducts(productsFromApi);
    });
  }, []);

  return (
    <div className="row">
      <h1>Shop</h1>
      <ShopContext.Provider value={{ products, setProducts }}>
        <div className="col-3">
          <ShopSearch />
        </div>
        <div className="col-9">
          <div className="row">
            {products.map((product) => (
              <ShopItem item={product} key={product.id} />
            ))}
          </div>
        </div>
      </ShopContext.Provider>
    </div>
  );
}
