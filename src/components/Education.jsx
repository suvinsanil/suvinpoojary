import Section from './Section';
import { education } from '../data/content.js';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {education.map((item) => (
          <div
            key={item.degree}
            className="bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] rounded-2xl p-6 md:p-8 hover:border-accent-500/20 dark:hover:border-accent-400/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{item.degree}</h3>
                <div className="text-zinc-500">{item.institution}</div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <span className="font-mono text-sm text-accent-500 bg-accent-500/10 px-3 py-1 rounded-lg">
                  {item.period}
                </span>
                {item.cgpa && (
                  <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    CGPA: {item.cgpa}
                  </span>
                )}
              </div>
            </div>
            {item.coursework && item.coursework.length > 0 && (
              <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-white/[0.06]">
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3">Key Coursework</div>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="bg-zinc-100 dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-400 text-xs font-mono px-2.5 py-1.5 rounded-lg"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
