import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index.js";
import Footer from "./components/Footer/index.js";
import Grid from "./components/Grid/index.js";
import Search from "./components/Search/index.js";
import Save from "./components/Save/index.js"
// import { Search, Saved } from './pages';
// import Results from "./components/Results/index.js";


import "./App.css";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <Routes>
        <div>
          <NavBar />
          <Grid>
           <Saved />
          <Search />
          {/* <Results /> */}
          <Footer />
          </Grid>          
        </div>
      </Routes>
      </BrowserRouter>
    )
  };
};

export default App;