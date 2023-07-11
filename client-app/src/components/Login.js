import React, { useContext, useState } from "react";
import { accountApi } from "../http/accountApi";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "./context/context";

export function Login() {
  const navigate = useNavigate();

  const { user } = useContext(ShopContext);

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault();
    accountApi
      .login({ email, password })
      .then((data) => {
        user.setUser(data);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-3">
        <form onSubmit={(event) => login(event)}>
          <div className="text-center mb-4">
            <h1 className="mb-3">Sign in</h1>
          </div>
          {error ? <p className="text-danger mt-4">{error}</p> : <></>}
          <div className="d-grid">
            <input
              name="email"
              type="email"
              className="form-control"
              autoComplete="off"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              name="password"
              type="password"
              className="form-control mt-4"
              autoComplete="off"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="sumbit" className="btn btn-lg btn-primary mt-3">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
