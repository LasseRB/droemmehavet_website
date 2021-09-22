import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "./App.scss";

import AboutPage from "./AboutPage/AboutPage_Components/AboutPage";
import FrontPage from "./Frontpage/Frontpage_Components/Frontpage";
import WebshopPage from "./WebShopPage/WebShopPage_Components/WebShopPage";
import TilmeldPage from "./TilmeldPage/TilmeldPage_Components/TilmeldPage";
import Header from "./Shared/Header";

function App() {
  // [theme, setTheme] = useState(props.theme || 'white')
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact>
            <FrontPage />
          </Route>
          
          <Route path="/tilmeld">
            <TilmeldPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
