import CountryLandingPage from "@/components/CountryLandingPage";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Suspended Platform Rental in Nigeria | KaleLift",
    description:
      "KaleLift provides ZLP800 suspended platform rental and swing stage hire in Nigeria. CE/TSE certified systems for Lagos, Abuja, Port Harcourt high-rise construction. Export-ready docs, on-site support.",
    alternates: {
      canonical: "/suspended-platform-rental-nigeria",
    },
  };
}

const nigeriaData = {
  name: "Nigeria",
  region: "West Africa",
  h1: "Suspended Platform & Swing Stage Rental in Nigeria",
  metaDescription:
    "ZLP800 suspended platform rental and swing stage hire in Nigeria for Lagos, Abuja, and Port Harcourt construction projects.",
  intro:
    "KaleLift supplies certified suspended platform systems and swing stage rentals for Nigeria's fast-growing construction sector. From high-rise towers in Lagos to commercial developments in Abuja and industrial projects in Port Harcourt, we provide ZLP800 and ZLP630 packages with full export documentation.",
  intro2:
    "All systems are CE and TSE certified with safety lock assemblies, motorized hoists, and wire rope sets. We handle shipping via Apapa Port (Lagos) with complete customs documentation support.",
  whyUs:
    "Nigeria's construction boom demands reliable, fast-deploying access equipment. KaleLift provides export-ready packages with the documentation Nigerian contractors and project managers need.",
  benefits: [
    "ZLP800 and ZLP630 swing stage packages for Nigerian high-rise projects",
    "CE/TSE certified — meets international safety standards",
    "Customs documentation and export support included",
    "Shipping via Apapa Port, Lagos or Port Harcourt",
    "On-site installation guidance and crew training",
    "24/7 technical support across time zones",
    "Johannesburg logistics hub for faster West African delivery",
    "Flexible rental terms: weekly, monthly, project-based",
  ],
  logistics:
    "We ship to Nigeria via Apapa Port (Lagos) and Port Harcourt Port. Our Johannesburg, South Africa logistics hub helps reduce transit times to West Africa.",
  logisticsDetails: [
    { value: "3–5 weeks", label: "Avg. transit to Lagos" },
    { value: "Apapa / PHC", label: "Entry ports" },
    { value: "Full docs", label: "Customs & export support" },
  ],
  faq: [
    {
      q: "Do you ship suspended platforms to Lagos, Nigeria?",
      a: "Yes. We regularly ship ZLP800 and ZLP630 suspended platform packages to Lagos via Apapa Port. We provide full export documentation, packing lists, and customs support to streamline Nigerian importation.",
    },
    {
      q: "What certifications are accepted on Nigerian construction sites?",
      a: "Most international construction sites in Nigeria accept CE-marked equipment. Our platforms carry CE and TSE certification with full inspection records and technical documentation provided before dispatch.",
    },
    {
      q: "Can you provide on-site support in Nigeria?",
      a: "Yes. We coordinate with local teams and can provide remote engineering guidance and on-site support for installation, safety checks, and crew training in Lagos, Abuja, and Port Harcourt.",
    },
    {
      q: "What is the lead time for swing stage rental to Nigeria?",
      a: "Lead time from order confirmation to delivery at Nigerian ports is typically 3–5 weeks, depending on customization requirements and shipping schedules. We can expedite for urgent project timelines.",
    },
  ],
  relatedMarkets: [
    { slug: "suspended-platform-rental-ghana", label: "Ghana" },
    { slug: "suspended-platform-rental-kenya", label: "Kenya" },
    { slug: "suspended-platform-rental-south-africa", label: "South Africa" },
    { slug: "suspended-platform-rental-germany", label: "Germany" },
  ],
};

export default function NigeriaPage() {
  return <CountryLandingPage country={nigeriaData} />;
}
