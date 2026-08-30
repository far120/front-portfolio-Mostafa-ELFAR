import { useMemo } from "react";
import { FiCode, FiDatabase, FiTool, FiZap } from "react-icons/fi";
import PageShell from "../components/portfolio/PageShell";
import GlassCard from "../components/portfolio/GlassCard";
import portfolioData from "../data/portfolioData.json";

const categoryIcons = {
  frontend: FiCode,
  backend: FiZap,
  database: FiDatabase,
  tools: FiTool,
};

export default function SkillsPage() {
  const skillList = portfolioData.skills || [];

  const groupedSkills = useMemo(() => {
    return skillList.reduce((result, skill) => {
      const category = skill.category || "tools";
      if (!result[category]) {
        result[category] = [];
      }
      result[category].push(skill);
      return result;
    }, {});
  }, [skillList]);

  return (
    <PageShell eyebrow="Skills" title="Skills & Technologies" description="Categorized skills with progress bars.">
      <div className="grid gap-6 xl:grid-cols-2">
        {Object.entries(groupedSkills).map(([category, items], index) => {
          const Icon = categoryIcons[category.toLowerCase()] || FiCode;

          return (
            <GlassCard key={category} delay={index * 0.05} className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-slate-100 p-3 text-emerald-700 dark:bg-slate-800 dark:text-emerald-400">
                  <Icon className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{category}</p>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">{items.length} skills</h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {items.map((skill) => (
                  <div key={skill.id || skill.name}>
                    <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-3 rounded-full bg-slate-100 dark:bg-slate-800">
                      <div className="h-3 rounded-full bg-[linear-gradient(90deg,#0f766e_0%,#f59e0b_100%)]" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </PageShell>
  );
}