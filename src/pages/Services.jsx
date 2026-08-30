import { FiCode, FiLayers, FiShield, FiShoppingBag, FiSmartphone } from "react-icons/fi";
import PageShell from "../components/portfolio/PageShell";
import GlassCard from "../components/portfolio/GlassCard";
import portfolioData from "../data/portfolioData.json";

export default function ServicesPage() {
  const services = portfolioData.services || [];
  const icons = [FiCode, FiLayers, FiSmartphone, FiShoppingBag, FiShield];

  return (
    <PageShell eyebrow="Services" title="Services" description="High quality development services offered.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
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
    </PageShell>
  );
}