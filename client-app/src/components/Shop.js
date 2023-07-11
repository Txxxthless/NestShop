import { useContext } from "react";
import { ShopItem } from "./ShopItem";
import { ShopSearch } from "./ShopSearch";
import { ShopContext } from "./context/context";

export function Shop() {
  const { products } = useContext(ShopContext);

  return (
    <div className="row">
      <h1>Shop</h1>
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
    </div>
  );
}
