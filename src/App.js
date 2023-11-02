import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';

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

  <div className="App">
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
   </BrowserRouter>
 </div>


}

export default App;
