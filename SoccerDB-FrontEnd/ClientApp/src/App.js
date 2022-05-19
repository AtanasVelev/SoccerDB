import React from 'react';
import './App.css';
import Home from './components/Home';
import TournamentDetails from './components/TournamentDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tournament" element={<TournamentDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
