import React, { Component } from "react";
import "./App.css";
import { Routes, NavBar } from "./component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar className="navContainer" />
        <div className="content">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
