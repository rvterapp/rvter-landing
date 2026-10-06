import React, { useState } from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FlowVideoSimulator } from './components/FlowVideoSimulator';
import { RoleExplanationSection } from './components/RoleExplanationSection';
import { SecurityTechSection } from './components/SecurityTechSection';
import { FleetCatalogSection } from './components/FleetCatalogSection';
import { FaqSection } from './components/FaqSection';
import { DownloadCtaSection } from './components/DownloadCtaSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'user' | 'driver'>('user');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
        <Navbar />
        <main>
          <HeroSection selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
          <FlowVideoSimulator />
          <RoleExplanationSection currentRole={selectedRole} onRoleChange={setSelectedRole} />
          <SecurityTechSection />
          <FleetCatalogSection />
          <FaqSection />
          <DownloadCtaSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
