import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import Comparison from './components/Comparison';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problems />
      <Features />
      <HowItWorks />
      <WhoItsFor />
      <Comparison />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
