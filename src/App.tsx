import React, { useState } from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RoleExplanationSection } from './components/RoleExplanationSection';
import { SecurityTechSection } from './components/SecurityTechSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'user' | 'driver'>('user');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden">
        {/* Subtle Ambient Background Gradients for Continuous Glass Depth */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2DA933]/5 rounded-full blur-3xl" />
          <div className="absolute top-2/3 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <RoleExplanationSection currentRole={selectedRole} onRoleChange={setSelectedRole} />
          <SecurityTechSection />
          <FaqSection />
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
