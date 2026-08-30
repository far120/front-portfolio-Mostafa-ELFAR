/* eslint-disable react-refresh/only-export-components */

import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootRoute from "./RootRoute";
import Spinner from "../components/ui/Spinner";
import NotFound from "../pages/NotFound";

const HomePage = lazy(() => import("../pages/Home"));
const AboutPage = lazy(() => import("../pages/About"));
const ExperiencePage = lazy(() => import("../pages/Experience"));
const SkillsPage = lazy(() => import("../pages/Skills"));
const CertificationsPage = lazy(() => import("../pages/Certifications"));
const ServicesPage = lazy(() => import("../pages/Services"));
const ProjectsPage = lazy(() => import("../pages/Projects"));
const ContactPage = lazy(() => import("../pages/Contact"));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}

function withSuspense(element) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: withSuspense(<HomePage />) },
      { path: "about", element: withSuspense(<AboutPage />) },
      { path: "experience", element: withSuspense(<ExperiencePage />) },
      { path: "skills", element: withSuspense(<SkillsPage />) },
      { path: "certifications", element: withSuspense(<CertificationsPage />) },
      { path: "services", element: withSuspense(<ServicesPage />) },
      { path: "projects", element: withSuspense(<ProjectsPage />) },
      { path: "contact", element: withSuspense(<ContactPage />) },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
