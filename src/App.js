import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNavbar from "./component/AppNavbar";
import Cart from "./component/Cart";
import Language from "./component/Language";
import Product from "./component/Product";
import { LangProvider } from "./contexts/language";

function App() {
  const [lang, setLang] = useState("ar");
  return (
    <div className="App">
      <LangProvider value={{ lang, setLang }}>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Product />} />{" "}
          <Route path="cart" element={<Cart />} />
          <Route path="lang" element={<Language />} />
        </Routes>
      </LangProvider>
    </div>
  );
}

export default App;
