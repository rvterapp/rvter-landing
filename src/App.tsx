import React, { useState } from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RoleExplanationSection } from './components/RoleExplanationSection';
import { SecurityTechSection } from './components/SecurityTechSection';
import { FaqSection } from './components/FaqSection';
import { DownloadCtaSection } from './components/DownloadCtaSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'user' | 'driver'>('user');

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden">
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-[#1F7A25] focus:text-white focus:text-sm focus:font-bold">
            Saltar al contenido / Skip to content
          </a>

          <Navbar />
          <main id="main" className="relative z-10">
            <HeroSection />
            <RoleExplanationSection currentRole={selectedRole} onRoleChange={setSelectedRole} />
            <SecurityTechSection />
            <FaqSection />
            <DownloadCtaSection />
          </main>
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
