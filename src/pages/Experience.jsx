import { FiBriefcase } from "react-icons/fi";
import PageShell from "../components/portfolio/PageShell";
import portfolioData from "../data/portfolioData.json";

export default function ExperiencePage() {
  const experiences = portfolioData.experiences || [];

  return (
    <PageShell eyebrow="Experience" title="Experience timeline" description="Structured timeline view of professional history and projects.">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-6 top-2 hidden h-full w-px bg-slate-200 dark:bg-slate-800 md:block" />
        <div className="space-y-5">
          {experiences.map((item, index) => (
            <article key={item.id || index} className="relative rounded-4xl border border-slate-200 bg-slate-50 p-6 transition-transform duration-300 hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900/50 md:ml-10">
              <div className="absolute -left-13 top-6 hidden h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-emerald-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-emerald-400 md:flex">
                <FiBriefcase />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">{item.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400">{item.company}</p>
                </div>
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                  {item.startDate} - {item.endDate || "Present"}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}