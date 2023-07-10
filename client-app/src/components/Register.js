import React, { useState } from "react";
import { accountApi } from "../http/accountApi";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function register(event) {
    event.preventDefault();
    accountApi
      .register({ email, password, name })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-3">
        <form onSubmit={(event) => register(event)}>
          <div className="text-center mb-4">
            <h1 className="mb-3">Register</h1>
          </div>
          <div className="d-grid">
            <input
              type="email"
              className="form-control"
              autoComplete="off"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="text"
              className="form-control mt-4"
              autoComplete="off"
              placeholder="Enter name"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="password"
              className="form-control mt-4"
              autoComplete="off"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="sumbit" className="btn btn-lg btn-primary mt-3">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
