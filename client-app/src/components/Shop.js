import React, { useEffect, useState } from "react";
import { ShopItem } from "./ShopItem";
import { shopApi } from "../http/shopApi";

export function Shop() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [searchParams, setSearchParams] = useState({
    brand: "",
    search: "",
  });

  useEffect(() => {
    shopApi.getProducts().then((productsFromApi) => {
      setProducts(productsFromApi);
    });
    shopApi.getBrands().then((brandsFromApi) => {
      setBrands(brandsFromApi);
    });
  }, []);

  function onSearch() {
    shopApi
      .getProducts(searchParams.brand, searchParams.search)
      .then((productsFromApi) => {
        setProducts(productsFromApi);
      });
  }

  return (
    <div className="row">
      <h1>Shop</h1>
      <div className="col-3">
        <h5>Seach</h5>
        <input
          type="text"
          className="form-control mb-4"
          autoComplete="off"
          placeholder="Search..."
          onChange={(event) =>
            setSearchParams({ ...searchParams, search: event.target.value })
          }
        />
        <h5>Brands</h5>
        <select
          className="form-select mb-4"
          onChange={(event) =>
            setSearchParams({ ...searchParams, brand: event.target.value })
          }
        >
          {brands.map((brand) => (
            <option value={brand.name} key={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
        <button
          className="btn btn-primary mt-4"
          style={{ width: "100%" }}
          onClick={() => onSearch()}
        >
          Seach
        </button>
      </div>
      <div className="col-9">
        <div className="row">
          {products.map((product) => (
            <ShopItem item={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
