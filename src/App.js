
import React, { Component } from 'react';
import Home from './pages/Home';
import RoadToElite from './pages/RoadToElite';
import GameMode from './pages/GameMode';
import MyElite from './pages/MyElite';
import Settings from './pages/Settings';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <div>

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/RoadToElite" element={<RoadToElite />} /> 
          <Route path="/GameMode" element={<GameMode />} /> 
          <Route path="/MyElite" element={<MyElite />} /> 
          <Route path="/Settings" element={<Settings />} /> 
        </Routes>

      </div>
    </>
  );
}

export default App;
