import Section from './Section';
import { personalInfo } from '../data/content.js';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import EmailIcon from './icons/EmailIcon';

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
          Interested in collaborating or have a question? Feel free to reach out.
        </p>
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] p-5 rounded-2xl hover:border-accent-500/30 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            >
              <div className="p-3 bg-accent-500/10 text-accent-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <EmailIcon className="w-6 h-6" />
              </div>
              <span className="ml-4 font-medium text-zinc-900 dark:text-zinc-100 flex-grow text-left">Email</span>
              <svg className="w-5 h-5 text-zinc-400 group-hover:text-accent-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
          
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] p-5 rounded-2xl hover:border-accent-500/30 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            >
              <div className="p-3 bg-accent-500/10 text-accent-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <GithubIcon className="w-6 h-6" />
              </div>
              <span className="ml-4 font-medium text-zinc-900 dark:text-zinc-100 flex-grow text-left">GitHub</span>
              <svg className="w-5 h-5 text-zinc-400 group-hover:text-accent-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
          
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] p-5 rounded-2xl hover:border-accent-500/30 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            >
              <div className="p-3 bg-accent-500/10 text-accent-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <LinkedInIcon className="w-6 h-6" />
              </div>
              <span className="ml-4 font-medium text-zinc-900 dark:text-zinc-100 flex-grow text-left">LinkedIn</span>
              <svg className="w-5 h-5 text-zinc-400 group-hover:text-accent-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
