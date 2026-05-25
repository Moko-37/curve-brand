import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import WhatsAppButton from './component/UI/WhatsAppButton';
import BackToTop from './component/UI/BackToTop';
import Preloader from './component/UI/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Preloader loading={loading} />

      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Header />

        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1a1a1a',
            color: '#fff',
            borderLeft: '4px solid #c9a962',
          },
        }}
      />
    </>
  );
}

export default App;