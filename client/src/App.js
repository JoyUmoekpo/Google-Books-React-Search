import React, { Component } from "react";
import { BrowserRouter, BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index.js";
import Header from "./components/Header/index.js";
import Wrapper from "./components/Wrapper/index.js";
import Jumbotron from "./components/Jumbotron/index.js";

import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Wrapper>
            <Route exact path="/" component={Jumbotron} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/noMatch" component={NoMatch} />
          </Wrapper>            
        </div>
      </Router>
    )
  };
};

export default App;