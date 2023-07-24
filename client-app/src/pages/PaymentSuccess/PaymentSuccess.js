import React from "react";
import { useLocation } from "react-router-dom";

export const PaymentSuccess = () => {
  const { state } = useLocation();
  const { price } = state;

  return (
    <div className="row" style={{ color: "white", marginTop: "100px" }}>
      <div className="col-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="250"
          fill="currentColor"
          className="bi bi-check-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
        </svg>
      </div>
      <div className="col-9">
        <h2>Payment succeeded - {price} $</h2>
        <p className="mt-4">
          Since it's not a real shop, the payment was fake.
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
          amet dolor nec arcu lacinia luctus. Nunc elementum orci euismod augue
          aliquam viverra. Etiam ultrices condimentum lorem vel elementum.
          Vivamus vulputate gravida diam, vel viverra quam ullamcorper non.
          Fusce sapien massa, rutrum eu metus mollis, convallis condimentum
          nibh. Nulla quis dapibus lorem, ut blandit arcu.
        </p>
      </div>
    </div>
  );
};
