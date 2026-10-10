export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-24 lg:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              <span className="text-accent-400 font-mono text-lg mr-3">//</span>
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
