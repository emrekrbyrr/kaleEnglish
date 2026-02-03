import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const pages = ["", "/about", "/products", "/suspended-platform-rental-africa-europe", "/contact"];

  return pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
