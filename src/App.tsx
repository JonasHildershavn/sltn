import React from "react"; import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import "./App.css";
import {Frontpage} from "./components/Frontpage";
import {ProblemView} from './components/ProblemView';

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
            <Link to="/problem/1" className=" header-item">Problems</Link>
          </div>
        </div>
        <Switch>
          <Route path="/" exact={true}>
            <Frontpage />
          </Route>
          <Route path="/problem/:problemId" exact={true}>
            <ProblemView />
          </Route>
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;
