import { FiAlertTriangle, FiHome, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] px-4 py-12">
      <div className="mx-auto w-full max-w-2xl rounded-4xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.1)] sm:p-12">
        <div className="mx-auto inline-flex rounded-2xl bg-amber-50 p-4 text-amber-600">
          <FiAlertTriangle className="text-3xl" />
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Error 404</p>
        <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600">
          The page you are looking for does not exist, may have moved, or the route is not registered yet.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <FiHome />
            Back home
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <FiLogIn />
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}