import { observer } from "mobx-react-lite";
import { basketApi } from "../../http/basketApi";
import { useEffect, useState } from "react";
import { BasketItem } from "./BasketItem";
import { useNavigate } from "react-router-dom";
import { paymentApi } from "../../http/paymentApi";

export const Basket = observer(() => {
  const navigate = useNavigate();
  const [basket, setBasket] = useState([]);

  const removeItem = (id) => {
    basketApi.removeProduct(id).then(() => {
      basketApi.getBasket().then((data) => {
        setBasket(data);
      });
    });
  };

  useEffect(() => {
    basketApi.getBasket().then((data) => {
      setBasket(data);
    });
  }, [setBasket]);

  const onPayOrder = () => {
    paymentApi.processPayment().then(({ payedPrice }) => {
      navigate("/payment-success", { state: { price: payedPrice } });
    });
  };

  return (
    <div className="row">
      <h2>Your basket</h2>
      <div className="row mt-4">
        <ul className="list-group">
          {basket.map((item) => (
            <BasketItem item={item} key={item.id} removeItem={removeItem} />
          ))}
        </ul>
        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-success" onClick={() => onPayOrder()}>
            Pay order
          </button>
        </div>
      </div>
    </div>
  );
});
