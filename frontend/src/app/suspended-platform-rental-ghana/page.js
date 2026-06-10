import CountryLandingPage from "@/components/CountryLandingPage";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Suspended Platform Rental in Ghana | KaleLift",
    description:
      "Suspended platform and swing stage rental in Ghana. KaleLift delivers ZLP800 systems to Accra, Tema, and Kumasi construction sites. CE certified, export-ready documentation.",
    alternates: {
      canonical: "/suspended-platform-rental-ghana",
    },
  };
}

const ghanaData = {
  name: "Ghana",
  region: "West Africa",
  h1: "Suspended Platform & Swing Stage Rental in Ghana",
  metaDescription:
    "ZLP800 suspended platform rental in Ghana for Accra and Tema construction projects. CE/TSE certified swing stage hire with full export support.",
  intro:
    "KaleLift delivers suspended platform rental and swing stage systems to Ghana's growing construction market. Accra's skyline transformation — from mixed-use towers in Cantonments to commercial developments in the CBD — requires reliable, certified access equipment that arrives on schedule.",
  intro2:
    "We ship via Tema Port with complete customs documentation. Our ZLP800 and ZLP630 platforms come with CE and TSE certification, motorized hoists, safety locks, and all accessories for immediate site deployment.",
  whyUs:
    "Ghana's construction sector is expanding rapidly. KaleLift provides the export documentation, certified equipment, and responsive support that project managers and main contractors in Accra and Kumasi need.",
  benefits: [
    "ZLP800 and ZLP630 swing stage rentals for Accra high-rise projects",
    "CE/TSE certified systems with full inspection records",
    "Shipping via Tema Port with customs documentation",
    "On-site rigging guidance and safety training",
    "Modular platform lengths for complex facades",
    "Johannesburg hub for faster West African logistics",
    "Short and long-term rental options available",
    "24/7 technical support during rental period",
  ],
  logistics:
    "Ghana imports via Tema Port near Accra. KaleLift prepares export-ready documentation and coordinates shipping from Turkey with transit times of 3–5 weeks.",
  logisticsDetails: [
    { value: "3–5 weeks", label: "Avg. transit to Tema" },
    { value: "Tema Port", label: "Primary entry point" },
    { value: "CE/TSE", label: "Certification standard" },
  ],
  faq: [
    {
      q: "Do you deliver suspended platforms to Accra, Ghana?",
      a: "Yes. We ship ZLP800 suspended platform rental packages to Accra via Tema Port. Full export documentation, commercial invoice, packing list, and CE certificates are provided for smooth Ghanaian customs clearance.",
    },
    {
      q: "What platform types are available for rental in Ghana?",
      a: "We offer ZLP800 (800 kg rated load) and ZLP630 swing stage systems, modular facade platforms, and temporary suspended scaffold packages. All are CE/TSE certified and configured for export projects.",
    },
    {
      q: "Can you install the scaffold system in Ghana?",
      a: "We provide detailed installation documentation and can coordinate remote engineering support. On-site technical supervision is available for larger projects in Accra and Kumasi.",
    },
    {
      q: "What is the typical rental period for projects in Ghana?",
      a: "Most Ghana projects use 1–6 month rental terms. We offer weekly, monthly, and project-based pricing with discounts for longer rental periods.",
    },
  ],
  relatedMarkets: [
    { slug: "suspended-platform-rental-nigeria", label: "Nigeria" },
    { slug: "suspended-platform-rental-kenya", label: "Kenya" },
    { slug: "suspended-platform-rental-south-africa", label: "South Africa" },
    { slug: "suspended-platform-rental-germany", label: "Germany" },
  ],
};

export default function GhanaPage() {
  return <CountryLandingPage country={ghanaData} />;
}
