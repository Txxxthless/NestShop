import React, { useState, useEffect, useContext } from "react";
import { shopApi } from "../../http/shopApi";
import { ShopContext } from "../../components/context/context";
import { Input } from "../../components/forms/Input";
import { Select } from "../../components/forms/Select";

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
      <Input
        type="text"
        placeholder="Search..."
        onChange={(value) =>
          setSearchParams({ ...searchParams, search: value })
        }
      />
      <h5 className="mt-4">Brands</h5>
      <Select
        items={brands}
        onChange={(value) => {
          setSearchParams({ ...searchParams, brand: value });
        }}
      />
      <button
        className="btn btn-primary mt-4"
        style={{ width: "100%" }}
        onClick={() => onSearch()}
      >
        Search
      </button>
    </>
  );
}
