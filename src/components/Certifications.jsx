import Section from './Section';
import { certifications } from '../data/content.js';

export default function Certifications() {
  if (!certifications || !certifications.length) return null;

  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] rounded-2xl p-6 hover:border-accent-500/20 dark:hover:border-accent-400/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">{cert.name}</h3>
              <div className="text-zinc-500 mb-4">{cert.issuer}</div>
            </div>
            <div className="self-start font-mono text-sm text-accent-500 bg-accent-500/10 px-3 py-1 rounded-lg">
              {cert.period}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
