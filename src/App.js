import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Marketplace from "./components/Marketplace/Marketplace";
import "./App.css";
import Account from "./components/MyAccount/Account";
import Inventory from "./components/MyAccount/Inventory";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header metamaskProvider={props.metamaskProvider} />
        <Routes>
          <Route
            path="/"
            element={<Home metamaskProvider={props.metamaskProvider} />}
          />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/account" element={<Account />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
