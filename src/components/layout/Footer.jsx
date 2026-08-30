import { FaGithub, FaLinkedinIn, FaWhatsapp  } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { APP_EMAIL, APP_NAME } from "../../constants/appConstants";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200 dark:border-slate-800">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f172a_0%,#0f766e_100%)] text-white">
              MF
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-white">{APP_NAME}</p>
              <p className="text-xs text-slate-400">MERN Portfolio Frontend</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            A polished React and Tailwind frontend connected to live portfolio APIs, built for speed, clarity, and visual confidence.
          </p>
          <a href={`mailto:${APP_EMAIL}`} className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
            <FiMail /> {APP_EMAIL}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Navigate</h3>
          <div className="mt-4 space-y-3 text-sm">
            {links.map((item) => (
              <div key={item.to}>
                <Link to={item.to} className="text-slate-300 transition hover:text-white">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Social</h3>
          <div className="mt-4 flex gap-3">
            <a href="https://github.com/far120" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mostafa-mahmoud-el-far-6a67732b5" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10">
              <FaLinkedinIn />
            </a>
            <a href="https://wa.me/01102453675" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {APP_NAME}. Built with React, Tailwind, Framer Motion, Node, and Express.
      </div>
    </footer>
  );
}