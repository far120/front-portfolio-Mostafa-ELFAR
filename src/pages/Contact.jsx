import { useState } from "react";
import { FiCheck, FiClock, FiCopy, FiExternalLink, FiMail, FiMessageSquare, FiSend, FiZap } from "react-icons/fi";
import PageShell from "../components/portfolio/PageShell";
import GlassCard from "../components/portfolio/GlassCard";
import SectionHeading from "../components/portfolio/SectionHeading";
import portfolioData from "../data/portfolioData.json";

export default function ContactPage() {
  const { about } = portfolioData;
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText(about.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <PageShell
      eyebrow="Contact"
      title="Get In Touch"
      description="Reach out directly via email for freelance projects, technical consultation, or career opportunities."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] p-6 text-white sm:p-8 flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">Direct Contact</p>
            <h2 className="mt-3 text-3xl font-black text-white">Let&apos;s build something memorable.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Have a project in mind, a question, or a business opportunity? Send me an email directly and I will get back to you promptly.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/90 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                  <FiMail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Official Email Address</p>
                  <p className="text-lg font-bold text-slate-100">{about.email}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`mailto:${about.email}?subject=Project%20Inquiry%20-%20Mostafa%20ELFAR`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
                >
                  <FiSend className="h-4 w-4" /> Send Direct Email
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-700 hover:text-white"
                >
                  {copied ? <FiCheck className="h-4 w-4 text-emerald-400" /> : <FiCopy className="h-4 w-4" />}
                  {copied ? "Copied!" : "Copy Email"}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800/80 pt-4 text-xs text-slate-400 flex items-center justify-between">
            <span>⚡ Open for new opportunities</span>
            <span className="flex items-center gap-1.5 text-amber-300"><FiZap /> Fast Response</span>
          </div>
        </GlassCard>

        <GlassCard className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <SectionHeading
              eyebrow="Information"
              title="Availability & Support"
              description="Direct communication details for instant collaboration."
            />

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <FiClock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Response Time</h4>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-5">
                    I check my inbox daily and typically reply within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <FiMessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Collaboration Types</h4>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-5">
                    Full-Stack Web Development, Frontend React Architecture, Node.js Backend API Solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={`mailto:${about.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white py-3.5 text-xs font-bold text-slate-800 shadow-sm transition hover:bg-slate-50 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <FiExternalLink /> Open Default Email App ({about.email})
            </a>
          </div>
        </GlassCard>
      </div>
    </PageShell>
  );
}