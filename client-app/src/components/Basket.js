import { observer } from "mobx-react-lite";
import { basketApi } from "../http/basketApi";
import { useEffect, useState } from "react";
import { BasketItem } from "./BasketItem";

export const Basket = observer(() => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    basketApi.getBasket().then((data) => {
      console.log(data);
      setBasket(data);
    });
  }, []);

  return (
    <div className="row">
      <h2>Your basket</h2>
      <div className="row mt-4">
        <ul className="list-group">
          {basket.map((item) => (
            <BasketItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
});
