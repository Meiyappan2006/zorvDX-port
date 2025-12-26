import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Works from './components/Works';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import IntroLoader from './components/IntroLoader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (!isDarkMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? 'bg-zinc-950' : 'bg-slate-50'} transition-colors duration-500 selection:bg-yellow-400 selection:text-black`}>
      <style>
        {`
          /* Refined Light Mode Theme: Industrial Slate & Deep Indigo */
          .light-mode {
            --brand-yellow: #4f46e5; /* indigo-600 for contrast in light mode */
            --brand-black: #f8fafc;
            background-color: #f8fafc !important;
            color: #0f172a !important;
          }
          .light-mode .text-white { color: #0f172a !important; }
          .light-mode .text-yellow-400 { color: #4f46e5 !important; }
          .light-mode .fill-yellow-400 { fill: #4f46e5 !important; }
          .light-mode .bg-yellow-400 { background-color: #4f46e5 !important; color: white !important; }
          .light-mode .bg-yellow-400\\/10 { background-color: rgba(79, 70, 229, 0.1) !important; }
          .light-mode .border-yellow-400\\/20 { border-color: rgba(79, 70, 229, 0.2) !important; }
          .light-mode .border-yellow-400\\/10 { border-color: rgba(79, 70, 229, 0.1) !important; }
          .light-mode .shadow-yellow-400\\/20 { shadow-color: rgba(79, 70, 229, 0.2) !important; }
          
          .light-mode .bg-zinc-950 { background-color: #f1f5f9 !important; }
          .light-mode .bg-zinc-900 { background-color: #e2e8f0 !important; }
          .light-mode .bg-zinc-900\\/50 { background-color: rgba(226, 232, 240, 0.5) !important; }
          .light-mode .glass { background: rgba(255, 255, 255, 0.85); border-color: rgba(0,0,0,0.08); }
          .light-mode .border-zinc-900 { border-color: #e2e8f0 !important; }
          .light-mode .border-zinc-800 { border-color: #cbd5e1 !important; }
          .light-mode .border-zinc-800\\/50 { border-color: rgba(203, 213, 225, 0.5) !important; }
          .light-mode .text-zinc-500 { color: #64748b !important; }
          .light-mode .text-zinc-400 { color: #475569 !important; }
          .light-mode .text-zinc-600 { color: #334155 !important; }
          .light-mode .text-zinc-700 { color: #1e293b !important; }
          .light-mode .grid-bg { 
            background-image: 
              linear-gradient(to right, rgba(79, 70, 229, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(79, 70, 229, 0.05) 1px, transparent 1px);
          }
          .light-mode .text-gradient {
            background: linear-gradient(135deg, #0f172a 0%, #4f46e5 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
      
      <AnimatePresence mode="wait">
        {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Services />
            <Timeline />
            <Works />
            <Team />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;