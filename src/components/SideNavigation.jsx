import { navLinks } from '../data/content.js';

export default function SideNavigation({ activeSection }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
      {navLinks.map((link) => {
        const sectionId = link.href.replace('#', '');
        const isActive = activeSection === sectionId;
        return (
          <a
            key={sectionId}
            href={link.href}
            className="group relative flex items-center justify-end"
            aria-label={`Scroll to ${link.label}`}
          >
            <span
              className={`absolute right-6 px-2 py-1 rounded-md text-xs font-medium backdrop-blur-md bg-white/10 dark:bg-black/20 border border-zinc-200 dark:border-white/10 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 pointer-events-none whitespace-nowrap ${
                isActive ? 'text-accent-500' : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              {link.label}
            </span>
            <span
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                isActive
                  ? 'bg-accent-500 scale-150 shadow-[0_0_10px_rgba(99,102,241,0.5)]'
                  : 'bg-zinc-300 dark:bg-zinc-700 group-hover:bg-accent-400 group-hover:scale-125'
              }`}
            />
          </a>
        );
      })}
    </div>
  );
}

