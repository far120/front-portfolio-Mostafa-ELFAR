import { FiAward, FiExternalLink } from "react-icons/fi";
import PageShell from "../components/portfolio/PageShell";
import GlassCard from "../components/portfolio/GlassCard";
import portfolioData from "../data/portfolioData.json";

export default function CertificationsPage() {
  const certifications = portfolioData.certifications || [];

  return (
    <PageShell eyebrow="Certifications" title="Certifications" description="Professional certificates and credentials.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((certification, index) => (
          <GlassCard key={certification.id || index} delay={index * 0.04} className="p-6">
            <FiAward className="text-3xl text-amber-500" />
            <h3 className="mt-4 text-2xl font-black text-slate-950 dark:text-white">{certification.title}</h3>
            <p className="mt-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">{certification.organization}</p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">Issued {certification.issueDate}</p>
            <a href={certification.credentialUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400">
              View Credential <FiExternalLink />
            </a>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}