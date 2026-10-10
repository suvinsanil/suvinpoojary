import Section from './Section';
import { skills } from '../data/content.js';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] rounded-2xl p-6 hover:border-accent-500/20 dark:hover:border-accent-400/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
          >
            <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="bg-zinc-100 dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-400 text-sm font-mono px-3 py-1.5 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
