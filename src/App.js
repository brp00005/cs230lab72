import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Card from './Card';
import contact from './contact';

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>CS 230L</h1>
      <h2>Section - 02</h2>
      <p>WVU ID: 800367108</p>
      <p>Hi, I am Branden Purdum</p>

      <Navbar />
      <Card />

      
    </div>
  );

}

export default App;
