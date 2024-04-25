import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbart  from './components/Navbart';
import Home from './components/Home'
import Login from './components/Login';
import About from './components/About'

const App = () => {
  return (
    <Router>
      <div>
        <Navbart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
