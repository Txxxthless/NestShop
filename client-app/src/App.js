import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Shop } from "./components/Shop";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="shop" element={<Shop />} />
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
