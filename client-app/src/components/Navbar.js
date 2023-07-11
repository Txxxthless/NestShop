import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { ShopContext } from "./context/context";

export const Navbar = observer(() => {
  const { user } = useContext(ShopContext);

  return (
    <header className="d-flex flex-row align-items-center justify-content-center p-3 px-4 mb-3 bg-white border-bottom fixed-top shadow-sm">
      <nav className="my-2 text-uppercase fs-4">
        <Link to="/" className="p-2">
          Home
        </Link>
        {!user.user ? (
          <>
            <Link to="/login" className="p-2">
              Sign in
            </Link>
            <Link to="/register" className="p-2">
              Register
            </Link>
          </>
        ) : (
          <Link to="/" className="p-2">
            Account
          </Link>
        )}
        <Link to="/shop" className="p-2">
          Shop
        </Link>
      </nav>
    </header>
  );
});
