import React from 'react';
import { personalInfo } from '../data/content.js';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import EmailIcon from './icons/EmailIcon';
import DownloadIcon from './icons/DownloadIcon';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-accent-500/10 dark:bg-accent-500/5 blur-3xl rounded-full mix-blend-multiply dark:mix-blend-screen animate-float" />
        <div className="absolute top-1/4 -right-1/4 w-[40vw] h-[40vw] bg-accent-600/10 dark:bg-accent-600/5 blur-3xl rounded-full mix-blend-multiply dark:mix-blend-screen animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-1/4 left-1/4 w-[60vw] h-[60vw] bg-accent-400/10 dark:bg-accent-400/5 blur-3xl rounded-full mix-blend-multiply dark:mix-blend-screen animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 z-10 flex flex-col items-center text-center">
        <div className="animate-fade-up" style={{ animationDelay: '0ms', animationFillMode: 'both' }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 font-mono text-sm font-medium mb-8 border border-accent-500/20">
            AI & Machine Learning
          </span>
        </div>
        
        <h1 
          className="animate-fade-up text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          {personalInfo.name}
        </h1>
        
        <p 
          className="animate-fade-up text-xl sm:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl mt-6 leading-relaxed"
          style={{ animationDelay: '200ms', animationFillMode: 'both' }}
        >
          {personalInfo.tagline}
        </p>
        
        <div 
          className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center gap-4"
          style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-xl px-8 py-3.5 font-medium shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#09090b]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-zinc-300 dark:border-white/[0.12] rounded-xl px-8 py-3.5 font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/[0.06] active:scale-[0.97] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#09090b]"
          >
            Contact Me
          </a>
        </div>
        
        <div 
          className="animate-fade-up mt-12 flex items-center gap-4"
          style={{ animationDelay: '400ms', animationFillMode: 'both' }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full border border-zinc-200 dark:border-white/[0.08] text-zinc-600 dark:text-zinc-400 hover:border-accent-500/30 hover:text-accent-500 dark:hover:text-accent-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full border border-zinc-200 dark:border-white/[0.08] text-zinc-600 dark:text-zinc-400 hover:border-accent-500/30 hover:text-accent-500 dark:hover:text-accent-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="p-3 rounded-full border border-zinc-200 dark:border-white/[0.08] text-zinc-600 dark:text-zinc-400 hover:border-accent-500/30 hover:text-accent-500 dark:hover:text-accent-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          >
            <EmailIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.resumeFile}
            download
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-200 dark:border-white/[0.08] text-zinc-600 dark:text-zinc-400 hover:border-accent-500/30 hover:text-accent-500 dark:hover:text-accent-400 transition-all duration-300 font-medium text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          >
            <DownloadIcon className="w-4 h-4" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
