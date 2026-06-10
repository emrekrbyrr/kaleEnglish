import CountryLandingPage from "@/components/CountryLandingPage";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Suspended Platform Rental in Kenya | KaleLift",
    description:
      "Suspended platform and swing stage rental in Kenya. KaleLift ships ZLP800 certified systems to Nairobi and Mombasa. Full export documentation and on-site support.",
    alternates: {
      canonical: "/suspended-platform-rental-kenya",
    },
  };
}

const kenyaData = {
  name: "Kenya",
  region: "East Africa",
  h1: "Suspended Platform & Swing Stage Rental in Kenya",
  metaDescription:
    "ZLP800 suspended platform rental in Kenya for Nairobi and Mombasa projects. CE/TSE certified swing stages with export support.",
  intro:
    "KaleLift provides suspended platform rental and swing stage systems for Kenya's rapidly urbanizing construction sector. Nairobi's vertical expansion — from Upper Hill towers to Westlands commercial high-rises — demands certified, reliable access equipment with proper documentation.",
  intro2:
    "We ship to Kenya via Mombasa Port with full export documentation. Our ZLP800 platforms are CE and TSE certified, export-packaged, and arrive with installation guides, safety records, and technical support.",
  whyUs:
    "Nairobi is one of Africa's fastest-growing skylines. KaleLift supports Kenyan contractors and developers with the certified equipment and responsive service high-rise projects require.",
  benefits: [
    "ZLP800 and ZLP630 rental packages for Nairobi high-rise projects",
    "CE/TSE certified — accepted on international project sites",
    "Shipping via Mombasa Port with customs documentation",
    "Johannesburg hub reduces East African transit times",
    "Full installation and safety training support",
    "Facade access for complex structures and setbacks",
    "Monthly and project-based rental flexibility",
    "Emergency spare parts coordination during rental",
  ],
  logistics:
    "Kenya imports through Mombasa Port. KaleLift ships from Turkey with an average transit time of 4–6 weeks, with documentation sets prepared for Kenyan customs.",
  logisticsDetails: [
    { value: "4–6 weeks", label: "Avg. transit to Mombasa" },
    { value: "Mombasa Port", label: "Primary entry point" },
    { value: "Full docs", label: "Customs & CE certificates" },
  ],
  faq: [
    {
      q: "Do you supply suspended platforms in Nairobi, Kenya?",
      a: "Yes. We ship ZLP800 and ZLP630 suspended platform systems to Kenya via Mombasa Port. All packages include CE certification, export documentation, and technical installation guides.",
    },
    {
      q: "What is the transit time for scaffold rental to Kenya?",
      a: "Typical transit time from Turkey to Mombasa is 4–6 weeks. For urgent requirements, we can advise on available shipping schedules and expedited options.",
    },
    {
      q: "Can KaleLift support projects in Mombasa as well as Nairobi?",
      a: "Yes. We service both Nairobi and Mombasa markets. Equipment arriving at Mombasa Port can be distributed to project sites anywhere in Kenya.",
    },
    {
      q: "What rental terms are available for Kenyan projects?",
      a: "We offer weekly, monthly, and full-project rental packages. Most Kenyan construction projects use 2–8 month terms. We provide bundle discounts for multi-system rentals.",
    },
  ],
  relatedMarkets: [
    { slug: "suspended-platform-rental-nigeria", label: "Nigeria" },
    { slug: "suspended-platform-rental-ghana", label: "Ghana" },
    { slug: "suspended-platform-rental-south-africa", label: "South Africa" },
    { slug: "suspended-platform-rental-germany", label: "Germany" },
  ],
};

export default function KenyaPage() {
  return <CountryLandingPage country={kenyaData} />;
}
