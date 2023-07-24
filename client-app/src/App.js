import "./App.css";
import { shopApi } from "./http/shopApi";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/Home";
import { ShopPage } from "./pages/Shop";
import { BasketPage } from "./pages/Basket";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { ItemDetailsPage } from "./pages/ItemDetails";
import { PaymentSuccessPage } from "./pages/PaymentSuccess";
import { ShopContext } from "./components/context/context";
import { User } from "./store/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles.css";

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
            <Route path="shop" element={<ShopPage />} />
            <Route path="shop/:id" element={<ItemDetailsPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="basket" element={<BasketPage />} />
            <Route path="payment-success" element={<PaymentSuccessPage />} />
          </Route>
        </Routes>
      </ShopContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
