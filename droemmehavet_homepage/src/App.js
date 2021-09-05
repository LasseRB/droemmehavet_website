import { Router, Switch, Link, Route } from "react-router";

import "./App.scss";

import aboutPage from "./AboutPage/AboutPage_Components/AboutPage";
import FrontPage from "./Frontpage/Frontpage_Components/Frontpage";
import webshop from "./WebShopPage/WebShopPage_Components/WebShopPage";
import Header from "./Shared/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <FrontPage />
    </div>
  );
}

export default App;
