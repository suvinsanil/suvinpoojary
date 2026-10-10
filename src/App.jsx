import { useMemo } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Publications from './components/Publications.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';
import AIParticles from './components/AIParticles.jsx';
import SideNavigation from './components/SideNavigation.jsx';
import { useTheme } from './hooks/useTheme.js';
import { useActiveSection } from './hooks/useActiveSection.js';
import { navLinks } from './data/content.js';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const sectionIds = useMemo(() => navLinks.map(link => link.href.replace('#', '')), []);
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen relative bg-stone-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
      <AIParticles />
      <SideNavigation activeSection={activeSection} />
      <div className="relative z-10">
        <Navbar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <ScrollReveal delay={0}><About /></ScrollReveal>
          <ScrollReveal delay={0}><Skills /></ScrollReveal>
          <ScrollReveal delay={0}><Experience /></ScrollReveal>
          <ScrollReveal delay={0}><Projects /></ScrollReveal>
          <ScrollReveal delay={0}><Education /></ScrollReveal>
          <ScrollReveal delay={0}><Certifications /></ScrollReveal>
          <ScrollReveal delay={0}><Publications /></ScrollReveal>
          <ScrollReveal delay={0}><Contact /></ScrollReveal>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

