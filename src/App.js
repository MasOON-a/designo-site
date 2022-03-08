import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './main-pages/home';
import Web from './main-pages/web';
import AppDesign from './main-pages/appDesign';
import Graphic from './main-pages/graphic';
import About from './main-pages/about';
import Locations from './main-pages/locations';
import Contact from './main-pages/contact';
import './App.css';

function App() {

  return (
      <Router basename="/designo-site">
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/web-design" element={<Web />} exact></Route>
          <Route path="/app-design" element={<AppDesign />} exact></Route>
          <Route path="/graphic-design" element={<Graphic />} exact></Route>
          <Route path="/about" element={<About />} exact></Route>
          <Route path="/location" element={<Locations />} exact></Route>
          <Route path="/contact" element={<Contact />} exact></Route>
        </Routes>
      </Router>
  );
}

export default App;
