import React, { Component } from 'react';
import './App.css';
import {Routes, NavBar } from './component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Routes/>
      </div>
    );
  }
}

export default App;
