import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Features from './components/Features';
import Process from './components/Process';
import PopularTours from './components/PopularTours';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import SakuraBlossom from './components/SakuraBlossom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-japan-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-japan-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-japan-red font-semibold">Experience Japan</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative sakura-bg overflow-x-hidden">
      <SakuraBlossom />
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Features />
        <Process />
        <PopularTours />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;