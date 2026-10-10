import Section from './Section';
import { projects } from '../data/content.js';
import GithubIcon from './icons/GithubIcon';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] rounded-2xl p-8 hover:border-accent-500/20 dark:hover:border-accent-400/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-accent-500/5 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
          >
            {project.category === 'ai' && ( <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 via-accent-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> )}
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {project.name}
              </h3>
              {project.status && (
                <span className="text-xs font-mono bg-accent-500/10 text-accent-500 dark:text-accent-400 px-2.5 py-1 rounded-full">
                  {project.status}
                </span>
              )}
            </div>
            {project.subtitle && (
              <div className="text-accent-500 dark:text-accent-400 text-sm font-mono mb-3">
                {project.subtitle}
              </div>
            )}
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            {project.highlights && project.highlights.length > 0 && (
              <ul className="mb-6 space-y-2 flex-grow">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="text-accent-500 mr-2">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-white/[0.06]">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech && project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-zinc-100 dark:bg-white/[0.06] text-xs font-mono px-2.5 py-1 rounded-md text-zinc-600 dark:text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-500 hover:text-accent-500 dark:text-zinc-400 dark:hover:text-accent-400 hover:bg-accent-500/10 rounded-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                    aria-label={`${project.name} GitHub Repository`}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-500 hover:text-accent-500 dark:text-zinc-400 dark:hover:text-accent-400 hover:bg-accent-500/10 rounded-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                    aria-label={`${project.name} Live Demo`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}


