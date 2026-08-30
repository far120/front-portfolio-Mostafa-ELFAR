export default function GlassCard({ children, className = "", delay = 0 }) {
  return (
    <div
      className={`rounded-4xl border border-white/70 bg-white/85 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100 dark:shadow-[0_18px_60px_rgba(0,0,0,0.4)] ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}