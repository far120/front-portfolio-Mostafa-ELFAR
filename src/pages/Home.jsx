import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCode, FiCpu, FiDatabase, FiLayers, FiMail, FiShield, FiSmartphone, FiStar } from "react-icons/fi";
import GlassCard from "../components/portfolio/GlassCard";
import SectionHeading from "../components/portfolio/SectionHeading";
import portfolioData from "../data/portfolioData.json";

const featureCopy = [
  { icon: FiCode, title: "Clean frontend systems", text: "Reusable, responsive React UI with Tailwind and subtle transitions." },
  { icon: FiDatabase, title: "Structured Data", text: "Easily powered by custom JSON configuration files." },
  { icon: FiCpu, title: "Smooth interactions", text: "Polished state changes with lightweight interaction feedback." },
];

export default function Home() {
  const { about, projects = [], skills = [], services = [] } = portfolioData;

  const featuredProjects = projects.filter((p) => p.featured);
  const featuredSkills = [...skills].sort((a, b) => b.level - a.level).slice(0, 6);

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_26%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.14),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_45%,#f8fafc_100%)] text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <GlassCard className="overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Available for freelance and full-time work
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.35em] text-amber-600 dark:text-amber-400">
                {about.title}
              </p>
              <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
                {about.name}
                <span className="mt-3 block text-slate-700 dark:text-slate-300">Building premium frontend portfolio experiences.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400 sm:text-xl">
                {about.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400">
                  View Projects <FiArrowUpRight />
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
                  Contact <FiMail />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: "Projects", value: projects.length },
                  { label: "Skills", value: skills.length },
                  { label: "Services", value: services.length },
                  { label: "Status", value: "Available" },
                ].map((item) => (
                  <article key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 dark:border-slate-800 dark:bg-slate-900/50">
                    <p className="text-2xl font-black text-slate-950 dark:text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] p-6 text-white sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.4)]">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Profile snapshot</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f59e0b_0%,#10b981_100%)] text-2xl font-black text-slate-950">
                    ME
                  </div>
                  <div>
                    <p className="text-lg font-bold">{about.name}</p>
                    <p className="text-sm text-slate-300">{about.title}</p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-200">
                  {about.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {featureCopy.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <item.icon className="text-2xl text-amber-300" />
                      <p className="mt-3 text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-2 text-xs leading-6 text-slate-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        <section id="about" className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <GlassCard className="p-6 sm:p-8">
            <SectionHeading eyebrow="About me" title="A portfolio that feels deliberate and premium." description="Designed to showcase technical skills and completed projects." />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Responsive Tailwind layout",
                "Clean React components",
                "Smooth page interactions",
                "Dark mode support",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8">
            <SectionHeading eyebrow="Skills" title="Top technologies at a glance." description="Key tools and frameworks sorted by proficiency level." />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {featuredSkills.map((skill) => (
                <article key={skill.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/50">
                  <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="mt-3 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-2.5 rounded-full bg-[linear-gradient(90deg,#0f766e_0%,#f59e0b_100%)]" style={{ width: `${skill.level}%` }} />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{skill.category}</p>
                </article>
              ))}
            </div>
          </GlassCard>
        </section>

        <section id="projects" className="space-y-5">
          <SectionHeading eyebrow="Projects" title="Featured projects." description="Key highlights from completed work." />
          <div className="grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <GlassCard key={project.id || index} delay={index * 0.05} className="overflow-hidden">
                <div className="aspect-[16/10] bg-[linear-gradient(135deg,#0f172a_0%,#0f766e_100%)] overflow-hidden">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-end p-5 text-white">
                      <div>
                        {project.featured ? <FiStar className="text-amber-300" /> : null}
                        <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
                    {project.featured && <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-950/50 dark:text-amber-300">Featured</span>}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(project.techStack || []).map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400">
                      Live Preview
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                      GitHub
                    </a>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="services" className="space-y-5">
          <SectionHeading eyebrow="Services" title="Services I offer." description="Clean development solutions tailored for web products." />
          <div className="grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((service, index) => {
              const icons = [FiLayers, FiSmartphone, FiShield];
              const ServiceIcon = icons[index % icons.length];

              return (
                <GlassCard key={service.id || index} delay={index * 0.05} className="p-6">
                  <ServiceIcon className="text-3xl text-emerald-700 dark:text-emerald-400" />
                  <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </section>

        <section id="contact" className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <GlassCard className="bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] p-6 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">Contact</p>
            <h2 className="mt-3 text-3xl font-black">Let&apos;s build something sharp and useful.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Reach out via the contact form or send an email to discuss projects and opportunities.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-200">
              <p>Email: {about.email}</p>
              <p>Stack: React, Tailwind CSS, Node.js, Express, MongoDB</p>
            </div>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8">
            <SectionHeading eyebrow="Need a project?" title="Open, fast, and ready for work." description="Feel free to check out all projects or contact me directly." />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400">
                Open Contact Form
              </Link>
              <Link to="/projects" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                Browse All Projects
              </Link>
            </div>
          </GlassCard>
        </section>
      </section>
    </div>
  );
}