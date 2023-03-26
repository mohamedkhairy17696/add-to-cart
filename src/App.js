import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNavbar from "./component/AppNavbar";
import Cart from "./component/Cart";
import Product from "./component/Product";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Product />} />{" "}
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
