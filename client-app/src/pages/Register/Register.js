import React, { useContext, useState } from "react";
import { accountApi } from "../../http/accountApi";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../components/context/context";
import { Input } from "../../components/forms/Input";

export function Register() {
  const navigate = useNavigate();

  const { user } = useContext(ShopContext);

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function register(event) {
    event.preventDefault();
    accountApi
      .register({ email, password, name })
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
        <form onSubmit={(event) => register(event)}>
          <div className="text-center mb-4">
            <h1 className="mb-3">Register</h1>
          </div>
          {error ? <p className="text-danger mt-4">{error}</p> : <></>}
          <div className="d-grid">
            <Input
              type="email"
              onChange={(value) => {
                setEmail(value);
              }}
            />
            <Input
              type="text"
              placeholder="Enter name"
              onChange={(value) => {
                setName(value);
              }}
            />
            <Input
              type="password"
              onChange={(value) => {
                setPassword(value);
              }}
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
