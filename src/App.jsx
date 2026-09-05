import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './Pages/About';
import Gallery from './Pages/Media/Gallery';
import News from './Pages/Media/News';
import Helped from './Pages/Helped';
import Contactus from './Pages/Contactus';

// Automatically scroll to top on page change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
        {/* Sticky Global Navbar */}
        <Navbar />

        {/* Dynamic Page Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/helped" element={<Helped />} />
            <Route path="/contact" element={<Contactus />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer with Section 8 & Founders details */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
