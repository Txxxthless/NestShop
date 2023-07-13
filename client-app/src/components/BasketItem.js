import React from "react";

export function BasketItem({ item, removeItem }) {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3">
          <h5>{item.name}</h5>
        </div>
        <div className="col-6">
          Price:
          <strong style={{ fontStyle: "italic" }}> $ {item.price}</strong>
        </div>
        <div className="col-3 d-flex justify-content-end">
          <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
            Remove item
          </button>
        </div>
      </div>
    </li>
  );
}
