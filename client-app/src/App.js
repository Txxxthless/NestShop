import "./App.css";
import { useEffect } from "react";
import { productsApi } from "./http/productsAPI";

function App() {
  useEffect(() => {
    productsApi.getProducts(null, 'coat').then((result) => console.log(result));
  });

  return (
    <div className="container">
      <h1>Wellcome to app</h1>
    </div>
  );
}

export default App;
