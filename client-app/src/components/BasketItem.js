import React from "react";

export function BasketItem({ item, removeItem }) {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3">
          <h5>{item.productName}</h5>
        </div>
        <div className="col-3">
          Price:
          <strong style={{ fontStyle: "italic" }}>
            {" "}
            $ {item.productPrice}
          </strong>
        </div>
        <div className="col-3">
          Quantity:{" "}
          <strong style={{ fontStyle: "italic" }}>{item.quantity}</strong>
        </div>
        <div className="col-3 d-flex justify-content-end">
          <button
            className="btn btn-danger"
            onClick={() => removeItem(item.productId)}
          >
            Remove item
          </button>
        </div>
      </div>
    </li>
  );
}
