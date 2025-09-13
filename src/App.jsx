import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ToolsSection from '@/components/ToolsSection';
import Footer from '@/components/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="kiernan-lab-theme">
      <div className="min-h-screen animated-bg transition-colors duration-500">
        <Header />
        <main>
          <Hero />
          <ToolsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;