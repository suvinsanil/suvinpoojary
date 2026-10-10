import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data/content.js';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ activeSection, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const logoName = personalInfo.name.split(' ')[0];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-zinc-200/50 dark:border-white/[0.06]'
          : 'bg-transparent border-b border-transparent dark:border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono font-bold text-xl text-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md"
        >
          {logoName}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = activeSection === href.replace('#', '');
            return (
              <a
                key={label}
                href={href}
                className={`text-sm font-medium transition-all duration-300 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-sm ${
                  isActive
                    ? 'text-accent-500'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-500" />
                )}
              </a>
            );
          })}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-zinc-500 dark:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md p-1"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-xl border-b border-zinc-200/50 dark:border-white/[0.06] ${
          isMenuOpen ? 'max-h-64' : 'max-h-0 border-transparent dark:border-transparent opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => {
            const isActive = activeSection === href.replace('#', '');
            return (
              <a
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-sm w-fit ${
                  isActive
                    ? 'text-accent-500'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
