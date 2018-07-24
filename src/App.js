import React, { Component } from 'react';
import './App.css';
import {AllUsers, NavBar } from './component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <AllUsers/>
      </div>
    );
  }
}

export default App;
