// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Router } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Tictactoe from './pages/Tictactoe';
import WeatherApp from './pages/WeatherApp';
import PasswordGenerator from './pages/PasswordGenerator';

function App() {
  return(
    <div className='scrollbar-track-visible scrollbar-thumb-dark'>

      <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/day1" element={<Tictactoe />} />
              <Route path="/day2" element={<WeatherApp />} />
              <Route path="/day3" element={<PasswordGenerator />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
