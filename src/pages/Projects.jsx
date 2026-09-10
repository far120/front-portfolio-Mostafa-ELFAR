import { useMemo, useState } from "react";
import { FiCode, FiGithub, FiLink, FiSearch, FiStar } from "react-icons/fi";
import PageShell from "../components/portfolio/PageShell";
import GlassCard from "../components/portfolio/GlassCard";
import ExpandableText from "../components/portfolio/ExpandableText";
import { formatImageUrl } from "../utils/media";
import portfolioData from "../data/portfolioData.json";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [failedImages, setFailedImages] = useState({});

  const projectList = portfolioData.projects || [];

  const techTags = useMemo(() => {
    const tags = new Set();
    projectList.forEach((project) => (project.techStack || []).forEach((tag) => tags.add(tag)));
    return Array.from(tags).slice(0, 12);
  }, [projectList]);

  const visibleProjects = useMemo(() => {
    return projectList.filter((project) => {
      const matchesFilter = filter === "all" ? true : filter === "featured" ? Boolean(project.featured) : (project.techStack || []).some((tag) => tag.toLowerCase() === filter.toLowerCase());
      const matchesSearch = !search || `${project.title} ${project.description} ${(project.techStack || []).join(" ")}`.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [projectList, filter, search]);

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <PageShell eyebrow="Projects" title="Projects" description="Filter projects by featured status or tech stack.">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {[
            { label: "All", value: "all" },
            { label: "Featured", value: "featured" },
            ...techTags.map((tag) => ({ label: tag, value: tag })),
          ].map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === item.value ? "bg-slate-950 text-white dark:bg-emerald-500 dark:text-slate-950" : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
          <FiSearch />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects"
            className="w-56 bg-transparent outline-none placeholder:text-slate-400"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => {
          const hasImage = project.image && !failedImages[project.id || index];

          return (
            <GlassCard key={project.id || index} delay={index * 0.04} className="overflow-hidden">
              <div className="aspect-[16/10] bg-[linear-gradient(135deg,#0f172a_0%,#0f766e_100%)] overflow-hidden relative">
                {hasImage ? (
                  <img
                    src={formatImageUrl(project.image)}
                    alt={project.title}
                    onError={() => handleImageError(project.id || index)}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-end p-5 text-white bg-[linear-gradient(135deg,#0f172a_0%,#0f766e_100%)]">
                    <div>
                      <FiCode className="text-3xl text-amber-300 mb-2" />
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
                  {project.featured ? <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-950/50 dark:text-amber-300">Featured</span> : null}
                </div>
                <ExpandableText text={project.description} />
                <div className="mt-4 flex flex-wrap gap-2">
                  {(project.techStack || []).map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400">
                    Live <FiLink />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                    GitHub <FiGithub />
                  </a>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </PageShell>
  );
}