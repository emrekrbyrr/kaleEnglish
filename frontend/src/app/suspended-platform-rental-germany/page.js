import CountryLandingPage from "@/components/CountryLandingPage";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Suspended Platform Rental in Germany | KaleLift",
    description:
      "Suspended platform and swing stage rental in Germany. KaleLift delivers CE-certified ZLP800 systems to Munich, Berlin, Hamburg, and Frankfurt construction sites. DGUV-compatible documentation.",
    alternates: {
      canonical: "/suspended-platform-rental-germany",
    },
  };
}

const germanyData = {
  name: "Germany",
  region: "Central Europe",
  h1: "Suspended Platform & Swing Stage Rental in Germany",
  metaDescription:
    "CE-certified suspended platform and swing stage rental in Germany. KaleLift ships ZLP800 systems to Munich, Berlin, Hamburg, and Frankfurt. DGUV-compatible docs.",
  intro:
    "KaleLift provides CE-certified suspended platform rental and swing stage systems for construction and facade projects in Germany. Our platforms meet German and EU safety standards with documentation compatible with DGUV (German Social Accident Insurance) requirements.",
  intro2:
    "From facade restoration in Munich to high-rise construction in Frankfurt and Berlin, KaleLift supports German contractors with export-ready platform packages, engineering guidance, and responsive technical service.",
  whyUs:
    "German construction projects demand rigorous CE compliance and reliable delivery. KaleLift's CE/TSE certified systems come with full technical documentation, inspection records, and engineering support that German project managers expect.",
  benefits: [
    "CE-certified suspended platforms — fully EU compliant",
    "DGUV-compatible safety documentation",
    "ZLP800 and modular facade platform packages",
    "Delivery to Munich, Berlin, Hamburg, Frankfurt, Cologne",
    "Engineering calculations and load planning included",
    "German-compatible guardrail and toe-board systems",
    "Full inspection records dispatched with every unit",
    "Competitive pricing for European projects",
  ],
  logistics:
    "KaleLift ships to Germany via road and sea freight. Delivery to major German cities typically takes 1–2 weeks from Turkey. Full EU customs documentation provided.",
  logisticsDetails: [
    { value: "1–2 weeks", label: "Avg. transit to Germany" },
    { value: "CE certified", label: "EU compliance standard" },
    { value: "DGUV docs", label: "Safety documentation" },
  ],
  faq: [
    {
      q: "Are KaleLift platforms CE certified for German construction sites?",
      a: "Yes. All KaleLift suspended platforms carry CE certification and come with full technical documentation including declarations of conformity, inspection records, and load calculations that meet German and EU requirements.",
    },
    {
      q: "Do you provide DGUV-compatible documentation in Germany?",
      a: "We provide comprehensive safety documentation including CE declarations, inspection certificates, and engineering records. Our team can assist in preparing documentation aligned with DGUV requirements for your specific project.",
    },
    {
      q: "Which German cities do you serve?",
      a: "We deliver to all major German cities including Munich, Berlin, Hamburg, Frankfurt, Cologne, Stuttgart, Düsseldorf, and beyond. Road freight from Turkey reaches Germany in 1–2 weeks.",
    },
    {
      q: "Can you support facade restoration projects in Germany?",
      a: "Yes. We have experience with European facade restoration projects. Our modular platforms are configurable for complex building geometries and include wind protection options suitable for German climate conditions.",
    },
  ],
  relatedMarkets: [
    { slug: "suspended-platform-rental-nigeria", label: "Nigeria" },
    { slug: "suspended-platform-rental-ghana", label: "Ghana" },
    { slug: "suspended-platform-rental-kenya", label: "Kenya" },
    { slug: "suspended-platform-rental-south-africa", label: "South Africa" },
  ],
};

export default function GermanyPage() {
  return <CountryLandingPage country={germanyData} />;
}
