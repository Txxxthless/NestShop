import React, { useState, useEffect, useContext } from "react";
import { shopApi } from "../http/shopApi";
import { ShopContext } from "./context/context";

export function ShopSearch() {
  const [brands, setBrands] = useState([]);
  const [searchParams, setSearchParams] = useState({
    brand: "",
    search: "",
  });

  const shopContext = useContext(ShopContext);

  useEffect(() => {
    shopApi.getBrands().then((brandsFromApi) => {
      setBrands(brandsFromApi);
    });
  }, []);

  const onSearch = () => {
    shopApi
      .getProducts(searchParams.brand, searchParams.search)
      .then((productsFromApi) => {
        shopContext.setProducts(productsFromApi);
      });
  };

  return (
    <>
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
    </>
  );
}
