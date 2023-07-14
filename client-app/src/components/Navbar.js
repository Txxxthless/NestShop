import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { ShopContext } from "./context/context";
import { accountApi } from "../http/accountApi";

export const Navbar = observer(() => {
  const { user } = useContext(ShopContext);

  const [isDropdownShown, setIsDropdownShown] = useState(false);

  const logout = () => {
    user.setUser(null);
    accountApi.logout();
  };

  return (
    <header className="p-3 px-4 mb-3 bg-white border-bottom fixed-top shadow-sm">
      <nav
        className="my-2 text-uppercase fs-4 d-flex justify-content-between"
        style={{ marginLeft: "30%", marginRight: "30%" }}
      >
        <div>
          <Link to="/" className="p-2">
            Home
          </Link>
        </div>
        {!user.user ? (
          <div>
            <Link to="/login" className="p-2">
              Sign in
            </Link>
            <Link to="/register" className="p-2">
              Register
            </Link>
          </div>
        ) : (
          <div className="dropdown">
            <Link
              className="p-2"
              onClick={() => setIsDropdownShown((value) => !value)}
            >
              Account
            </Link>
            <ul
              class={isDropdownShown ? "dropdown-menu show" : "dropdown-menu"}
            >
              <li>
                <h6 style={{ marginLeft: "10%" }}>Account menu</h6>
                <Link
                  to="/basket"
                  class="dropdown-item mt-4"
                  onClick={() => setIsDropdownShown((value) => !value)}
                >
                  View basket
                </Link>
              </li>
              <li>
                <Link onClick={() => logout()} class="dropdown-item">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div>
          <Link to="/shop" className="p-2">
            Shop
          </Link>
        </div>
      </nav>
    </header>
  );
});
