import { FiDownload, FiMail } from "react-icons/fi";
import PageShell from "../components/portfolio/PageShell";
import GlassCard from "../components/portfolio/GlassCard";
import SectionHeading from "../components/portfolio/SectionHeading";
import { formatImageUrl } from "../utils/media";
import portfolioData from "../data/portfolioData.json";

export default function AboutPage() {
  const { about } = portfolioData;

  return (
    <PageShell
      eyebrow="About"
      title={about.name}
      // description={about.description}
      actions={[
        <a
          key="cv"
          href="https://drive.google.com/file/d/1C3YFOeusnsNROpjvgK4NlrR_QbSfK1Gq/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
        >
          <FiDownload /> Download CV
        </a>,
        <a
          key="contact"
          href={`mailto:${about.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <FiMail /> Contact
        </a>,
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <GlassCard className="overflow-hidden">
          <div className="aspect-4/5 bg-[linear-gradient(180deg,#0f172a_0%,#0f766e_100%)] p-6 text-white overflow-hidden">
            {about.image ? (
              <img
                src={formatImageUrl(about.image)}
                alt={about.name}
                onError={(e) => {
                  const match = about.image.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || about.image.match(/[?&]id=([a-zA-Z0-9_-]+)/);
                  if (match && match[1] && !e.target.dataset.fallback) {
                    e.target.dataset.fallback = "true";
                    e.target.src = `https://drive.google.com/uc?export=view&id=${match[1]}`;
                  }
                }}
                className="h-full w-full rounded-[1.75rem] object-cover shadow-[0_20px_60px_rgba(15,23,42,0.35)]"
              />
            ) : (
              <div className="flex h-full items-end rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">MERN</p>
                  <h2 className="mt-3 text-3xl font-black">Modern stack, polished delivery.</h2>
                </div>
              </div>
            )}
          </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard className="p-6 sm:p-8">
            <SectionHeading eyebrow="Profile" title={about.title} description={about.description} />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                 "React.js & Next.js",
                "Node.js & Express.js",
                "REST APIs & JWT Authentication",
                "MongoDB & PostgreSQL",
                "TypeScript & JavaScript",
                "Clean Architecture & RBAC",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300">
              <p className="font-semibold text-slate-950 dark:text-white">Email</p>
              
<a
  href={`mailto:${about.email}`}
  className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
>
  <FiMail size={18} />
  {about.email}
</a>

            </div>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8">
            <SectionHeading eyebrow="What to expect" title="Clean delivery with practical UX choices." description="The frontend is designed to be fast, readable, and easy to extend." />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                 { label: "Availability", value: "Open to Work" },
                 { label: "Specialty", value: "Full-Stack Development" },
                 { label: "Backend", value: "Node.js & Express.js" },
                 { label: "Frontend", value: "React.js & Next.js" },
              ].map((item) => (
                <article key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-transform duration-300 hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900/50">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{item.label}</p>
                  <p className="mt-2 text-lg font-bold text-slate-950 dark:text-white">{item.value}</p>
                </article>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </PageShell>
  );
}