import CountryLandingPage from "@/components/CountryLandingPage";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Suspended Platform Rental South Africa | KaleLift",
    description:
      "Suspended platform and swing stage rental in South Africa. KaleLift's Johannesburg logistics hub means faster delivery to Gauteng, Cape Town, and Durban construction sites. CE/TSE certified ZLP800 systems.",
    alternates: {
      canonical: "/suspended-platform-rental-south-africa",
    },
  };
}

const southAfricaData = {
  name: "South Africa",
  region: "Southern Africa",
  h1: "Suspended Platform & Swing Stage Rental in South Africa",
  metaDescription:
    "KaleLift suspended platform rental in South Africa. Johannesburg logistics hub for fast delivery to Gauteng, Cape Town, and Durban. CE/TSE certified ZLP800 swing stage systems.",
  intro:
    "KaleLift has a dedicated logistics hub in Johannesburg, Gauteng — making South Africa one of our fastest-served markets in Africa. We provide ZLP800 and ZLP630 suspended platform rental for high-rise construction, facade restoration, and industrial maintenance across Gauteng, Western Cape, and KwaZulu-Natal.",
  intro2:
    "Our South Africa operations support major construction projects in Sandton, Cape Town's CBD, and Durban's waterfront developments. All systems are CE and TSE certified with OHSAS-compatible documentation for South African project requirements.",
  whyUs:
    "With our Johannesburg logistics hub, South African contractors get faster lead times, lower freight costs, and direct access to our technical team for support across the country.",
  benefits: [
    "Johannesburg warehouse hub — shortest delivery times in Africa",
    "ZLP800 and ZLP630 certified swing stages for Gauteng projects",
    "Supports Cape Town, Durban, and regional markets",
    "CE/TSE certified with OHSAS-compatible documentation",
    "On-site installation support and crew training",
    "Same time zone support for South African project teams",
    "Short-term and long-term rental packages",
    "Bundle pricing for multi-platform projects",
  ],
  logistics:
    "KaleLift's Johannesburg logistics hub in Gauteng, South Africa enables the fastest delivery times on the continent. Equipment can be distributed to Cape Town, Durban, and other South African cities from our local warehouse.",
  logisticsDetails: [
    { value: "Johannesburg", label: "Local logistics hub" },
    { value: "Fastest in Africa", label: "Delivery lead times" },
    { value: "ZA + EU docs", label: "Compliance documentation" },
  ],
  faq: [
    {
      q: "Do you have a warehouse in South Africa?",
      a: "Yes. KaleLift maintains a logistics hub in Johannesburg, Gauteng. This enables faster equipment dispatch to South African construction sites compared to direct Turkey-to-Africa shipping.",
    },
    {
      q: "Can you service Cape Town and Durban projects?",
      a: "Yes. From our Johannesburg hub we can distribute suspended platform rental packages to Cape Town, Durban, Port Elizabeth, and other South African locations.",
    },
    {
      q: "What safety standards apply for scaffold rental in South Africa?",
      a: "South African construction sites operate under OHS Act regulations. Our CE/TSE certified platforms include full documentation aligned with international safety standards that satisfy local compliance requirements.",
    },
    {
      q: "How quickly can you deliver suspended platforms in South Africa?",
      a: "Due to our Johannesburg hub, delivery to Gauteng sites can be arranged significantly faster than shipping from Turkey. Contact us for current stock availability and lead times.",
    },
  ],
  relatedMarkets: [
    { slug: "suspended-platform-rental-nigeria", label: "Nigeria" },
    { slug: "suspended-platform-rental-ghana", label: "Ghana" },
    { slug: "suspended-platform-rental-kenya", label: "Kenya" },
    { slug: "suspended-platform-rental-germany", label: "Germany" },
  ],
};

export default function SouthAfricaPage() {
  return <CountryLandingPage country={southAfricaData} />;
}
