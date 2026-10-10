import Section from './Section';
import { publications } from '../data/content.js';
import GithubIcon from './icons/GithubIcon';

export default function Publications() {
  if (!publications?.length) return null;

  return (
    <Section id="publications" title="Publications">
      <div className="grid grid-cols-1 gap-6">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] p-6 sm:p-8 rounded-2xl hover:border-accent-500/20 dark:hover:border-accent-400/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-accent-500/5 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-400 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
            
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{pub.title}</h3>
                <p className="text-accent-500 dark:text-accent-400 text-sm font-mono mt-2">{pub.conference}</p>
              </div>
              <div className="shrink-0">
                <span className="inline-block px-3 py-1 bg-zinc-100 dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-400 text-sm font-mono rounded-lg">
                  {pub.date}
                </span>
              </div>
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              {pub.description}
            </p>
            
            {pub.link && pub.link !== '#' && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              >
                Read Publication <span className="text-lg leading-none">&rarr;</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

