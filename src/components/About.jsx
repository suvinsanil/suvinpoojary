import Section from './Section';
import { about } from '../data/content.js';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-6">
        {about.paragraphs.map((para, idx) => (
          <p key={idx} className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {para}
          </p>
        ))}
        {about.researchInterests && about.researchInterests.length > 0 && (
          <div className="pt-6">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Research Interests</h3>
            <div className="flex flex-wrap gap-3">
              {about.researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300 text-sm font-mono px-4 py-2 rounded-xl hover:border-accent-400/30 transition-all duration-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
