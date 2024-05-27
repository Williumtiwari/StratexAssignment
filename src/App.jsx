import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import FavMovies from "./pages/FavMovies";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<FavMovies />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
