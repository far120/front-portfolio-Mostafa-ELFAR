export default function PageShell({ eyebrow, title, description, children, actions }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="rounded-4xl border border-white/60 bg-white/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-[0_24px_80px_rgba(0,0,0,0.4)] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:text-emerald-400">
                {eyebrow}
              </p>
            )}
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              {description}
            </p>
          </div>

          {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
        </div>

        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}