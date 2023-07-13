import "./App.css";
import { shopApi } from "./http/shopApi";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Shop } from "./components/Shop";
import { HomePage } from "./components/HomePage";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ShopContext } from "./components/context/context";
import { User } from "./store/User";
import { Basket } from "./components/Basket";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    shopApi.getProducts().then((productsFromApi) => {
      setProducts(productsFromApi);
    });
  }, []);

  return (
    <>
      <ShopContext.Provider
        value={{
          products: products,
          setProducts: setProducts,
          user: new User(),
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<Shop />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="basket" element={<Basket />} />
          </Route>
        </Routes>
      </ShopContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
