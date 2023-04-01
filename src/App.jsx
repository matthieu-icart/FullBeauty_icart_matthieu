// IMPORT REACT & REACT-ROUTER-DOM
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// IMPORT LAYOUTS
import Header from './layout/Header/index';
import Footer from './layout/Footer/index';

// IMPORT PAGES
import Home from './pages/Home/index';
import Gallery from './pages/Gallery';
import About from './pages/About/index';
import Service from './pages/Service/index';
import Error from './pages/Error/index';

// RETURN APP & ROUTER
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* HOME */}
        <Route path="/home" element={<Home />} />
        {/* ABOUT */}
        <Route path="/about" element={<About />} />
        {/* SERVICE */}
        <Route path="/service/:id" element={<Service />} />
        {/* GALLERY */}
        <Route path="/gallery" element={<Gallery />} />
        {/* ERROR */}
        <Route path="*" element={<Error />} />
        {/* REDIRECT TO HOME */}
        <Route path="" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
