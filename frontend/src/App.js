import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TezhibPortfolio from "./components/TezhibPortfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TezhibPortfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;