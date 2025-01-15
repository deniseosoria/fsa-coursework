import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
}

function Blue() {
  return (
    <div className="blue">
      <h1>Blue</h1>
    </div>
  );
}

function Red() {
  return (
    <div className="red">
      <h1>Red</h1>
    </div>
  );
}

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

