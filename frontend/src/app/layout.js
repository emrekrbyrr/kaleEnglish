import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedScaffold from "@/components/AnimatedScaffold";
import { companyInfo } from "@/mock";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KaleLift",
    template: "%s | KaleLift",
  },
  description: companyInfo.description,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "KaleLift",
    description: companyInfo.description,
    images: ["/favicon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KaleLift",
    description: companyInfo.description,
    images: ["/favicon.png"],
  },
};

export const dynamic = "force-static";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-white text-slate-900">
        <Header />
        <AnimatedScaffold />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
