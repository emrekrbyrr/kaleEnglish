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
  // İkonları buraya ekliyoruz:
  icons: {
    icon: [
      { url: "/K_icon.png", sizes: "48x48", type: "image/png" },
      { url: "/K_icon.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/K_icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "KaleLift",
    description: companyInfo.description,
    images: ["/K_icon.png"], // Burayı da güncelledik
  },
  twitter: {
    card: "summary_large_image",
    title: "KaleLift",
    description: companyInfo.description,
    images: ["/K_icon.png"], // Burayı da güncelledik
  },
};

export const dynamic = "force-static";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <Header />
        <AnimatedScaffold />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
