import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const corePages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/suspended-platform-rental-africa-europe", priority: 0.95, changeFrequency: "monthly" },
    { path: "/products", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  const countryPages = [
    "/suspended-platform-rental-nigeria",
    "/suspended-platform-rental-ghana",
    "/suspended-platform-rental-kenya",
    "/suspended-platform-rental-south-africa",
    "/suspended-platform-rental-germany",
  ];

  const coreEntries = corePages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const countryEntries = countryPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...coreEntries, ...countryEntries];
}
