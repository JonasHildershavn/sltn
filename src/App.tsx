import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { Frontpage } from "./components/Frontpage";

const About = () => {
  return <div>About</div>;
};

function App() {
  return (
    <BrowserRouter>
      <div className="body-container">
        <div
          style={{
            display: "flex",
            margin: 32,
          }}
        >
          <div>
            <Link to="/" className="header-item">
              Home
            </Link>
          </div>
          <div>
            <Link to="/about" className="header-item">
              About
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/" exact={true}>
            <Frontpage />
          </Route>
          <Route path="/about" exact={true}>
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
