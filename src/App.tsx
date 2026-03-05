import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Features from './components/Features';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import Comparison from './components/Comparison';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname !== '/' || !hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Problems />
            <HowItWorks />
            <WhoItsFor />
            <Comparison />
            <FinalCTA />
            <Footer />
          </>
        } />
        <Route path="/features" element={
          <>
            <Navbar />
            <Features />
            <Footer />
          </>
        } />
        <Route path="/pricing" element={
          <>
            <Navbar />
            <Pricing />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
