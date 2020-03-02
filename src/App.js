import React from "react";

import Nav from "./components/Navigation/Nav";
import Movie from "./container/Movie_Container";
import TV from "./components/TV/TV";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={Movie}></Route>
        <Route path="/TV" component={TV}></Route>
      </Switch>
    </Router>
  );
}

export default App;
