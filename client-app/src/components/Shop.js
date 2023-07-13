import { useContext } from "react";
import { ShopItem } from "./ShopItem";
import { ShopSearch } from "./ShopSearch";
import { ShopContext } from "./context/context";
import { basketApi } from "../http/basketApi";

export function Shop() {
  const { products } = useContext(ShopContext);

  const addItemToBasket = (id) => {
    basketApi.addProduct(id).catch((error) => console.log(error));
  };

  return (
    <div className="row">
      <h1>Shop</h1>
      <div className="col-3">
        <ShopSearch />
      </div>
      <div className="col-9">
        <div className="row">
          {products.map((product) => (
            <ShopItem
              item={product}
              key={product.id}
              addItemToBasket={addItemToBasket}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
