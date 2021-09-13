import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/coktail/:id">
          <SingleCocktail></SingleCocktail>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
