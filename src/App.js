import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ReactGA from 'react-ga';
import './App.css';
import Home from "./Homepage/Home";
import Footer from "./Homepage/Footer";
import AboutUs from "./pages/AboutUs";
import Navbar from "./Navbar";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Uzeniny from "./pages/gallery/Uzeniny";
import Ostatni from "./pages/gallery/Ostatni";
import UzeneMaso from  "./pages/gallery/UzeneMaso";
import Misy from "./pages/gallery/Misy";

function App() {
    ReactGA.initialize('UA-147541323-1',
         {
        debug: true,
        titleCase: false,
        gaOptions: {
            userId: 123
        }
    });

    return (
      <div>
          <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/o-nas' element={<AboutUs/>} />
                <Route path='/aktuality' element={<AboutUs/>} />
                <Route path='/fotogalerie' element={<Gallery/>} />
                <Route path='/uzeniny' element={<Uzeniny/>} />
                <Route path='/oblozene-misy' element={<Misy/>} />
                <Route path='/uzene-maso' element={<UzeneMaso/>} />
                <Route path='/ostatni-vyrobky' element={<Ostatni/>} />
                <Route path='/kontakt' element={<Contact/>} />
            </Routes>
            <Footer />
          </Router>
      </div>
  )
}

export default App;
