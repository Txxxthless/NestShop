import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "./context/context";
import { accountApi } from "../http/accountApi";

export function Account() {
  const navigate = useNavigate();

  const { user } = useContext(ShopContext);

  useEffect(() => {
    console.log(user.user);
    if (!user.user) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="row d-flex jutify-content-center">
      <div className="col-3">
        <h2>Account</h2>
        <p className="mt-4" style={{ fontSize: "1.5em" }}>
          Account email: <strong>{user.user && user.user.email}</strong>
        </p>
        <a
          style={{ textDecoration: "underline", fontSize: "1.5em" }}
          onClick={() => {
            accountApi.logout();
            user.setUser(null);
            navigate("/");
          }}
        >
          Logout
        </a>
      </div>
      <div className="col-7">
        <h2>Your orders</h2>
      </div>
    </div>
  );
}
