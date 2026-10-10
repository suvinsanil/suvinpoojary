import Section from './Section';
import { experience } from '../data/content.js';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((item) => (
          <div key={item.role} className="relative border-l-2 border-accent-500/30 pl-8 pb-2">
            <div className="absolute -left-[5px] top-3 w-2.5 h-2.5 bg-accent-500 rounded-full ring-4 ring-stone-50 dark:ring-[#09090b]" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{item.role}</h3>
              <span className="font-mono text-sm text-accent-500 bg-accent-500/10 px-3 py-1 rounded-lg w-fit">
                {item.period}
              </span>
            </div>
            <div className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-4">
              {item.organization}
            </div>
            {item.points && (
              <ul className="space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-zinc-600 dark:text-zinc-400">
                    <span className="text-accent-500 mr-2 mt-1 text-sm">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
