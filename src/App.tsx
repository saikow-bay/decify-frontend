import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Work from './pages/Work';
import Studio from './pages/Studio';
import Thinkers from './pages/Thinkers';
import WhatWeDoSection from './pages/WhatWeDoSection';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div id="app" className="min-h-[100svh] overflow-x-hidden">
      <Navigation isDark={false} />
      <main>
        <ScrollToTop /> {/* 👈 Scroll arriba al cambiar de ruta */}

        <AnimatePresence mode="wait"> {/* 👈 Transiciones suaves */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/thinkers" element={<Thinkers />} />
            <Route path="/what-we-do" element={<WhatWeDoSection />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;

